import { test, expect } from '@playwright/test';

for (const prefix of ['', '/en']) {
  const en = prefix === '/en';
  test(`${prefix || 'ja'}: pages, project data, and matching language links`, async ({ page }) => {
    for (const slug of ['about', 'activities', 'works', 'contact']) {
      await page.goto(`${prefix}/${slug}`, { waitUntil: 'networkidle' });
      await expect(page.locator('html')).toHaveAttribute('lang', en ? 'en' : 'ja');
      await expect(page.locator('.vp-doc h1')).toHaveCount(1);
      await expect(page.locator('.VPSidebar')).toBeVisible();
      const languageLink = page.locator('.VPNavBarTranslations a');
      await expect(languageLink).toHaveAttribute('href', `${en ? '' : '/en'}/${slug}`);
      const languageMenu = page.locator('.VPNavBarTranslations button');
      await languageMenu.focus();
      await page.keyboard.press('Enter');
      await expect(languageMenu).toHaveAttribute('aria-expanded', 'true');
      await expect(languageLink).toBeVisible();
      await page.keyboard.press('Tab');
      await expect(languageLink).toBeFocused();
      await page.keyboard.press('Enter');
      await expect(page).toHaveURL(`http://127.0.0.1:4174${en ? '' : '/en'}/${slug}`);
      await expect(page.locator('html')).toHaveAttribute('lang', en ? 'ja' : 'en');
      await page.goto(`${prefix}/${slug}`, { waitUntil: 'networkidle' });
      if (slug === 'works') {
        await expect(page.locator('.vp-doc h2')).toHaveCount(11);
        await expect(page.locator('#probplan')).toBeVisible();
      }
    }
    await page.goto(`${prefix}/`);
    await expect(page.locator('.vp-doc ul:not(.social-links) > li')).toHaveCount(0);
    await expect(page.locator('.VPHomeFeatures .VPFeature')).toHaveCount(4);
    await expect(page.locator('.VPHomeFeatures .icon')).toHaveCount(4);
    await expect(page.locator('.VPHomeHero .text')).toHaveCount(0);
    await expect(page.locator('.VPFooter')).toHaveCount(0);
    await expect(page.locator('.VPSidebar')).toHaveCount(0);
    await expect(page.locator('.VPDocAside')).toHaveCount(0);
    await expect(page.locator('.VPNavBarSocialLinks a')).toHaveCount(5);
    await expect(page.locator('.VPHomeHero img')).toHaveAttribute('src', '/avatar/source.png');
    await expect(page.locator('.VPHomeHero img')).toBeVisible();
  });

  test(`${prefix || 'ja'}: legacy profile anchors`, async ({ page }) => {
    for (const [hash, target] of [
      ['about', '/about'],
      ['skills', '/about#skills'],
      ['career', '/activities'],
    ]) {
      await page.goto(`${prefix}/#${hash}`);
      await expect(page).toHaveURL(`http://127.0.0.1:4174${prefix}${target}`);
    }
  });

  test(`${prefix || 'ja'}: search indexes shared project descriptions`, async ({ page }) => {
    await page.goto(`${prefix}/`);
    await page.keyboard.press('ControlOrMeta+k');
    const search = page.locator('#localsearch-input');
    await expect(search).toBeFocused();
    await search.fill(en ? 'recording voice' : '録音');
    const result = page.locator('.VPLocalSearchBox a').filter({ hasText: 'GovSparkBot' }).first();
    await expect(result).toBeVisible();
    await expect(result).toHaveAttribute('href', new RegExp(`${prefix}/works#govsparkbot$`));
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(new RegExp(`${prefix}/works#govsparkbot$`));
    await page.keyboard.press('ControlOrMeta+k');
    await expect(search).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(search).toHaveCount(0);
  });

  test(`${prefix || 'ja'}: native form validation without sending`, async ({ page }) => {
    await page.goto(`${prefix}/contact`);
    await expect(page.locator('form.contact-form')).toHaveAttribute(
      'action',
      'https://formspree.io/f/xgawlzep',
    );
    await expect(page.locator('form.contact-form')).toHaveAttribute('method', 'POST');
    await page.locator('#contact-name').focus();
    await page.keyboard.type('Test');
    await page.keyboard.press('Tab');
    await expect(page.locator('#contact-email')).toBeFocused();
    await page.keyboard.type('invalid');
    await page.keyboard.press('Tab');
    await expect(page.locator('#contact-message')).toBeFocused();
    await page.keyboard.type('Preview only');
    await page.keyboard.press('Tab');
    await expect(page.locator('form button')).toBeFocused();
    expect(
      await page.locator('form').evaluate((form: HTMLFormElement) => form.checkValidity()),
    ).toBe(false);
    await page.locator('#contact-email').fill('preview@example.com');
    expect(
      await page.locator('form').evaluate((form: HTMLFormElement) => form.checkValidity()),
    ).toBe(true);
    await page.locator('#contact-message').fill('');
    expect(
      await page.locator('form').evaluate((form: HTMLFormElement) => form.checkValidity()),
    ).toBe(false);
  });
}

for (const width of [375, 768, 1440]) {
  test(`layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 375 ? 812 : 900 });
    for (const prefix of ['', '/en']) {
      for (const slug of ['', 'about', 'activities', 'works', 'contact']) {
        await page.goto(`${prefix}/${slug}`, { waitUntil: 'networkidle' });
        expect(
          await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
        ).toBe(true);
        if (!slug) {
          const target =
            width === 1440 ? page.locator('.VPHomeFeatures') : page.locator('.VPHomeHero .actions');
          const box = await target.boundingBox();
          expect(box!.y + box!.height).toBeLessThan(width === 375 ? 812 : 900);
        }
      }
    }
    await page.goto('/');
    await page.screenshot({ path: `test-results/home-${width}.png`, fullPage: true });
  });
}

test('keyboard navigation on mobile and theme persistence', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/about');
  const menu = page.getByRole('button', { name: 'ページ一覧' });
  await menu.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.VPSidebar')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  const hamburger = page.getByRole('button', { name: 'mobile navigation' });
  await hamburger.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.VPNavScreen')).toBeVisible();
  await expect(page.locator('.VPNavScreen .VPSocialLink')).toHaveCount(5);
  const switcher = page.locator('.VPNavScreen').getByRole('switch');
  await switcher.focus();
  await page.keyboard.press('Space');
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.screenshot({ path: 'test-results/about-mobile-dark.png', fullPage: true });
});

test('404 returns a useful home link', async ({ page }) => {
  await page.goto('/missing-page');
  await expect(page.locator('.missing-page h1')).toHaveText('ページが見つかりません');
  await page.getByRole('link', { name: 'ホームへ戻る' }).click();
  await expect(page.locator('.VPHomeHero .name')).toBeVisible();
  await page.goto('/en/missing-page');
  await expect(page.locator('.missing-page h1')).toHaveText('Page not found');
  await expect(page.getByRole('link', { name: 'Return home' })).toHaveAttribute('href', '/en/');
});

import { defineConfig, type DefaultTheme } from 'vitepress';
import { renderWorks } from './data/renderWorks';
import { socialLinks } from './data/socials';

function theme(locale: 'ja' | 'en'): DefaultTheme.Config {
  const en = locale === 'en';
  const prefix = en ? '/en' : '';
  const pages = [
    { text: en ? 'About' : '自己紹介', link: `${prefix}/about` },
    { text: en ? 'Activities' : '活動・経歴', link: `${prefix}/activities` },
    { text: en ? 'Projects' : 'つくったもの', link: `${prefix}/works` },
  ];
  return {
    logo: { src: '/avatar/source.png', alt: '' },
    nav: pages,
    sidebar: [
      {
        text: 'namiyama',
        items: [
          { text: en ? 'Home' : 'ホーム', link: `${prefix}/` },
          ...pages,
          { text: en ? 'Contact' : '連絡先', link: `${prefix}/contact` },
        ],
      },
    ],
    outline: { level: [2, 3], label: en ? 'On this page' : 'このページの内容' },
    docFooter: { prev: en ? 'Previous' : '前のページ', next: en ? 'Next' : '次のページ' },
    sidebarMenuLabel: en ? 'Pages' : 'ページ一覧',
    returnToTopLabel: en ? 'Back to top' : 'ページの先頭へ',
    darkModeSwitchLabel: en ? 'Appearance' : '表示テーマ',
    lightModeSwitchTitle: en ? 'Switch to light theme' : 'ライトテーマに切り替える',
    darkModeSwitchTitle: en ? 'Switch to dark theme' : 'ダークテーマに切り替える',
    langMenuLabel: en ? 'Change language' : '言語を切り替える',
    skipToContentLabel: en ? 'Skip to content' : '本文へ移動',
  };
}

export default defineConfig({
  title: 'namiyama',
  description: '学生としての活動と、Webサービス・ツール・Botの制作記録。',
  cleanUrls: true,
  base: '/',
  lastUpdated: false,
  sitemap: { hostname: 'https://namiyama814.github.io' },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'namiyama' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
  ],
  transformHead({ pageData }) {
    const url = `https://namiyama814.github.io/${pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '')}`;
    const title = pageData.title ? `${pageData.title} | namiyama` : 'namiyama';
    return [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: pageData.description }],
      ['meta', { property: 'og:url', content: url }],
      [
        'meta',
        {
          property: 'og:locale',
          content: pageData.relativePath.startsWith('en/') ? 'en_US' : 'ja_JP',
        },
      ],
    ];
  },
  locales: {
    root: { label: '日本語', lang: 'ja', themeConfig: theme('ja') },
    en: {
      label: 'English',
      lang: 'en',
      description: 'Student activities and projects: web services, tools, and bots.',
      themeConfig: theme('en'),
    },
  },
  themeConfig: {
    socialLinks: socialLinks.map(({ name, icon, href }) => ({ icon, link: href, ariaLabel: name })),
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize(text) {
              return Array.from(new Intl.Segmenter('ja', { granularity: 'word' }).segment(text))
                .filter((part) => part.isWordLike)
                .map((part) => part.segment);
            },
          },
        },
        locales: {
          root: {
            translations: {
              button: { buttonText: '検索', buttonAriaLabel: 'サイト内を検索' },
              modal: {
                displayDetails: '詳細を表示',
                resetButtonTitle: '検索をクリア',
                backButtonTitle: '検索を閉じる',
                noResultsText: '一致するページはありません',
                footer: {
                  selectText: '選択',
                  selectKeyAriaLabel: 'Enter',
                  navigateText: '移動',
                  navigateUpKeyAriaLabel: '上矢印',
                  navigateDownKeyAriaLabel: '下矢印',
                  closeText: '閉じる',
                  closeKeyAriaLabel: 'Escape',
                },
              },
            },
          },
        },
      },
    },
  },
  markdown: {
    config(md) {
      md.core.ruler.before('normalize', 'shared-projects', (state) => {
        state.src = state.src.replace(/<!-- works:(ja|en) -->/g, (_, locale: 'ja' | 'en') =>
          renderWorks(locale),
        );
      });
    },
  },
});

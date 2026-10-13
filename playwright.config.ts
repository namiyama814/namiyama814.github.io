import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  use: { baseURL: 'http://127.0.0.1:4174', browserName: 'chromium' },
  webServer: {
    command: 'pnpm preview --port 4174',
    url: 'http://127.0.0.1:4174',
    reuseExistingServer: false,
  },
});

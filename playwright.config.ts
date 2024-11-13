import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';

// Read .env
config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 1,
  workers: process.env.CI ? 2 : 2,
  reporter: 'html',
  use: {
    baseURL: process.env.E2E_TEST_BASE_URL,
    trace: 'on',
    storageState: './cookies.json',
  },
  globalSetup: './tests/globalSetup.ts',

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

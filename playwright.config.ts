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
  },
  projects: [
    { name: 'setup', testMatch: '**/tests/*.setup.ts' },

    {
      name: 'auth',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/auth/*.spec.ts',
    },
    {
      name: 'bookkeeping-chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'cookies.json',
      },
      dependencies: ['setup'],
      testMatch: '**/bookkeeping/*.spec.ts',
    },
    {
      name: 'contactCreation-chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'cookies.json',
      },
      dependencies: ['setup'],
      testMatch: '**/contactCreation/*.spec.ts',
    },
  ],
});

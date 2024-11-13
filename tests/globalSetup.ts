import { Browser, chromium, FullConfig, Page } from '@playwright/test';
import { AuthPage } from '../pageObject/pages/Auth/AuthPage';

async function authSetup(config: FullConfig) {
  const baseURL = config.projects?.[0]?.use?.baseURL || 'http://localhost:3000';
  const browser: Browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page: Page = await context.newPage();
  await page.goto(`${baseURL}/`, { waitUntil: 'domcontentloaded' });
  try {
    const authPage = new AuthPage(page);
    await authPage.loginToApp();

    await page.context().storageState({ path: 'cookies.json' });
    await browser.close();
  } catch (error) {
    throw new Error('Login failed, ', error);
  }
}

export default authSetup;

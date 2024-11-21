import { AuthPage } from '../pageObject/pages/Auth/AuthPage';
import { test as setup } from '@playwright/test';

setup('authenticate', async ({ page }) => {
  await page.goto('/');
  const authPage = new AuthPage(page);
  await authPage.loginToApp();

  await page.context().storageState({ path: 'cookies.json' });
});
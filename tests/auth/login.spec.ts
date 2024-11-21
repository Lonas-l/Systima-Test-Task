import { expect } from '@playwright/test';
import { test } from '../../fixtures/pages-initialization';
import { ERROR_MESSAGES } from '../../constants/dictionary';

test.describe('Login Module', () => {
  test.beforeEach(async ({ page }) => {
    await page.context().clearCookies();
    await page.goto('/');
  });

  test('Successful Login', async ({ page, authPage, dashboardPage }) => {
    await authPage.loginToApp();
    await page.goto('/dashboard', { waitUntil: 'domcontentloaded' });

    expect(page.url()).toContain('/dashboard');
    await expect(dashboardPage.elements.grid).toBeVisible();
  });

  test('Failed Login', async ({ authPage }) => {
    const incorrectAuthData = {
      email: 'wrong@test.com',
      password: 'wrongpassword',
    };

    await authPage.loginToApp({ ...incorrectAuthData, isWait: false });

    await expect(authPage.baseElements.alert).toBeVisible();
    await expect(authPage.baseElements.alert).toHaveText(
      ERROR_MESSAGES.INCORRECT_AUTH_DATA
    );
  });
});

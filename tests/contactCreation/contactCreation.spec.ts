import { expect } from '@playwright/test';
import { test } from '../../fixtures/pages-initialization';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '../../constants/dictionary';

test.describe('Contact Creation Module', () => {
  test.beforeEach(async ({ page, contactPage }) => {
    await page.goto('/dashboard');
    await contactPage.chooseSideMenuTab('Kontakter');
  });

  test('Contact Creation - Validation', async ({ contactPage }) => {
    await contactPage.openNewContactForm();
    await contactPage.baseElements.submitBtn.click();

    await expect(contactPage.baseElements.alert).toBeVisible();
    await expect(contactPage.baseElements.alert).toHaveText(
      ERROR_MESSAGES.MISSED_NAME
    );
  });

  test('Contact Creation - Success', async ({ contactPage }) => {
    const testData = {
      name: 'test',
    };

    await contactPage.addNewContact(testData);

    await expect(contactPage.baseElements.toastNotification).toBeVisible();
    await expect(contactPage.baseElements.toastNotification).toHaveText(
      SUCCESS_MESSAGES.CONTACT_CREATED
    );
  });
});

import { expect } from '@playwright/test';
import { test } from '../../fixtures/pages-initialization';
import { ERROR_MESSAGES } from '../../constants/dictionary';

test.describe('Bookkeeping Module', () => {
  test.beforeEach(async ({ page, bookkeepingPage }) => {
    await page.goto('/dashboard');
    await bookkeepingPage.chooseSideMenuTab('Bokfør andre filer');
  });

  test('Create Purchase', async ({ bookkeepingPage }) => {
    const testData = {
      contact: 'Systima AS',
      amount: '100',
      invoiceDate: '01.01.2024',
      dueDate: '15.01.2024',
      account: '1000 Utvikling, ervervet',
    };

    await bookkeepingPage.createPurchase(testData);

    await expect(bookkeepingPage.elements.successToast).toBeVisible();
    for (const key in testData) {
      await expect(
        bookkeepingPage.elements[key as keyof typeof bookkeepingPage.elements]
      ).toHaveValue('');
    }
  });

  test('Duplicate Invoice Number Handling', async ({ bookkeepingPage }) => {
    const testData = {
      amount: '100',
      contact: 'Systima AS',
      invoiceDate: '01.01.2024',
      dueDate: '15.01.2024',
      account: '1000 Utvikling, ervervet',
      invoiceNumber: '1',
    };

    await bookkeepingPage.createPurchase({ ...testData, isSave: false });
    await bookkeepingPage.elements.bookBtn.click();

    await expect(bookkeepingPage.baseElements.alert).toBeVisible();
    await expect(bookkeepingPage.baseElements.alert).toContainText(
      ERROR_MESSAGES.BOOKED_INVOICE
    );
  });
});

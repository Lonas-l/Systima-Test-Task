import { Page } from '@playwright/test';
import { SUCCESS_MESSAGES } from '../../../constants/dictionary';

export function elementsInitializations(page: Page) {
  return {
    contact: page.getByLabel('Kontakt (valgfri ved kvittering)'),
    amount: page.getByLabel('Totalt beløp inkl. mva. *'),
    invoiceDate: page.getByLabel('Fakturadato *'),
    dueDate: page.getByLabel('Forfallsdato'),
    invoiceNumber: page.getByLabel('Fakturanr.'),
    account: page.getByRole('textbox', { name: 'Konto *' }),
    successToast: page.getByText(SUCCESS_MESSAGES.PURCHASE_CREATED, {
      exact: false,
    }),
    bookBtn: page.getByText('Bokfør', { exact: true }),
  } as const;
}

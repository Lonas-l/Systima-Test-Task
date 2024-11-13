import type { Page } from '@playwright/test';
import { BasePage } from '../Base/BasePage';
import { elementsInitializations } from './initializations';
import { CREATE_PURCHASE_REQUEST } from '../../../constants/requestData';
import { PurchaseData } from './types';

export class BookkeepingPage extends BasePage {
  readonly elements: ReturnType<typeof elementsInitializations>;

  constructor(page: Page) {
    super(page);

    this.elements = elementsInitializations(page);
  }

  createPurchase = async (data: PurchaseData) => {
    await this.chooseDropDownValue({
      dropDown: this.elements.contact,
      value: data.contact,
    });

    await this.elements.amount.fill(data.amount);
    await this.elements.invoiceDate.fill(data.invoiceDate);
    await this.elements.dueDate.fill(data.dueDate);

    await this.chooseDropDownValue({
      dropDown: this.elements.account,
      value: data.account,
    });

    if (data.invoiceNumber)
      await this.elements.invoiceNumber.fill(data.invoiceNumber);

    if (data.isSave ?? true) {
      await this.clickAndWait({
        button: this.elements.bookBtn,
        request: CREATE_PURCHASE_REQUEST,
      });
    }
  };
}

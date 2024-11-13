import type { Page } from '@playwright/test';
import { BasePage } from '../Base/BasePage';
import { elementsInitializations } from './initializations';
import { NewContactProps } from './types';
import {
  CREATE_CONTACT_REQUEST,
  NUMBER_SUGGESTIONS_REQUEST,
} from '../../../constants/requestData';

export class ContactPage extends BasePage {
  readonly elements: ReturnType<typeof elementsInitializations>;

  constructor(page: Page) {
    super(page);

    this.elements = elementsInitializations(page);
  }

  openNewContactForm = async () => {
    await this.clickAndWait({
      button: this.elements.createContactBtn,
      request: NUMBER_SUGGESTIONS_REQUEST,
    });
    await this.elements.formWindow.waitFor({ state: 'visible' });
  };

  addNewContact = async (contact: NewContactProps) => {
    await this.openNewContactForm();

    await this.elements.nameInput.fill(contact.name);
    await this.clickAndWait({
      button: this.baseElements.submitBtn,
      request: CREATE_CONTACT_REQUEST,
    });
  };
}

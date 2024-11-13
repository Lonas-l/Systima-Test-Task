import { Page } from '@playwright/test';

export function elementsInitializations(page: Page) {
  return {
    formWindow: page.locator('.v-form'),
    nameInput: page.getByLabel('Navn *'),
    createContactBtn: page.locator('#contacts-create-contact-button'),
  } as const;
}

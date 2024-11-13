import { Page } from '@playwright/test';

export function elementsInitializations(page: Page) {
  return {
    submitBtn: page.locator('[type=submit]'),
    alert: page.getByRole('alert'),
    searchDropdown: page.getByLabel('Søk'),
    option: page.getByRole('option'),
    menuItems: page.locator('.v-list-item'),
    toastNotification: page.getByRole('main').getByRole('status'),
  } as const;
}

import { Page } from '@playwright/test';

export function elementsInitializations(page: Page) {
  return {
    emailInput: page.locator('[name=email]'),
    passwordInput: page.locator('[name=password]'),
  } as const;
}

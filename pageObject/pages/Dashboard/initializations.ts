import { Page } from '@playwright/test';

export function elementsInitializations(page: Page) {
  return {
    grid: page.locator('.dashboard-grid'),
  } as const;
}

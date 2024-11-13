import type { Page } from '@playwright/test';
import { elementsInitializations } from './initializations';
import { BasePage } from '../Base/BasePage';

export class DashboardPage extends BasePage {
  readonly elements: ReturnType<typeof elementsInitializations>;

  constructor(page: Page) {
    super(page);

    this.elements = elementsInitializations(page);
  }
}

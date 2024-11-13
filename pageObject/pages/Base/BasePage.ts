import type { Page } from '@playwright/test';
import { elementsInitializations } from './initializations';
import { ChooseDropDownProps, ClickAndWaitProps } from './types';

export class BasePage {
  protected page: Page;
  readonly baseElements: ReturnType<typeof elementsInitializations>;

  constructor(page: Page) {
    this.page = page;

    this.baseElements = elementsInitializations(page);
  }

  clickAndWait = async ({ button, request }: ClickAndWaitProps) => {
    await Promise.all([
      button.click(),
      this.page.waitForResponse(
        (response) =>
          response.url().includes(request.url) &&
          response.status() === request.expectedStatus
      ),
    ]);
  };

  chooseSideMenuTab = async (menuName: string) => {
    if (menuName === 'Bokfør andre filer')
      await this.baseElements.menuItems.getByText('Bokføring').click();

    await this.baseElements.menuItems.getByText(menuName).click();
  };

  chooseDropDownValue = async ({ dropDown, value }: ChooseDropDownProps) => {
    await dropDown.click();

    await this.baseElements.option.getByText(value).click();
  };
}

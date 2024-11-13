import type { Page } from '@playwright/test';
import { BasePage } from '../Base/BasePage';
import { elementsInitializations } from './initializations';
import { LoginProps } from './types';
import { LOGIN_REQUEST } from '../../../constants/requestData';

export class AuthPage extends BasePage {
  readonly elements: ReturnType<typeof elementsInitializations>;

  constructor(page: Page) {
    super(page);

    this.elements = elementsInitializations(page);
  }

  loginToApp = async (authData: LoginProps = { isWait: true }) => {
    await this.elements.emailInput.fill(
      authData.email ?? (process.env.TEST_USER as string)
    );
    await this.elements.passwordInput.fill(
      authData.password ?? (process.env.TEST_PASS as string)
    );

    if (authData.isWait) {
      await this.clickAndWait({
        button: this.baseElements.submitBtn,
        request: LOGIN_REQUEST,
      });
    } else {
      await this.baseElements.submitBtn.click();
    }
  };
}

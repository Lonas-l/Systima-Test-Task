import { Locator } from '@playwright/test';
import { RequestDataTypes } from '../../../types/globalTypes';

export interface ClickAndWaitProps {
  button: Locator;
  request: RequestDataTypes;
}

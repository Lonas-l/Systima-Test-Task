import { RequestDataTypes } from '../types/globalTypes';
import * as process from 'node:process';

export const LOGIN_REQUEST: RequestDataTypes = {
  url: `${process.env.E2E_TEST_API_URL}/auth`,
  method: 'POST',
  expectedStatus: 200,
};

export const CREATE_CONTACT_REQUEST: RequestDataTypes = {
  url: `/contacts`,
  method: 'POST',
  expectedStatus: 200,
};

export const NUMBER_SUGGESTIONS_REQUEST: RequestDataTypes = {
  url: `/contacts/account_number_suggestions`,
  method: 'GET',
  expectedStatus: 200,
};

export const CREATE_PURCHASE_REQUEST: RequestDataTypes = {
  url: `/purchases`,
  method: 'POST',
  expectedStatus: 200,
};

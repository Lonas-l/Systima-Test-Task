import { test as baseTest } from '@playwright/test';
import { AuthPage } from '../pageObject/pages/Auth/AuthPage';
import { DashboardPage } from '../pageObject/pages/Dashboard/DashboardPage';
import { ContactPage } from '../pageObject/pages/Contact/ContactPage';
import { BookkeepingPage } from '../pageObject/pages/Bookkeeping/BookkeepingPage';

export const test = baseTest.extend<{
  authPage: AuthPage;
  dashboardPage: DashboardPage;
  contactPage: ContactPage;
  bookkeepingPage: BookkeepingPage;
}>({
  authPage: async ({ page }, use) => {
    const authPage: AuthPage = new AuthPage(page);
    await use(authPage);
  },
  dashboardPage: async ({ page }, use) => {
    const dashboardPage: DashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },
  contactPage: async ({ page }, use) => {
    const contactPage: ContactPage = new ContactPage(page);
    await use(contactPage);
  },
  bookkeepingPage: async ({ page }, use) => {
    const bookkeepingPage: BookkeepingPage = new BookkeepingPage(page);
    await use(bookkeepingPage);
  },
});

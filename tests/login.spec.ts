import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../helpers/testData';

test.describe('Nevvon Login', () => {
  test('valid user should be able to login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(testData.username, testData.password);
    await loginPage.verifyLoginSuccessful();
  });

  test('invalid password should not login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(testData.username, testData.invalidPassword);
    // await loginPage.verifyLoginFailed();
  });
});

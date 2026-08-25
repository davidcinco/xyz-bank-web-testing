import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/XYZ Bank/);
});

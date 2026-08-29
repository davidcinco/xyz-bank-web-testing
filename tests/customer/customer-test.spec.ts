import { test, expect } from '@playwright/test';
import { CustomerPage } from '../../pages/CustomerPage.ts';

test.describe('Add Customer: Testing - Suite', () => {
  //adding a global variable for each test
  let customerPage: CustomerPage;

  //Implementing a beforeEach Hook to setup each test case
  test.beforeEach(async ({ page }) => {
    await page.goto('');    
    await page.getByRole('button', { name: 'Bank Manager Login' }).click();
    await page.getByRole('button', { name: 'Add Customer' }).click();
    customerPage = new CustomerPage(page);
  });

  test('Adding new customer with correct values', async ({ page }) => {
    await customerPage.adding_new_customer("Albert", "Wesker", "9901");  
  });

  test('Adding new customer with Empty First Name Value', async ({ page }) => {
    await customerPage.adding_new_customer("", "Wesker", "9901");  
  });

  test('Adding new customer with Empty Last Name Value', async ({ page }) => {
    await customerPage.adding_new_customer("Albert", "", "9901");  
  });

  test('Adding new customer with Empty Post Code Value', async ({ page }) => {
    await customerPage.adding_new_customer("Albert", "Wesker", "");  
  });

  test('Adding new customer with All Empty Fields', async ({ page }) => {
    await customerPage.adding_new_customer("", "", "");
  });

});


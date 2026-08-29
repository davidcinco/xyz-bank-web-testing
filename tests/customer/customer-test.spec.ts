import { test, expect } from '@playwright/test';
import { CustomerPage } from '../../pages/CustomerPage.ts';

test.describe('Add Customer: Testing - Suite', () => {

  test('Adding new customer with correct values', async ({ page }) => {
    await page.goto('');
    
    // Click on Customer Login Button
    await page.getByRole('button', { name: 'Bank Manager Login' }).click();
    // Click on Add Customer Button
    await page.getByRole('button', { name: 'Add Customer' }).click();
    // Create object of Customer Login Page
    const customerPage = new CustomerPage(page);
    await customerPage.adding_new_customer("Albert", "Wesker", "9901");  
  });

  test('Adding new customer with Empty First Name Value', async ({ page }) => {
    await page.goto('');
    
    // Click on Customer Login Button
    await page.getByRole('button', { name: 'Bank Manager Login' }).click();
    // Click on Add Customer Button
    await page.getByRole('button', { name: 'Add Customer' }).click();
    // Create object of Customer Login Page
    const customerPage = new CustomerPage(page);
    await customerPage.adding_new_customer("", "Wesker", "9901");  
  });

  test('Adding new customer with Empty Last Name Value', async ({ page }) => {
    await page.goto('');
    
    // Click on Customer Login Button
    await page.getByRole('button', { name: 'Bank Manager Login' }).click();
    // Click on Add Customer Button
    await page.getByRole('button', { name: 'Add Customer' }).click();
    // Create object of Customer Login Page
    const customerPage = new CustomerPage(page);
    await customerPage.adding_new_customer("Albert", "", "9901");  
  });

  test('Adding new customer with Empty Post Code Value', async ({ page }) => {
    await page.goto('');
    
    // Click on Customer Login Button
    await page.getByRole('button', { name: 'Bank Manager Login' }).click();
    // Click on Add Customer Button
    await page.getByRole('button', { name: 'Add Customer' }).click();
    // Create object of Customer Login Page
    const customerPage = new CustomerPage(page);
    await customerPage.adding_new_customer("Albert", "Wesker", "");  
  });

  test('Adding new customer with All Empty Fields', async ({ page }) => {
    await page.goto('');
    
    // Click on Customer Login Button
    await page.getByRole('button', { name: 'Bank Manager Login' }).click();
    // Click on Add Customer Button
    await page.getByRole('button', { name: 'Add Customer' }).click();
    // Create object of Customer Login Page
    const customerPage = new CustomerPage(page);
    await customerPage.adding_new_customer("", "", "");
  });

});


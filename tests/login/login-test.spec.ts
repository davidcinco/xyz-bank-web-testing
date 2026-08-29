import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.ts';

test.describe('Login Testing - Suite', () => {

  test('Login Customer', async ({ page }) => {
    await page.goto('');
    
    // Click on Customer Login Button
    await page.getByRole('button', { name: 'Customer Login' }).click();
    // Create object of Customer Login Page
    const loginPage = new LoginPage(page);
    await loginPage.login_with_existing_customer();  
  });
});


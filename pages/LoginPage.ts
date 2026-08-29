import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage
{
    readonly page: Page;
    readonly dropDownName: Locator;
    readonly loginButton: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.dropDownName = page.locator('#userSelect');
        this.loginButton = page.locator('button', { hasText: 'Login' });
    }

    async login_with_existing_customer()
    {
        await this.dropDownName.selectOption('5');
        await this.loginButton.click();
    }
}
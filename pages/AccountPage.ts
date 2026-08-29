import { expect, type Locator, type Page } from "@playwright/test";

export class AccountPage
{
    readonly page: Page;
    readonly dropDownName: Locator;
    readonly dropDownCurrency: Locator;
    readonly processButton: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.dropDownName = page.locator('#userSelect');
        this.dropDownCurrency = page.locator('#currency');
        this.processButton = page.locator('button', { hasText: 'Process' });
    }

    async open_account_with_existing_customer(name: string, currency: string)
    {
        await this.dropDownName.selectOption(name);
        await this.dropDownCurrency.selectOption(currency);
        await this.processButton.click();
    }
}
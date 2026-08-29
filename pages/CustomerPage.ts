import { expect, type Locator, type Page } from "@playwright/test";

export class CustomerPage
{
    readonly page: Page;
    readonly firstNameInput: Locator
    readonly lastNameInput: Locator
    readonly postCodeInput: Locator
    readonly addCustomerButton: Locator

    constructor(page: Page)
    {
        this.page = page;
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.postCodeInput = page.getByPlaceholder('Post Code')
        this.addCustomerButton = page.getByRole('form').getByRole('button', { name: 'Add Customer' });
    }

    async adding_new_customer(firstName: string, lastName: string, postCode: string)
    {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postCodeInput.fill(postCode);
        await this.addCustomerButton.click();
    }
}
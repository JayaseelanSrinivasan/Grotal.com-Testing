import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import locators from '../locators/locators.json';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToLogin() {
    await this.page.goto('https://www.grotal.com/');
    await this.page.getByRole('link', { name: 'Login/SignUp' }).click();
    await this.click(locators.login.signupLink);
  }

  async register(name: string, email: string, mobile: string) {
    await this.fill(locators.login.name, name);
    await this.fill(locators.login.email, email);
    await this.fill(locators.login.mobile, mobile);
    await this.page.getByRole('button', { name: locators.login.Create }).click(); 
  }

  async verifyMobileError() {
    await expect(this.page.getByText('Enter Valid Mobile Number.')).toBeVisible(); 
  }
}

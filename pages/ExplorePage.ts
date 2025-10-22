import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import locators from '../locators/locators.json';

export class ExplorePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToExploreChandigarh() {
    await this.page.goto('https://www.grotal.com/');
    await this.page.locator(locators.explore.loginBanner).nth(3).click();
    await this.page.locator(locators.explore.headerIcon).click();
    await this.page.getByRole('link', { name: locators.explore.chandigarh }).click();
  }
 
  async submitCommentAndLoginInvalid(name: string, comment: string, email: string, password: string) {
    const frame = this.page.frameLocator(locators.explore.commentFrame);
    await frame.locator(locators.explore.nameInput).fill(name);
    await frame.locator(locators.explore.commentInput).fill(comment);
    await frame.getByRole('button', { name: locators.explore.submit }).click();
    await frame.locator(locators.explore.emailInput).fill(email);
    await frame.locator(locators.explore.passwordInput).fill(password);
    await frame.getByRole('button', { name: locators.explore.Login }).click();
    await expect(frame.getByText('Invalid Email address or')).toBeVisible();
    await frame.getByRole('button', { name: locators.explore.Signup }).click();

  }

}

 
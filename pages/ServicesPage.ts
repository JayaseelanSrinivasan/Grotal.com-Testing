import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import locators from '../locators/locators.json';

export class ServicesPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async countServiceCategories(): Promise<number> {
    await this.page.goto('https://www.grotal.com/');
    await this.waitFor(locators.services.categoryHeading);
    const count = await this.page.locator(locators.services.categoryHeading).count();
    console.log(`Total service categories listed: ${count}`);
    return count;
  }
}


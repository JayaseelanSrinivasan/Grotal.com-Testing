import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import locators from '../locators/locators.json';
 
export class ToursPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
 
  async openToursAndTravelsCategory() {
    await this.page.goto('https://www.grotal.com/');
    await this.click(locators.tours.category)
    await this.page.locator(locators.tours.submenuContainer).scrollIntoViewIfNeeded();
  }
 
  async validateSubmenuItems(expectedItems: string[]) {
    
    for (const item of expectedItems) {
      await expect(this.page.getByText(item)).toBeVisible();
    }
  }
}
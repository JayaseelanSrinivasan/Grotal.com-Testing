import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import locators from '../locators/locators.json';
 
export class CarWashPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
 
  async searchCarWash(city: string, service: string) {
    await this.page.goto('https://www.grotal.com/');
    await this.click(locators.carwash.cityDropdown);
    await this.fill(locators.carwash.cityInput, city);
    await this.page.getByText(city).click();
 
    await this.click(locators.carwash.searchInput);
    await this.fill(locators.carwash.searchInput, service);
    await this.page.getByRole('button', { name: locators.carwash.searchButton }).click();
    await this.waitFor(locators.carwash.resultsContainer);
  }
 
  async extractServiceDetails(): Promise<void> {
    const results =await this.getText(locators.carwash.resultsContainer);
    console.log(results);
  }
}
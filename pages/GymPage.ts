import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import locators from '../locators/locators.json';

export class GymPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
 
  async navigateToGyms() {
    await this.page.goto('https://www.grotal.com/');
    await this.click(locators.gym.fitnessCategory);
    await this.page.getByText('Gyms').click();
    await this.waitFor(locators.gym.submenuList);

  }
 
  async getGymSubmenuItems(): Promise<string[]> {
    const items=await this.getAllTexts(locators.gym.submenuList);
    return items;

  }
 
  async displayGymSubmenuItems(): Promise<void> {
    const items = await this.getGymSubmenuItems();
    console.log(' Gym Submenu Items:\n');
    items.forEach((item, index) => {
      console.log(`${index + 1}: ${item}`);
    });

  }

}

 
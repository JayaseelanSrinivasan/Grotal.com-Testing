import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import locators from '../locators/locators.json';

export class AdvertisePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToAdvertiseSection() {
    await this.page.goto('https://www.grotal.com/');
    await this.page.getByRole('link', { name: locators.advertise.addBusinessLink }).click();
  }

  async downloadAdvertisementManuals(): Promise<void> {
    const popupPromise = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: locators.advertise.pdfLink }).click();
    const popup = await popupPromise;

    const downloadPromise = this.page.waitForEvent('download');
    await this.page.getByRole('link', { name: locators.advertise.pptLink }).click();
    const download = await downloadPromise;

    console.log(' Download triggered for:', download.suggestedFilename());
  }
}

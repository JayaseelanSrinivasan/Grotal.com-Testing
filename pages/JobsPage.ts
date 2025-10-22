import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import locators from '../locators/locators.json';

export class JobsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openResearchOfficerPDF(): Promise<void> {
    await this.page.goto('https://www.grotal.com/');
    await this.click(locators.jobs.headerIcon);

    const jobsPopup = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: locators.jobs.Jobs }).click();
    const jobsPage = await jobsPopup;

    const pdfPopup = jobsPage.waitForEvent('popup');
    await jobsPage.getByRole('link', {
      name: locators.jobs.PDF
    }).click();
     const pdfPage = await pdfPopup;

    console.log(' PDF view opened successfully');
  }
}

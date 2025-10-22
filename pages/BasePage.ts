import { Page,  expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  
  async click(selector: string): Promise<void> {
    await this.page.locator(selector).click();
  }

  
  async fill(selector: string, value: string): Promise<void> {
    await this.page.locator(selector).fill(value);
  }

  
  async waitFor(selector: string): Promise<void> {
    await this.page.waitForSelector(selector);
  }

  
  async getText(selector: string): Promise<string> {
    return await this.page.locator(selector).innerText();
  }

  
  async getAllTexts(selector: string): Promise<string[]> {
    return await this.page.locator(selector).allInnerTexts();
  }

  
  async expectVisible(selector: string): Promise<void> {
    await expect(this.page.locator(selector)).toBeVisible();
  }

  
}

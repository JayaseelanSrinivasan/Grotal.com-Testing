import { defineConfig, devices } from '@playwright/test';
 
 
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 2,
 
 
  reporter: [['allure-playwright']],
 
 
  use: {
    screenshot: 'on',
    video: 'on',
    trace: 'on',
  },
 
 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
     },  
 
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
   
  ],
 
});
 
 

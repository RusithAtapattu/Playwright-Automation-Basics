import { test, expect, chromium } from '@playwright/test';

test('Slow Motion and Video Recording Demo', async () => {

    const browser = await chromium.launch({
        slowMo: 1000,
        headless: false
    });
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: { width: 1280, height: 720 }
        }
    });
    const page = await context.newPage();

    await page.goto('https://demo.applitools.com/')

    // Fill username
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('Admin');

    // Fill password
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('admin123');

    // Click Sign in
    await page.waitForSelector('text=Sign in', { timeout: 5000 });
    await page.getByRole('link', { name: 'Sign in' }).click();


    await page.close();

});

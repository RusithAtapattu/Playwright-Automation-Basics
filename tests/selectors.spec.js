import { test, expect } from '@playwright/test';

test('Selectors Demo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.pause()

    // Using any object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Davey')
    await page.locator('[id="user-name"]').fill('Steve')

    // Using CSS selector
    // #login-button
    await page.locator('#login-button').click()


    // Using Xpath
    await page.locator("xpath=//input[@id='password']").fill('secret_sauce')
    await page.locator("//input[@id='password']").fill('secret_sauce')

    // Using text selector
    await page.locator('text=Login').click()
    await page.locator("input:has-text('Login')").click()


});
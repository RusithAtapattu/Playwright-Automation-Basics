const { test, expect } = require('@playwright/test')

test('My first test', async ({ page }) => {
    await page.goto('https://playwright.dev/')
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')
})

// const { hello, helloworld } = require('./demo/hello')

// import { hello, helloworld } from './demo/hello.js'

// console.log(hello());
// console.log(helloworld()); 
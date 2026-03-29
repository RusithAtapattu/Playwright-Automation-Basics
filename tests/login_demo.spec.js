import { test, expect } from '@playwright/test';

test.only('Demo Login Test 1', async ({ page }) => {

    await page.goto('https://demo.applitools.com/')
    await page.pause()

    // Fill username
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('Admin');

    // Fill password
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('admin123');

    // Click Sign in
    await page.waitForSelector('text=Sign in', { timeout: 5000 });
    await page.getByRole('link', { name: 'Sign in' }).click();
})

test('Demo Login Test 2', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByRole('listitem').filter({ hasText: 'Jake Harvey' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
})

test('Demo Login Test 3', async ({ page }) => {

    // await page.pause();
    await page.goto('https://admin-demo.nopcommerce.com/login');
    await page.getByRole('textbox', { name: 'Email:' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
    await page.getByRole('textbox', { name: 'Password:' }).click();
    await page.getByRole('textbox', { name: 'Password:' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.locator('iframe[src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/z99o8/0x4AAAAAAADnPIDROrmt1Wwj/light/fbE/new/normal?lang=auto"]').contentFrame().locator('body').click();
    await page.close();
})
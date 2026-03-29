import test, { page, expect } from '@playwright/test';

test('Assertions Demo', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/');
    await page.pause()

    // Assertions
    // Check if element is present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)

    if (await page.$('text=The Kitchen')) {
        await page.getByRole('heading', { name: 'The Kitchen' }).click();
    }

    // Check if element is visible or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
    // await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()

    // Check if element is enabled or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
    // await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()

    // Check text content
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('The Kitchen 123')


    // Check attribute value
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/.*css-dpmy2a/)

    // Check page URL and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle(/.*Kitchen/)
    await page.pause()

    //Visual validation with screenshot
    await expect(page).toHaveScreenshot()
})
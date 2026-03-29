import { test } from '@playwright/test';

test.skip('annotations and tags', async ({ page }) => {

})

test('not ready yet', async ({ page }) => {
    test.fail()
})

test.fixme('this test is broken', async ({ page }) => {

})

test('slow test', async ({ page }) => {
    test.slow()
})

test('only this test will run', async ({ page }) => {
    test.slow()
});

//Tags

test('Test login page @smoke', async ({ page }) => {
})
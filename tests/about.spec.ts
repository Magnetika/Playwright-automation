import {test, expect} from '@playwright/test';

test.describe('About', () => {
    test('Open AboutPage and verified title', async ({page}) => {
        //Open URL
        await page.goto('https://practice.sdetunicorns.com/about/');
        //Verify title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    });
});
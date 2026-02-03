import {test, expect} from '@playwright/test';

pw-describe('Home', () => {
    test('Open HomePage and verified title', async ({page}) => {
        //Open URL
        await page.goto('https://practice.sdetunicorns.com/');
        //Verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });
});

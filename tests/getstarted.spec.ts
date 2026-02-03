import {test, expect} from '@playwright/test';

test.describe('Home', () => {
    test('Click Get Started button using CSS selector', async ({page}) => {
        //Open URL
        await page.goto('https://practice.sdetunicorns.com/');
        //Click Get Started button
        await page.locator('#get-started').click();

        //Verify url has #get-started
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');
    });
});

import {test, expect} from '@playwright/test';
import HomePage from '../pages/home.page'; 

test.describe('Home', () => {
    let homePage;
    test('Click Get Started button using CSS selector', async ({page}) => {
        homePage = new HomePage(page);
        //Open URL
        await page.goto('https://practice.sdetunicorns.com/');
        //Click Get Started button
        await page.locator('#get-started').click();

        //Verify url has #get-started
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');
    });
});

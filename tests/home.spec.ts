import {test, expect} from '@playwright/test';
import HomePage from '../pages/home.page'; 

test.describe('Home', () => {
    let homePage: HomePage;
    test('Open HomePage and verified title', async ({page}) => {
        homePage = new HomePage(page);
        //Open URL
        //await page.goto('https://practice.sdetunicorns.com/');
        await homePage.navigate();
        //Verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });
});

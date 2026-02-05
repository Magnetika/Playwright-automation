import {test, expect} from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('About', () => {
    let homePage;
    test('Open AboutPage and verified title', async ({page}) => {
        homePage = new HomePage(page);
        //Open URL
        await page.goto('https://practice.sdetunicorns.com/about/');
        //Verify title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    });
});
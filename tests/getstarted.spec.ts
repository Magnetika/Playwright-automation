import {test, expect} from '@playwright/test';
import HomePage from '../pages/home.page'; 

test.describe('Home', () => {
    let homePage: HomePage;
    test('Click Get Started button using CSS selector', async ({page}) => {
        homePage = new HomePage(page);
        //Open URL
        await homePage.navigate();
        //Click Get Started button
        //await page.locator('#get-started').click();
        await expect(page).not.toHaveURL(/.*#get-started/);

        await homePage.getStartedButton.click();
        await homePage.getStartedButton.click();

        //Verify url has #get-started
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');
    });
});

import {test, expect} from '@playwright/test';
import HomePage from '../pages/home.page'; 

test.describe('Home', () => {
    let homePage: HomePage;
    
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    });

    test('Open HomePage and verified title', async ({page}) => {
        //Verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });
});

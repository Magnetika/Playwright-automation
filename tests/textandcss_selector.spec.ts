import {test, expect} from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home', () => {
    let homePage: HomePage;
    test('Verify home link is enable using text and css selector', async ({page}) => {
        homePage = new HomePage(page);
        //Open URL
        await homePage.navigate();

        //Find the home text 
        const homeText = await page.locator('#zak-primary-menu >> text=Home');

        //Verify home text is enable
        await expect(homeText).toBeEnabled();
    });
});

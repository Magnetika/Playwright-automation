import {test, expect} from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home', () => {
    let homePage: HomePage;
    test('Verify the text for all links', async ({page}) => {
        homePage = new HomePage(page);
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];
        
        //Open URL
        await homePage.navigate();

        //Verify nav links text
        await expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
    });
});

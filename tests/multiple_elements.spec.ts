import {test, expect} from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home', () => {
    let homePage;
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
        await page.goto('https://practice.sdetunicorns.com/');

        //Find the nav links
        const navLinks = page.locator('#zak-primary-menu li[id*=menu-item]');

        //Verify nav links text
        await expect(await navLinks.allTextContents()).toEqual(expectedLinks);
    });
});

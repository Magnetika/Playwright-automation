import {test, expect} from '@playwright/test';

test.describe('Home', () => {
    test('Verify the text for all links', async ({page}) => {
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

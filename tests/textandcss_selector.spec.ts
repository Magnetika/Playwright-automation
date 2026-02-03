import {test, expect} from '@playwright/test';

test.describe('Home', () => {
    test('Verify home link is enable using text and css selector', async ({page}) => {
        //Open URL
        await page.goto('https://practice.sdetunicorns.com/');

        //Find the home text 
        const homeText = await page.locator('#zak-primary-menu >> text=Home');

        //Verify home text is enable
        await expect(homeText).toBeEnabled();
    });
});

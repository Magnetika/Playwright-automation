import {test, expect} from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home', () => {
    let homePage;
    test('Verify search icon is visible using XPath selector', async ({page}) => {
        homePage = new HomePage(page);
        //Open URL
        await page.goto('https://practice.sdetunicorns.com/');

        // find the search icon using XPath
        const searchIcon = await page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']");

        //Verify search icon is visible
        await expect(searchIcon).toBeVisible();
    });
});

import {test, expect} from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home', () => {
    let homePage: HomePage;
    test('Verify heading text is visible using text selector', async ({page}) => {
        homePage = new HomePage(page);
        //Open URL
        await homePage.navigate();

        //Find the text locator 
        const headingText = await page.locator('text=Think different. Make different.');

        //Verify heading text is visible
        await expect(headingText).toBeVisible();
    });
});

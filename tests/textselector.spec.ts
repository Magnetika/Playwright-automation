import {test, expect} from '@playwright/test';

test.describe('Home', () => {
    test('Verify heading text is visible using text selector', async ({page}) => {
        //Open URL
        await page.goto('https://practice.sdetunicorns.com/');

        //Find the text locator 
        const headingText = await page.locator('text=Think different. Make different.');

        //Verify heading text is visible
        await expect(headingText).toBeVisible();
    });
});

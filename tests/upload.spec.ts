import { test, expect} from '@playwright/test';
import HomePage from '../pages/home.page';
const path = require('path');

test.describe('Upload file', () => {
    let homePage: HomePage;
    test('should upload a test file', async ({ page }) => {
        homePage = new HomePage(page);

        //Open URL
        await page.goto('https://practice.sdetunicorns.com/cart/');

        //provide test file path

        const filePath = path.join(__dirname, '../data/pikachu.png');

        //upload test file

        await page.setInputFiles('input#upfile_1', filePath);

        //click the submit button

        await page.locator('#upload_1').click();

        //assertion

        await expect(page.locator('#wfu_messageblock_header_1_label_1'))
            .toContainText('uploaded successfully');

    })
})
import { test, expect} from '@playwright/test';
const path = require('path');

test.describe('Upload file', () => {

    test('should upload a test file', async ({ page }) => {

        //Open URL

        await page.goto('https://practice.sdetunicorns.com/cart/');

        //provide test file path

        const filePath = path.join(__dirname, '../data/pikachu.png');

        // DOM manupulation 

        await page.evaluate(() => {
            const selector = document.querySelector('input#upfile_1');
            if (selector) {
                 selector.className = ''
            }
        })

        //upload test file

        await page.setInputFiles('input#upfile_1', filePath);  // throws error 

        //click the submit button

        await page.locator('#upload_1').click();

        //assertion

        await expect(page.locator('#wfu_messageblock_header_1_label_1'))
            .toContainText('uploaded successfully');

    })
})
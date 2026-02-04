import { test, expect} from '@playwright/test';
const path = require('path');

test.describe('Upload file', () => {

    test('should upload a test file', async ({ page }) => {

        //Open URL

        await page.goto('https://practice.sdetunicorns.com/cart/');

        //provide test file path

        const filePath = path.join(__dirname, '../data/pikachu.png');

        //upload test file

        await page.setInputFiles('input#upfile_1', filePath);

        //click the submit button

        await page.locator('#upload_1').click();

        //hardcoded sleep - WRONG WAY
       // await page.waitForTimeout(5000);

        //wait for condition - RIGHT WAY

        await page.locator('#wfu_messageblock_header_1_label_1')
            .waitFor({ state:'visible',  timeout: 10000 });

        //assertion

        await expect(page.locator('#wfu_messageblock_header_1_label_1'))
            .toContainText('uploaded successfully');

    })
})
import { test, expect} from '@playwright/test';
import CartPage from '../pages/cart.page';
const path = require('path');

test.describe('Upload file', () => {
    let cartPage: CartPage;
    test('should upload a test file', async ({ page }) => {
        cartPage = new CartPage(page);

        //Open URL
        await page.goto('https://practice.sdetunicorns.com/cart/');

        //provide test file path

        const filePath = path.join(__dirname, '../data/pikachu.png');

        //upload test file
        await cartPage.UploadComponent().uploadFile(filePath);
      
        //assertion

        await expect(cartPage.UploadComponent().successText)
            .toContainText('uploaded successfully');

    })
})
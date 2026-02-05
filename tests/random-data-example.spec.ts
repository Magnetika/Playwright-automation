import { test, expect } from '@playwright/test';
import { DataHelpers } from '../utils/data-helpers';

test.describe('Random Data Example', () => {
    
    test('Use random data in test', async ({ page }) => {
        // Generate random data
        const randomEmail = DataHelpers.randomEmail();
        const randomName = DataHelpers.randomName();
        const randomPhone = DataHelpers.randomPhone();
        const uniqueId = DataHelpers.uniqueId();
        
        console.log('Random Email:', randomEmail);
        console.log('Random Name:', randomName);
        console.log('Random Phone:', randomPhone);
        console.log('Unique ID:', uniqueId);
        
        // Example: Use random data in your test
        // await page.fill('#email', randomEmail);
        // await page.fill('#name', randomName);
    });

    test('Use random number and string', async ({ page }) => {
        const randomNumber = DataHelpers.randomNumber(1, 100);
        const randomString = DataHelpers.randomString(15);
        const randomPrice = DataHelpers.randomPrice(50, 500);
        
        console.log('Random Number:', randomNumber);
        console.log('Random String:', randomString);
        console.log('Random Price:', randomPrice);
    });
});

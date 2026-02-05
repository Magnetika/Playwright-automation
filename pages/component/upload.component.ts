import {Page, Locator} from '@playwright/test';

class UploadComponent {
    page: Page;
    uploadInput: string;
    submitButton: Locator;
    successText: Locator;


    constructor(page: Page) {
        this.page = page;
        this.uploadInput = 'input#upfile_1';
        this.submitButton = page.locator('#upload_1');
        this.successText = page.locator('#wfu_messageblock_header_1_label_1');
    }
}

export default UploadComponent;

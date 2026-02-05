# Playwright Automation Framework

A comprehensive end-to-end testing framework built with Playwright and TypeScript for automated web testing.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [Page Object Model](#page-object-model)
- [Writing Tests](#writing-tests)
- [Configuration](#configuration)
- [Contributing](#contributing)

## 🎯 Overview

This project is a Playwright automation testing framework that demonstrates best practices for web automation testing. It includes examples of various testing scenarios including element selection, file uploads, waits, and more.

## ✨ Features

- ✅ Cross-browser testing (Chromium, Firefox, WebKit)
- ✅ Page Object Model (POM) design pattern
- ✅ Component-based architecture
- ✅ TypeScript support for type safety
- ✅ Parallel test execution
- ✅ HTML test reports
- ✅ Multiple selector strategies (CSS, XPath, Text)
- ✅ File upload handling (including hidden inputs)
- ✅ Wait strategies and timeout management

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)
- Git

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/dilpreetj/playwright-course.git
cd Playwright-automation
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 📁 Project Structure

```
Playwright-automation/
│
├── data/                          # Test data files
├── pages/                         # Page Object Model files
│   ├── cart.page.ts              # Cart page object
│   ├── home.page.ts              # Home page object
│   └── component/                # Reusable components
│       └── upload.component.ts   # Upload component
├── tests/                         # Test specification files
│   ├── about.spec.ts             # About page tests
│   ├── example.spec.ts           # Example tests
│   ├── getstarted.spec.ts        # Get started tests
│   ├── home.spec.ts              # Home page tests
│   ├── multiple_elements.spec.ts # Multiple elements tests
│   ├── textandcss_selector.spec.ts # Selector tests
│   ├── textselector.spec.ts      # Text selector tests
│   ├── upload_hidden_input.spec.ts # Hidden input upload tests
│   ├── upload.spec.ts            # File upload tests
│   ├── wait_for_timeout.spec.ts  # Wait strategies tests
│   └── xpath.spec.ts             # XPath selector tests
├── test-results/                  # Test execution results
├── playwright-report/             # HTML test reports
├── playwright.config.ts           # Playwright configuration
└── package.json                   # Project dependencies
```

## 🧪 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run a specific test file
```bash
npx playwright test tests/home.spec.ts
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run tests in a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run tests with UI mode
```bash
npx playwright test --ui
```

## 📊 Test Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

The report will open in your default browser showing:
- Test execution summary
- Pass/fail status
- Screenshots and videos (if configured)
- Test duration
- Detailed error messages

## 🏗️ Page Object Model

This framework uses the Page Object Model (POM) design pattern to organize test code:

### Example Page Object

```typescript
// pages/home.page.ts
class HomePage {
  constructor(private page: Page) {}
  
  async navigate() {
    await this.page.goto('https://practice.sdetunicorns.com/');
  }
  
  async verifyTitle() {
    await expect(this.page).toHaveTitle('Expected Title');
  }
}
```

### Using Page Objects in Tests

```typescript
// tests/home.spec.ts
test('Test example', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.verifyTitle();
});
```

## ✍️ Writing Tests

### Basic Test Structure

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test('should do something', async ({ page }) => {
    // Test steps
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Expected Title');
  });
});
```

### Best Practices

1. Use descriptive test names
2. Follow the AAA pattern (Arrange, Act, Assert)
3. Keep tests independent and isolated
4. Use Page Object Model for reusability
5. Use proper waits instead of hard timeouts
6. Add meaningful assertions

## ⚙️ Configuration

The `playwright.config.ts` file contains all configuration settings:

- **Test Directory**: `./tests`
- **Parallel Execution**: Enabled
- **Retries**: 2 on CI, 0 locally
- **Browsers**: Chromium, Firefox, WebKit
- **Reporter**: HTML
- **Trace**: On first retry

Customize these settings based on your needs.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 📧 Contact

For questions or support, please open an issue in the repository.

## 🔗 Useful Links

- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

**Happy Testing! 🎭**

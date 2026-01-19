# E2E Testing - SauceDemo Shopping Cart

Automated tests for shopping cart functionality using Playwright + TypeScript.

🔗 **Test Site**: [saucedemo.com](https://www.saucedemo.com/)

## 🚀 Quick Start

```bash
# Install
npm install
npx playwright install

# Run tests
npx playwright test

# View report
npx playwright show-report
```

## 📋 What's Tested

✅ Add single product to cart  
✅ Add multiple products to cart  
✅ Verify product details in cart  
❌ Locked user cannot login  

## 📁 Structure

```
tests/          # Test files
pages/          # Page Objects (LoginPage, ProductsPage, CartPage)
test-data/      # JSON with products and users
.github/        # CI/CD pipeline
```

## 🔄 CI/CD

GitHub Actions runs tests on every push. Check the **Actions** tab for results.

## 🧩 Key Decisions

**Page Object Model**  
Clean separation, easy to maintain

**JSON Test Data**  
Products and credentials in one place

**Playwright Fixtures**  
No duplicate code, reusable Page Objects

**getByRole > CSS selectors**  
More stable, accessibility-first

## 🎯 Challenges Solved

1. **Selectors** → Used `data-test` + `getByRole`
2. **Code duplication** → Fixtures for Page Objects
3. **Test data** → Externalized to JSON
4. **Negative test** → Chose realistic scenario (locked user)

## 📊 Run Options

```bash
npx playwright test --headed          # See browser
npx playwright test --ui              # Debug mode
npx playwright test add-to-cart.spec  # Single file
```

---

**Made with Playwright** | [Docs](https://playwright.dev/)

# 🛒 Incarnage.com Playwright Automation

This repository contains a fully automated end-to-end (E2E) testing script for [Incarnage.com](https://incarnage.com/), developed using **Playwright**. The script simulates a realistic user journey—from browsing products to adding items to the cart and initiating checkout—making it an effective QA tool for UI flow validation.

---

## ✨ Features

- 🌐 Navigate to the Incarnage homepage
- 🛍️ Select 3 specific products by ID
- 🎨 Choose available color and size variants
- ✅ Verify if the product is in stock
- ➕ Add in-stock items to the cart
- 📝 Leave a custom note in the cart
- 🔍 Validate cart item count and price block
- 💳 Proceed to checkout

---

## 🔧 Tech Stack

- 🎭 [Playwright](https://playwright.dev/)
- 🟨 JavaScript (Node.js)
- 🌐 Cross-browser support: Chromium, Firefox, WebKit

---

## 📄 Script Flow

1. Go to homepage.
2. Click on each product’s card.
3. Choose a color and size (if available).
4. Check if the product is in stock.
5. If yes, add to cart and wait for cart visibility.
6. Add a cart note with a test message.
7. Validate total section and cart count.
8. Proceed to checkout.

> 💡 **Bonus Handling:**  
> If a product is out of stock, the script skips it and logs a message—ensuring test reliability during daily scheduled runs.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/hasankanaran/incarnage-web-automation-playwright
cd incarnage-playwright-test

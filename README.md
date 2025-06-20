🛒 Incarnage.com Playwright Automation
This repository contains a fully automated end-to-end (E2E) test suite for Incarnage.com, built using Playwright. It simulates a realistic shopping experience—navigating through product selections, adding items to the cart, and initiating checkout—making it a powerful QA tool for validating UI functionality and user flows.

✨ Key Features
🌐 Navigate to the Incarnage homepage

🛍️ Select 3 specific products by ID

🎨 Automatically select available color and size variants

✅ Check stock availability

➕ Add in-stock products to the cart

📝 Insert a custom cart note

🔍 Validate cart item count and price summary

💳 Proceed to the checkout page

💡 Bonus Handling:
If a product is out of stock, the script logs a message and continues—ensuring stability even when inventory changes.

🔧 Tech Stack
🎭 Playwright

🟨 JavaScript (Node.js)

🌐 Cross-browser support: Chromium, Firefox, and WebKit

📜 Script Workflow
Launch browser and go to homepage

Loop through 3 products by their IDs

For each product:

Select a color and size if available

Check stock status

If in stock, add the product to the cart

After all products are added:

Add a custom cart note

Validate the cart item count and pricing block

Navigate to the checkout page

🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/hasankanaran/incarnage-web-automation-playwright.git
cd incarnage-web-automation-playwright
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the Test
bash
Copy
Edit
npx playwright test
✅ Tip: You can customize product IDs and cart note content directly in the script file for different test scenarios.

📌 Notes
Designed for daily scheduled runs

Provides robust logging for debugging failed or skipped scenarios

Easily extendable to support other flows like login, search, or wishlist testing


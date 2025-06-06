import { test, expect } from "@playwright/test";

const baseURL = "https://incarnage.com/";
const firstProductSelector = "xpath=//div[@id='ProductCard-7536860430542']";
const availableColour1 =
  "xpath=//div[@class='color-swatch-item color-swatch-sheer-white']";
const availableSize1 = "xpath=//label[@for='Size-2-1']";
const addToCartButton =
  "xpath=//div[@data-fragment='add-to-cart-button']//button[@type='submit']";
const secondProductSelector =
  "xpath=//main[@id='main']//div[@id='ProductCard-7536862789838']//picture[1]";
const availableColour2 =
  "xpath=//div[@class='color-swatch-item color-swatch-jet-black']";
const availableSize2 = "xpath=//label[@for='Size-2-2']";


test("Navigate and add products to the cart", async ({ page }) => {
  // Step 1: Go to the homepage and wait for full load
  await page.goto(baseURL, { waitUntil: "load" });

  // Step 2: Click on the product card
  await page.locator(firstProductSelector).click();

  // Step 3: Select color
  await page.locator(availableColour1).click();

  // Step 4: Select size
  await page.locator(availableSize1).click();

  // Step 5: Add to cart;
  await page.locator(addToCartButton).click();
  await page.waitForTimeout(3000); // Wait for 3 seconds to ensure the cart updates

  // Step 6: Return to homepage
  await page.goto(baseURL, { waitUntil: "load" });

  // Step 7: Click on the product card again
  await page.locator(secondProductSelector).click();

  // Step 8: Select color
  await page.locator(availableColour2).click();

  // Step 9: Select size
  await page.locator(availableSize2).click();

  // Step 10: Add to cart
  await page.locator(addToCartButton).click();
  await page.waitForTimeout(3000); // Wait for 3 seconds to ensure the cart updates

  await page.pause();
});

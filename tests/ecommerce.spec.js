import { test, expect } from "@playwright/test";

const baseURL = "https://incarnage.com/";
const addToCartButton =
  "xpath=//div[@data-fragment='add-to-cart-button']//button[@type='submit']";
const cartVisible =
  "xpath=//body/div[@id='SlideoutCart']/div[contains(@class, 'visible')]";
const btnShowNotes = "xpath=//label[@for='showNote']";
const noteTextArea = "xpath=//textarea[@placeholder='Enter your note here...']";
const btnCheckOut = "xpath=//button[@name='checkout']";
const cartTotal =
  "xpath=//div[@class='space-y-4']//div[@class='flex justify-between items-center']";
const cartItemCount = "xpath=//div[contains(text(),'3')]";

const firstProductSelector = "xpath=//div[@id='ProductCard-7536860430542']";
const availableColour1 =
  "xpath=//div[@class='color-swatch-item color-swatch-sheer-white']";
const availableSize1 = "xpath=//label[@for='Size-2-1']";

const secondProductSelector =
  "xpath=//main[@id='main']//div[@id='ProductCard-7536862789838']//picture[1]";
const availableColour2 =
  "xpath=//div[@class='color-swatch-item color-swatch-jet-black']";
const availableSize2 = "xpath=//label[@for='Size-2-2']";

const thirdProductSelector =
  "xpath=//div[@id='ProductCard-7575887151310']//picture[1]";
const availableColour3 =
  "xpath=//div[@class='color-swatch-item color-swatch-navy-blue']";
const availableSize3 = "xpath=//div[normalize-space()='l']";

test("Navigate, add 3 products to cart, leave note, and validate cart", async ({
  page,
}) => {
  
  // First Product
  await page.goto(baseURL, { waitUntil: "load" });
  await page.locator(firstProductSelector).click();
  await page.locator(availableColour1).click();
  await page.locator(availableSize1).click();

  const isDisabled1 = await page.locator(addToCartButton).isDisabled();
  if (!isDisabled1) {
    await page.locator(addToCartButton).click();
    await page.locator(cartVisible).waitFor({ state: "visible" });
  } else {
    console.log("First product is out of stock.");
  }

  // Second Product
  await page.goto(baseURL);
  await page.locator(secondProductSelector).click();
  await page.locator(availableColour2).click();
  await page.locator(availableSize2).click();

  const isDisabled2 = await page.locator(addToCartButton).isDisabled();
  if (!isDisabled2) {
    await page.locator(addToCartButton).click();
    await page.locator(cartVisible).waitFor({ state: "visible" });
  } else {
    console.log("Second product is out of stock.");
  }

  // Third Product
  await page.goto(baseURL);
  await page.locator(thirdProductSelector).click();
  await page.locator(availableColour3).click();
  await page.locator(availableSize3).click();

  const isDisabled3 = await page.locator(addToCartButton).isDisabled();
  if (!isDisabled3) {
    await page.locator(addToCartButton).click();
    await page.locator(cartVisible).waitFor({ state: "visible" });
  } else {
    console.log("Third product is out of stock.");
  }

  // Leave a note
  await page.locator(btnShowNotes).click();
  const note =
    "Intern QA Test: I’m Hasanka Narangoda, eager to learn and help with QA and development. Thank you Zitles for this opportunity.";
  await page.locator(noteTextArea).fill(note);

  // Validate cart total section visible
  await page.locator(cartTotal).waitFor({ state: "visible" });

  // Proceed to checkout
  await page.locator(btnCheckOut).click();

  // Pause to manually inspect
  await page.pause();
});

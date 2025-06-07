import { test, expect } from "@playwright/test";

const baseURL = "https://incarnage.com/";
const addToCartButton = "xpath=//div[@data-fragment='add-to-cart-button']//button[@type='submit']";
const cartVisible = "xpath=//body/div[@id='SlideoutCart']/div[contains(@class, 'visible')]";
const btnShowNotes = "xpath=//label[@for='showNote']";
const noteTextArea = "xpath=//textarea[@placeholder='Enter your note here...']";
const btnCheckOut = "xpath=//button[@name='checkout']";

const firstProductSelector = "xpath=//div[@id='ProductCard-7536860430542']";
const availableColour1 = "xpath=//div[@class='color-swatch-item color-swatch-sheer-white']";
const availableSize1 = "xpath=//label[@for='Size-2-1']";

const secondProductSelector = "xpath=//div[@id='ProductCard-7536862789838']//picture[1]";
const availableColour2 = "xpath=//div[@class='color-swatch-item color-swatch-jet-black']";
const availableSize2 = "xpath=//label[@for='Size-2-2']";

const thirdProductSelector = "xpath=//div[@id='ProductCard-7575887151310']//picture[1]";
const availableColour3 = "xpath=//div[@class='color-swatch-item color-swatch-navy-blue']";
const availableSize3 = "xpath=//div[normalize-space()='l']";

test("Navigate, add 3 products to cart, leave note, and validate cart )", async ({ page }) => {
  // First Product
  await page.goto(baseURL, { waitUntil: "load" });
  await page.locator(firstProductSelector).click();
  await page.locator(availableColour1).click();
  await page.locator(availableSize1).click();
  await page.locator(addToCartButton).click();
  await page.locator(cartVisible).waitFor({ state: "visible" });

  // Second Product
  await page.goto(baseURL);
  await page.locator(secondProductSelector).click();
  await page.locator(availableColour2).click();
  await page.locator(availableSize2).click();
  await page.locator(addToCartButton).click();
  await page.locator(cartVisible).waitFor({ state: "visible" });

  // Third Product
  await page.goto(baseURL);
  await page.locator(thirdProductSelector).click();
  await page.locator(availableColour3).click();
  await page.locator(availableSize3).click();
  await page.locator(addToCartButton).click();
  await page.locator(cartVisible).waitFor({ state: "visible" });

  //  Validate cart shows 3 products
  const cartItems = await page.locator("div.cart-item").all();
  expect(cartItems.length).toBe(3);

  // Leave a note
  await page.locator(btnShowNotes).click();
  const note = "Intern QA Test: I’m Hasanka Narangoda, eager to learn and help with QA and development. Thank you Zitles for this opportunity.";
  await page.locator(noteTextArea).fill(note);

  //  Check note is filled correctly
  const filledNote = await page.locator(noteTextArea).inputValue();
  expect(filledNote).toBe(note);

  //  Proceed to checkout
  await page.locator(btnCheckOut).click();

  // Pause to manually inspect
  await page.pause();
});

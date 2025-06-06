import { test } from "@playwright/test";

const baseURL = "https://incarnage.com/";
const addToCartButton =
  "xpath=//div[@data-fragment='add-to-cart-button']//button[@type='submit']";
const cartVisible =
  "xpath=//body/div[@id='SlideoutCart']/div[@class='slideout-cart-container visible']/div[@class='cart']/div[3]";

const btnShowNotes = "xpath=//label[@for='showNote']";

const noteTextArea = "xpath=//textarea[@placeholder='Enter your note here...']";

const btnCheckOut = "xpath=//button[@name='checkout']";

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

test("Navigate and add products to the cart", async ({ page }) => {
  // First Product
  await page.goto(baseURL, { waitUntil: "load" });
  await page.locator(firstProductSelector).click();
  await page.locator(availableColour1).click();
  await page.locator(availableSize1).click();
  await page.locator(addToCartButton).click();
  await page.locator(cartVisible).waitFor({ state: "visible" }); //  wait for cart update the cart

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

  //leaving a note with order
  await page.locator(btnShowNotes).click();
  await page
    .locator(noteTextArea)
    .fill(
      "Intern QA Test:I’m Hasanka Narangoda,eager to learn and help with QA and development. Thank you Zitles for this opportunity."
    );
    
  await page.locator(btnCheckOut).click();

  await page.pause();
});

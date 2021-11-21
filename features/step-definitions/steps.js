const {Given, When, Then} = require('@wdio/cucumber-framework');

const Page = require('../pageobjects/page');
const WomenPage = require('../pageobjects/women.page');
const DressesPage = require('../pageobjects/dresses.page');
const TShirtPage = require('../pageobjects/tShirt.page');
const SignInPage = require('../pageobjects/signIn.page');
const ShoppingPage = require('../pageobjects/shopping');

const pages = {
    home: new Page(),
    women: new WomenPage(),
    dresses: new DressesPage(),
    tShirt: new TShirtPage(),
    signIn: new SignInPage(),
    shopping: new ShoppingPage(),
};

Given(/^I am on the home page$/, async () => {
    await pages['home'].open('');
});

When(/^I navigate to the (.*) page$/, async (page) => {
    await pages[page].open();
});

Then(/^I check (.*) of (.*), it should be equal (.*)$/, async (element, page, header) => {
    let currentPage = await pages[page];
    const actualText = await currentPage[element];
    await expect(actualText).toHaveTextContaining(header);
});

Then(/^I should input invalid '(.*)' and chek the (.*)$/, async (email, error) => {
    await pages['signIn'].scroll;
    await pages['signIn'].emailInp.addValue(email);
    await pages['signIn'].sbmBtn.click();
    await expect(pages['signIn'].theError).toHaveTextContaining(error);
});

When(/^I navigate to the product$/, async () => {
    await pages["shopping"].scroll;
    await pages["shopping"].product.moveTo();
    await expect(pages["shopping"].product).toBeDisplayed();
});

Then(/^I click on the quick view and choose parameters$/, async () => {
    await pages["shopping"].quickView.click();
    const frame = await pages["shopping"].frameOfTable;
    await  browser.switchToFrame(frame);
    await browser.pause(3000);
    await pages["shopping"].plusIcon.click();
    await pages["shopping"].sizeInp.click();
    await pages["shopping"].sizeM.click();
    await pages["shopping"].color.click();
    await expect(pages["shopping"].imgSrc).toBeDisplayed();
});

When(/^I add it to my cart$/, async () => {
    await pages["shopping"].addCartBtn.click();
    await  browser.switchToParentFrame();
    await expect(pages["shopping"].qty).toHaveText('2');
});

Then(/^I shall validate that the product is in the shopping cart$/, async () =>{
    await pages["shopping"].btn.click();
    await expect(pages["shopping"].verification).toHaveTextContaining("2 Product");
});


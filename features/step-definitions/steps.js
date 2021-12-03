const {Given, When, Then} = require('@wdio/cucumber-framework');

const Page = require('../pageobjects/page');
const WomenPage = require('../pageobjects/women.page');
const DressesPage = require('../pageobjects/dresses.page');
const TShirtPage = require('../pageobjects/tShirt.page');
const SignInPage = require('../pageobjects/signIn.page');
const ShoppingPage = require('../pageobjects/shopping');
const IFrame = require('../pageobjects/iFrame')

const pages = {
    home: new Page(),
    women: new WomenPage(),
    dresses: new DressesPage(),
    tShirt: new TShirtPage(),
    signIn: new SignInPage(),
    shopping: new ShoppingPage(),
    iFrame: new IFrame(),
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
    // await pages["shopping"].scroll;
    await pages["shopping"].product.scrollIntoView({block: "center"});
    console.log('after scroll');
    await browser.pause(2000)
    await pages["shopping"].product.moveTo();
    console.log('after moveTo');
    await browser.pause(2000)
    expect(pages["shopping"].quickView).toBeDisplayed();
});

Then(/^I click on the quick view and choose parameters$/, async () => {
    console.log(0);
    await browser.pause(2000)
    await pages["shopping"].quickView.click();
    console.log(1);
    const frame = await pages["shopping"].frameOfTable;
    console.log(2);
    await pages["shopping"].frameOfTable.waitForDisplayed();
    console.log(3);
    await browser.switchToFrame(frame);
    console.log(4);
    await pages["iFrame"].plusIcon.click();
    console.log(5);
    await pages["iFrame"].sizeInp.click();
    console.log(6);
    await pages["iFrame"].sizeM.click();
    console.log(7);
    await pages["iFrame"].color.click();
    console.log(8);
    await expect(pages["iFrame"].imgSrc).toBeDisplayed();
    console.log(9);
});

When(/^I add it to my cart$/, async () => {
    await pages["iFrame"].addCartBtn.click();
    await  browser.switchToParentFrame();
    await expect(pages["shopping"].qty).toHaveText('2');
});

Then(/^I shall validate that the product is in the shopping cart$/, async () =>{
    await pages["shopping"].btn.click();
    await expect(pages["shopping"].verification).toHaveTextContaining("2 Product");
});


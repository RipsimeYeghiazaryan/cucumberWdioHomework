const {Given, When, Then} = require('@wdio/cucumber-framework');
const pagesFactory = require('../../pageFactory/pathesFactory');


Given(/^I am on the home page$/, async () => {
    await pagesFactory('Home').open('');
});

When(/^I navigate to the (.*) page, it should have (.*) title$/, async (page, title) => {
    await pagesFactory(`${page}`).open();
    expect(pagesFactory(`${page}`)).toHaveTextContaining(title);
});

Then(/^I check (.*) of (.*), it should be equal (.*)$/, async (element, page, header) => {
    let currentPage = await pagesFactory(`${page}`);
    const actualText = await currentPage[element];
    expect(actualText).toHaveTextContaining(header);
});

Then(/^I should input invalid '(.*)' and chek the (.*)$/, async (email, error) => {
    await pagesFactory('SignInPage').scroll;
    await pagesFactory('SignInPage').emailInp.addValue(email);
    await pagesFactory('SignInPage').sbmBtn.click();
    expect(pagesFactory('SignInPage').errorMessage).toHaveTextContaining(error);
});

When(/^I navigate to the product$/, async () => {
    await pagesFactory('ShoppingPage').product.scrollIntoView({block: "center"});
    await pagesFactory('ShoppingPage').product.moveTo();
    expect(pagesFactory('ShoppingPage').quickView).toBeDisplayed();
});

Then(/^I click on the quick view and choose parameters$/, async () => {
    await pagesFactory('ShoppingPage').quickView.click();
    const frame = await pagesFactory('ShoppingPage').frameOfTable;
    await pagesFactory('ShoppingPage').frameOfTable.waitForDisplayed();
    await browser.switchToFrame(frame);
    await pagesFactory('IFrame').plusIcon.click();
    await pagesFactory('IFrame').sizeInp.click();
    await pagesFactory('IFrame').sizeM.click();
    await pagesFactory('IFrame').color.click();
    expect(pagesFactory('IFrame').imgSrc).toBeDisplayed();
});

When(/^I add it to my cart$/, async () => {
    await pagesFactory('IFrame').addCartBtn.click();
    await browser.switchToParentFrame();
    await pagesFactory('ShoppingPage').checkoutTable.waitForDisplayed();
    expect(pagesFactory('ShoppingPage').qty).toHaveText('2');
});

Then(/^I shall validate that the product is in the shopping cart$/, async () => {
    await pagesFactory('ShoppingPage').btn.click();
    expect(pagesFactory('ShoppingPage').verification).toHaveTextContaining("2 Product");
});


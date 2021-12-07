const Page = require('../features/pageobjects/page');
const WomenPage = require('../features/pageobjects/women.page');
const DressesPage = require('../features/pageobjects/dresses.page');
const TShirtPage = require('../features/pageobjects/tShirt.page');
const SignInPage = require('../features/pageobjects/signIn.page');
const ShoppingPage = require('../features/pageobjects/shopping');
const IFrame = require('../features/pageobjects/iFrame');

function pagesFactory(page) {
    switch (page) {
        case 'Home':
            return new Page();
        case 'women' :
            return new WomenPage();
        case 'dresses':
            return new DressesPage();
        case 'tShirt' :
            return new TShirtPage();
        case 'SignInPage':
            return new SignInPage();
        case 'ShoppingPage' :
            return new ShoppingPage();
        case 'IFrame':
            return new IFrame();
    }
}
module.exports = pagesFactory;

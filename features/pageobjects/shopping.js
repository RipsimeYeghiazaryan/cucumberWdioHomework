const Page = require('./page');

module.exports = class ShoppingPage extends Page {

    get product() {return $('(.//div[@class="product-image-container"])[1]')};
    get scroll() {return this.product.scrollIntoView({block: "center"})};
    get quickView() {return $('(.//a[@class=\'quick-view\'])[1]')};
    get frameOfTable() { return browser.$('iframe[class="fancybox-iframe"]') };
    get btn() { return $('[class="btn btn-default button button-medium"]')};
    get checkoutTable() {return $('[class="layer_cart_cart col-xs-12 col-md-6"]')};
    get qty() { return $('[class="ajax_cart_quantity"]')};
    get verification() { return $('(.//span[@class="heading-counter"])')};

};

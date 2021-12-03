const Page = require('./page');

module.exports = class ShoppingPage extends Page {

    // get product() {return $('(.//a[@class="product_img_link"])[1]')};
    get product() {return $('(.//div[@class="product-image-container"])[1]')};
    get scroll() {return this.product.scrollIntoView({block: "center"})};
    get quickView() {return $('(.//a[@class=\'quick-view\'])[1]')};
    get frameOfTable() {
        const el = browser.$('iframe[class="fancybox-iframe"]');
        return el;
    }
    get btn() { return $('[class="btn btn-default button button-medium"]')};
    get qty() { return $('[class="ajax_cart_quantity"]')};
    get verification() { return $('(.//span[@class="heading-counter"])')};

}

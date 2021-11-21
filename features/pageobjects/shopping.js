const Page = require('./page');

module.exports = class ShoppingPage extends Page {

    get product() {return $('(.//a[@class="product_img_link"])[1]')};
    get scroll() {return this.product.scrollIntoView({block: "center"})};
    get quickView() {return $('(.//a[@class=\'quick-view\'])[1]')};
    get plusIcon() {return $('[class="icon-plus"]')};
    get sizeInp() {return $('#group_1')};
    get sizeM() {return $('(.//select[@id="group_1"]/option[2])')};
    get color() {return $('[id="color_14"]')};
    get addCartBtn() {return $('[class="exclusive"]')};
    get closeBtn() {return $('[class="fancybox-item fancybox-close"]')};
    get frameOfTable() {
        const el = browser.$('iframe[class="fancybox-iframe"]');
        return el;
    }
    get imgSrc() { return $('(.//img [@src="http://automationpractice.com/img/p/3/3-large_default.jpg"])')};
    get btn() { return $('[class="btn btn-default button button-medium"]')};
    get qty() { return $('[class="ajax_cart_quantity"]')};
    get verification() { return $('(.//span[@class="heading-counter"])')};
}

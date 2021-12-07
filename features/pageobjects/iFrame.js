const Page = require('./page');

module.exports = class IFramePage extends Page {

    get plusIcon() {return $('[class="icon-plus"]')};
    get sizeInp() {return $('#group_1')};
    get sizeM() {return $('(.//select[@id="group_1"]/option[2])')};
    get color() {return $('[id="color_14"]')};
    get addCartBtn() {return $('[class="exclusive"]')};
    get closeBtn() {return $('[class="fancybox-item fancybox-close"]')};
    get imgSrc() { return $('(.//img [@src="http://automationpractice.com/img/p/3/3-large_default.jpg"])')};

};




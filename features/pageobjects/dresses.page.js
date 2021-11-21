const Page = require('./page');

module.exports = class DressesPage extends Page {
    open() {
        return super.open('index.php?id_category=8&controller=category')
    };

    get header() {return $('[class="category-name"]')};

}




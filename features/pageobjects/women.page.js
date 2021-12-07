const Page = require('./page');

module.exports = class WomenPage extends Page {
    open() {
        return super.open('index.php?id_category=3&controller=category');
    };
    get header() {
        return $('[class="category-name"]');
    };
}



const Page = require('./page');

module.exports = class TShirtPage extends Page {
    open() {
        return super.open('index.php?id_category=5&controller=category');
    };

    get header() {return $('[class="category-name"]')};
}



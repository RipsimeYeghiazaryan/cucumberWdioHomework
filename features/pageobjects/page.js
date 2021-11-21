
module.exports = class Page {

    open(path) {
        return browser.url(`http://automationpractice.com/${path}`)
    }

}

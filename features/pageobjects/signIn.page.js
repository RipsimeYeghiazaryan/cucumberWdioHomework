const Page = require('./page');

module.exports = class SignInPage extends Page {
    open () {
        return super.open('index.php?controller=authentication&back=my-account');
    };

    get scroll() {
        const el = $('#email_create');
        return el.scrollIntoView({block: "center"});
    };

    get errorMessage() {
        return $('#create_account_error > ol > li');
    };

    get emailInp() {
        return $('#email_create');
    };

    get sbmBtn() {
        return $('#SubmitCreate');
    };

};

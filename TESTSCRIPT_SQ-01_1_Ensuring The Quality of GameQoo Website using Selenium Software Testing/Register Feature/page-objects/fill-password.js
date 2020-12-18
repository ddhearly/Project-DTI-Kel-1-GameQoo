module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register',

    elements: {
        fillPassword: by.xpath("//input[@id='password']")
    },

    perform: function () {

        var selector = page.fillPassword.elements.fillPassword;
        return driver.findElement(selector).sendKeys(shared.id.pw);
    }
};
module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register',

    elements: {
        fillEmail: by.xpath("//input[@id='email']")
    },

    perform: function () {

        var selector = page.fillEmail.elements.fillEmail;
        return driver.findElement(selector).sendKeys(shared.id.email);
    }
};

module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register',

    elements: {
        fillUsernamef: by.xpath("//input[@id='username']")
    },

    perform: function () {

        var selector = page.fillUsernamef.elements.fillUsernamef;
        return driver.findElement(selector).sendKeys(shared.idf.username);
    }
};
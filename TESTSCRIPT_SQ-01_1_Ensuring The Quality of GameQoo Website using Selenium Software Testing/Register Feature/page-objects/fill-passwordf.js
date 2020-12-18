module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register',

    elements: {
        fillPasswordf: by.xpath("//input[@id='password']")
    },

    perform: function () {

        var selector = page.fillPasswordf.elements.fillPasswordf;
        return driver.findElement(selector).sendKeys(shared.idf.pw);
    }
};
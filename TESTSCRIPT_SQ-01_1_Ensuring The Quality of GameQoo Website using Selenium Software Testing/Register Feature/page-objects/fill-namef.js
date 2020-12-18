module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register',

    elements: {
        fillNamef: by.xpath("//input[@id='fullname']")
    },

    perform: function () {

        var selector = page.fillNamef.elements.fillNamef;
        return driver.findElement(selector).sendKeys(shared.idf.name);
    }
};

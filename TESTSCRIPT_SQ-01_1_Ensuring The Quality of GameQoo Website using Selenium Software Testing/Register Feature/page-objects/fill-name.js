module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register',

    elements: {
        fillName: by.xpath("//input[@id='fullname']")
    },

    perform: function () {

        var selector = page.fillName.elements.fillName;
        return driver.findElement(selector).sendKeys(shared.id.name);
    }
};

module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register',

    elements: {
        fillUsername: by.xpath("//input[@id='username']")
    },

    perform: function () {

        var selector = page.fillUsername.elements.fillUsername;
        return driver.findElement(selector).sendKeys(shared.id.username);
    }
};
module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register',

    elements: {
        clickCreate: by.xpath("//button[normalize-space()='Buat akun']")
    },

    performClick: function () {

        var selector = page.clickCreate.elements.clickCreate;
        return driver.findElement(selector).click(selector);
    }
};
module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register',

    elements: {
        clickCreatef: by.xpath("//button[normalize-space()='Buat akun']")
    },

    performClick: function () {

        var selector = page.clickCreatef.elements.clickCreatef;
        return driver.findElement(selector).click(selector);
    }
};
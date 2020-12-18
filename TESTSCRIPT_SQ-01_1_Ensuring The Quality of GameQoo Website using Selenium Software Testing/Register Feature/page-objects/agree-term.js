module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register',

    elements: {
        agreeTerm: by.xpath("//label[normalize-space()='Setuju dengan Syarat dan Ketentuan']")
    },

    perform: function () {

        var selector = page.agreeTerm.elements.agreeTerm;
        return driver.findElement(selector).click(selector);
    }
};
module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register',

    elements: {
        agreeTermf: by.xpath("//label[normalize-space()='Setuju dengan Syarat dan Ketentuan']")
    },

    perform: function () {

        var selector = page.agreeTermf.elements.agreeTermf;
        return driver.findElement(selector).click(selector);
    }
};
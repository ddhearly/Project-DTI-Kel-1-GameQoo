module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register',

    elements: {
        fillEmailf: by.xpath("//input[@id='email']")
    },

    perform: function () {

        var selector = page.fillEmailf.elements.fillEmailf;
        return driver.findElement(selector).sendKeys(shared.idf.email);
    }
};

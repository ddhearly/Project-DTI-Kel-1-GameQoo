module.exports = {

    url: 'https://www.gameqoo.id/identity/account/login',

    elements: {
        fieldEmailfailed: by.xpath("//input[@id='Input_Email']")
    },

    performFill: function () {

        var selector = page.fieldEmailfailed.elements.fieldEmailfailed;
        return driver.findElement(selector).sendKeys(shared.id.emailfailed);
    }
};

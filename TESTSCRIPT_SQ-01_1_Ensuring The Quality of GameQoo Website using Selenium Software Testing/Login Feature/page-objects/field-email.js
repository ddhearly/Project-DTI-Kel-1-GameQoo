module.exports = {

    url: 'https://www.gameqoo.id/identity/account/login',

    elements: {
        fieldEmail: by.xpath("//input[@id='Input_Email']")
    },

    performFill: function () {

        var selector = page.fieldEmail.elements.fieldEmail;
        return driver.findElement(selector).sendKeys(shared.id.email);
    }
};

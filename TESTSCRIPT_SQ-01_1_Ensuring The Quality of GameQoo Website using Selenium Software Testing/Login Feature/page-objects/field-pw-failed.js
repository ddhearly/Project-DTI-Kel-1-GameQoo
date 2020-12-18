module.exports = {

    url: 'https://www.gameqoo.id/identity/account/login',

    elements: {
        fieldPwfailed: by.xpath("//input[@id='Input_Password']")
    },

    performFill: function () {

        var selector = page.fieldPwfailed.elements.fieldPwfailed;
        return driver.findElement(selector).sendKeys(shared.id.pwfailed);
    }
};

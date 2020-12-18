module.exports = {

    url: 'https://www.gameqoo.id/identity/account/login',

    elements: {
        fieldPw: by.xpath("//input[@id='Input_Password']")
    },

    performFill: function () {

        var selector = page.fieldPw.elements.fieldPw;
        return driver.findElement(selector).sendKeys(shared.id.pw);
    }
};

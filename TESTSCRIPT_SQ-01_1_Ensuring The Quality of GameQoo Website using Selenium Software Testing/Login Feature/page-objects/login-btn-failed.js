module.exports = {

    url: 'https://www.gameqoo.id/identity/account/login',

    elements: {
        loginBtnfailed: by.xpath("//button[normalize-space()='Masuk']")
    },

    performClick: function () {

        var selector = page.loginBtnfailed.elements.loginBtnfailed;
        return driver.findElement(selector).click();
    }
};

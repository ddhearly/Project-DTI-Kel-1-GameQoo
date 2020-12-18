module.exports = {

    url: 'https://www.gameqoo.id/identity/account/login',

    elements: {
        loginBtn: by.xpath("//button[normalize-space()='Masuk']")
    },

    performClick: function () {

        var selector = page.loginBtn.elements.loginBtn;
        return driver.findElement(selector).click();
    }
};

module.exports = {

    url: 'https://www.gameqoo.id/game',

    elements: {
        searchBtnf: by.xpath("//i[@class='ya ya-search m-0']")
    },

    performClick: function () {

        var selector = page.searchBtnf.elements.searchBtnf;
        return driver.findElement(selector).click();
    }
};

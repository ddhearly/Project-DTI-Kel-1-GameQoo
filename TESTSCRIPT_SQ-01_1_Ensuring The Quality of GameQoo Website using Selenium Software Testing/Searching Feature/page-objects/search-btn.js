module.exports = {

    url: 'https://www.gameqoo.id/game',

    elements: {
        searchBtn: by.xpath("//i[@class='ya ya-search m-0']")
    },

    performClick: function () {

        var selector = page.searchBtn.elements.searchBtn;
        return driver.findElement(selector).click();
    }
};

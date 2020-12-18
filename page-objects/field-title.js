module.exports = {

    url: 'https://www.gameqoo.id/game',

    elements: {
        fieldTitle: by.xpath("//input[@placeholder='Cari judul di All Games...']")
    }, 

    performFill: function () {

        var selector = page.fieldTitle.elements.fieldTitle;
        return driver.findElement(selector).sendKeys(shared.title.game);
    }
};

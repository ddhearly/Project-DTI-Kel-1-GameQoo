module.exports = {

    url: 'https://www.gameqoo.id/game',

    elements: {
        fieldTitlef: by.xpath("//input[@placeholder='Cari judul di All Games...']")
    }, 

    performFill: function () {

        var selector = page.fieldTitlef.elements.fieldTitlef;
        return driver.findElement(selector).sendKeys(shared.titlef.gamef);
    }
};

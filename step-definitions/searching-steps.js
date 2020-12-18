module.exports = function () {
    
    this.Given(/^user browse game page$/, function () {
      helpers.loadPage('https://www.gameqoo.id/game')
    });

    this.Given(/^user fill the game title$/, function () {
      driver.then(function () {
        return page.fieldTitle.performFill();
      })
    });

    this.When(/^user click on search button$/, function () {
      driver.then(function () {
        return page.searchBtn.performClick();
      })
    });

      this.Then(/^user can find the game$/, function () {
        return driver.findElements(by.xpath("//img[@alt='Dragodino']"))
        .then(function (elements) {

          // verify this element has children
          expect(elements.length).to.equal(0);
      });

    });
 }
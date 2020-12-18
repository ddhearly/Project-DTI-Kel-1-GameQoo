module.exports = function () {
    
    this.Given(/^user browse failed game page$/, function () {
      helpers.loadPage('https://www.gameqoo.id/game')
    });

    this.Given(/^user fill the game title failed$/, function () {
      driver.then(function () {
        return page.fieldTitlef.performFill();
      })
    });

    this.When(/^user click on search button failed$/, function () {
      driver.then(function () {
        return page.searchBtnf.performClick();
      })
    });

      this.Then(/^user cannot find the game$/, function () {
        return driver.findElements(by.xpath("//img[@alt='Dragodino']"))
        .then(function (elements) {

          // verify this element has children
          expect(elements.length).to.not.equal(0);
      });

    });
 }

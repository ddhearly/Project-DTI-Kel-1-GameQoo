module.exports = function () 
{
    this.Given(/^user browse signinfailed page$/, function () {
        helpers.loadPage('https://www.gameqoo.id/identity/account/login')
      });

    this.Given(/^user fill emailfailed field$/, function () {
        driver.then(function() {
            return page.fieldEmailfailed.performFill();
        })
      });

    this.Given(/^user fill passwordfailed field$/, function () {
        driver.then(function() {
            return page.fieldPwfailed.performFill();
        })
      });

    this.When(/^user click loginfailed button$/, function () {
        driver.then(function() {
            return page.loginBtnfailed.performClick();
         })
      });

    this.Then(/^user can see the pagefailed$/, function () {
        return driver.findElements(by.xpath("//p[@class='promo-title d-inline-block mr-auto mb-2 mb-lg-0']"))
              
              .then(function (elements) {

                  // verify this element has children
                  expect(elements.length).to.not.equal(1);
              });

      });
}

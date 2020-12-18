module.exports = function () 
{
    this.Given(/^user browse signin page$/, function () {
        helpers.loadPage('https://www.gameqoo.id/identity/account/login')
      });

      this.Given(/^user fill email field$/, function () {
          driver.then(function() {
              return page.fieldEmail.performFill();
          })
      });

      this.Given(/^user fill password field$/, function () {
          driver.then(function() {
              return page.fieldPw.performFill();
          })
      });

      this.When(/^user click login button$/, function () {
          driver.then(function() {
            return page.loginBtn.performClick();
         })
      });

      this.Then(/^user can see the page$/, function () {
          return driver.findElements(by.xpath("//p[@class='promo-title d-inline-block mr-auto mb-2 mb-lg-0']"))
              
              .then(function (elements) {

                  // verify this element has children
                  expect(elements.length).to.equal(1);
              });

      });
}

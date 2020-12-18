module.exports = function () {
    
    this.Given(/^browse register page$/, function () {
        helpers.loadPage('https://www.gameqoo.id/identity/account/register')
       });
    
    this.Given(/^fill name field$/, function () {
        driver.then(function () {
            return page.fillNamef.perform();
     })
    });

    this.Given(/^fill email field$/, function () {
       driver.then(function () {
            return page.fillEmailf.perform();
     })
    });

    
    this.Given(/^fill username field$/, function () {
        driver.then(function () {
            return page.fillUsernamef.perform();
     })
    });
    
    this.Given(/^fill password field$/, function () {
        driver.then(function () {
            return page.fillPasswordf.perform();
     })
    });

    this.Given(/^agree with term and conditions$/, function () {
       driver.then(function () {
            return page.agreeTermf.perform();
     })
    });
   
    this.When(/^click on create account button$/, function () {
       driver.then(function () {
            return page.clickCreatef.performClick();
     })
    });
     
    this.Then(/^user regist$/, function (callback) {
         driver.then(function () {
            helpers.loadPage('https://www.gameqoo.id/identity/account/register')
     })
    });
}
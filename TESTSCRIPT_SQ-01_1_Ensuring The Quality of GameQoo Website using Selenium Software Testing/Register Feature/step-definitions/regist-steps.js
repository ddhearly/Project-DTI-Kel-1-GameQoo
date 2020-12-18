module.exports = function () {
    
    this.Given(/^user browse register page$/, function () {
        helpers.loadPage('https://www.gameqoo.id/identity/account/register')
       });
    
    this.Given(/^user fill name field$/, function () {
        driver.then(function () {
            return page.fillName.perform();
     })
    });

    this.Given(/^user fill email field$/, function () {
       driver.then(function () {
            return page.fillEmail.perform();
     })
    });

    
    this.Given(/^user fill username field$/, function () {
        driver.then(function () {
            return page.fillUsername.perform();
     })
    });
    
    this.Given(/^user fill password field$/, function () {
        driver.then(function () {
            return page.fillPassword.perform();
     })
    });

    this.Given(/^user agree with term and conditions$/, function () {
       driver.then(function () {
            return page.agreeTerm.perform();
     })
    });
   
    this.When(/^user click on create account button$/, function () {
       driver.then(function () {
            return page.clickCreate.performClick();
     })
    });
    
    this.Then(/^user can see home page$/, function () {
       driver.then(function () {
            helpers.loadPage('https://www.gameqoo.id/')
     })
    });

}
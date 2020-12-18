# ./features/signin.feature

Feature: Sign in on the website
    As a user
    I want to be able to signin

    @success
    Scenario: User success to signin on the website
        Given user browse signin page
        And user fill email field
        And user fill password field
        When user click login button
        Then user can see the page

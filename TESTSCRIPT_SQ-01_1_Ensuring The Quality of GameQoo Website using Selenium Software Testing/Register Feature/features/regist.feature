# ./features/regist.feature

Feature: Regist

    As a user
    I want to be able to regist

@success
Scenario: Regist on gameqoo website
    Given user browse register page
    And user fill name field
    And user fill email field
    And user fill username field
    And user fill password field
    And user agree with term and conditions
    When user click on create account button
    Then user can see home page



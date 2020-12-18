# ./features/regist-fail.feature

Feature: Regist

    As a user
    I want to be able to regist

@failed
Scenario: User failed to regist on gameqoo website
    Given browse register page
    And fill name field
    And fill email field
    And fill username field
    And fill password field
    And agree with term and conditions
    When click on create account button
    Then user regist
# ./features/searchingf.feature

Feature: Searching for any games on the website
    As a user
    I want to be able to do searching for any games failed

    @failed   
    Scenario: User failed to do search game on the website
        Given user browse failed game page
        And user fill the game title failed
        When user click on search button failed
        Then user cannot find the game 
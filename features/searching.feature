# ./features/searching.feature

Feature: Searching for any games on the website
    As a user
    I want to be able to do searching for any games

    @success
    Scenario: User success to do search game on the website
        Given user browse game page
        And user fill the game title
        When user click on search button
        Then user can find the game
 
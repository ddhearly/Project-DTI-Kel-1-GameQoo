# ./features/signinfailed.feature

Feature: Sign in on the website
    As a user
    I want to be able to signinfailed

    @success
    Scenario: User success to signinfailed on the website
        Given user browse signinfailed page
        And user fill emailfailed field
        And user fill passwordfailed field
        When user click loginfailed button
        Then user can see the pagefailed
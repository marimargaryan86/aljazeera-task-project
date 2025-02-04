Feature: Validate the Livestream Player
  Background: Navigate to homepage and accept cookies
    Given I am on the live page
    And Accepting cookies

  Scenario: Validate Player is visible in Livestream Player
    Then the livestream player should be visible

  Scenario: Validate Switch Player button is visible in Livestream Player
    Then the livestream player should be visible
    And the switch player button should be visible

Feature: Validate the Livestream Player

  Scenario: Validate Player is visible in Livestream Player
    Given I am on the live page
    Then the livestream player should be visible

  Scenario: Validate Switch Player button is visible in Livestream Player
    Given I am on the live page
    Then the livestream player should be visible
    And the switch player button should be visible

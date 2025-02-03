Feature: Most Popular Section

  Scenario: Verify "Most popular" section is visible on Desktop
    Given I am on the homepage
    Then I should see the "Most popular" section

  Scenario: Verify "Most popular" section has 10 posts
    Given I am on the homepage
    Then I should see the "Most popular" section
    And The "Most popular" section should have 10 posts

  Scenario: Ensure the "Skip to Most Read" bypass block menu item works on desktop
   Given I am on the homepage
    When I click on the whitespace near the logo
    And I press the TAB key until "Skip to Most Read" is visible
    And I click the "Skip to Most Read" option
    Then the "Most Read" section should be visible
    And the URL should append "most-read-container"

  Scenario: On Mobile, make sure that the "Most popular" section is not appearing
    Given I am on the homepage
    When I simulate a mobile view
    Then the "Most popular" section should not be visible

Feature: Giphy page

Scenario: The user accesses a giphy on the Trending section
    Given the user accesses the Trending section on the giphy page
    When clicks on the first giphy
    Then the giphy is displayed

Scenario: The user searches for a giphy
    Given the user accesses the giphy page
    When the user searches for a party giphy
    And clicks on the first giphy
    Then the giphy is displayed
    And the short link is available

Scenario: The short link redirects the user to the giphy page
    Given the user accesses the short link
    When the giphy is displayed
    Then the url displays the long link
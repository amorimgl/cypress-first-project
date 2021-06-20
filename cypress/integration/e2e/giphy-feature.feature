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
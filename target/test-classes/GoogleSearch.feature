Feature: 
  Test Google Search Functionality


  #simple scenario, uses a tag @FirstTest for selective running options
  @FirstTest
  Scenario: 
    Text Search

    Given I am on Google page
    When I enter search criteria
    Then I should be taken to search results

  #scenario outline example (same test with different data)
  Scenario Outline: 
    Text Search - Multi

    Given I am on Google page
    When I enter search <criteria>
    Then I should be taken to search results

    Examples: 
      | criteria   |
      | "Google"   |
      | "Facebook" |

  #scenario with data table (one test with mulitple input data)
  Scenario: 
    Text Search - Multi with DataTable

    Given I am on Google page
    When I enter search criteria - multi
      | Walt | Disney |
    Then I should be taken to search results

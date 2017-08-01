Feature: Example feature 
Let's find out with IPhone is better     

  Scenario: Onliner test
    Given I am on the Onliner.by catalog page
    When I click on mobile phones link
    Then I click on the checkbox-filter with "Apple" name
    Then click on another checkbox-filter with "С доставкой по Беларуси" name
    When I click on first item with name "Apple iPhone SE 16GB"
    Then I add to comparator
    Then I navigate back
    When I click on second item with name "Apple iPhone 6s 16GB"
    Then I add to comparator again
    Then redirect to comparison page 
    Then assert that first is better than second item
    Then delete all items from comparison
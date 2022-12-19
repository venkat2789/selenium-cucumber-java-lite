$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/GoogleSearch.feature");
formatter.feature({
  "name": "",
  "description": "  Test Google Search Functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "    Text Search",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FirstTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Google page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.google.steps.StepDefinitions.i_am_on_google_page() in file:/Users/venkatsiva/eclipse-workspace/selenium-cucumber-java-lite/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter search criteria",
  "keyword": "When "
});
formatter.match({
  "location": "com.google.steps.StepDefinitions.i_enter_search_criteria() in file:/Users/venkatsiva/eclipse-workspace/selenium-cucumber-java-lite/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be taken to search results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.google.steps.StepDefinitions.i_should_be_taken_to_search_results() in file:/Users/venkatsiva/eclipse-workspace/selenium-cucumber-java-lite/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "    Text Search - Multi",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on Google page",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter search \u003ccriteria\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I should be taken to search results",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "criteria"
      ]
    },
    {
      "cells": [
        "\"Google\""
      ]
    },
    {
      "cells": [
        "\"Facebook\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "    Text Search - Multi",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Google page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.google.steps.StepDefinitions.i_am_on_google_page() in file:/Users/venkatsiva/eclipse-workspace/selenium-cucumber-java-lite/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter search \"Google\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.google.steps.StepDefinitions.i_enter_search_criteria(String) in file:/Users/venkatsiva/eclipse-workspace/selenium-cucumber-java-lite/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be taken to search results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.google.steps.StepDefinitions.i_should_be_taken_to_search_results() in file:/Users/venkatsiva/eclipse-workspace/selenium-cucumber-java-lite/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    Text Search - Multi",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Google page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.google.steps.StepDefinitions.i_am_on_google_page() in file:/Users/venkatsiva/eclipse-workspace/selenium-cucumber-java-lite/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter search \"Facebook\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.google.steps.StepDefinitions.i_enter_search_criteria(String) in file:/Users/venkatsiva/eclipse-workspace/selenium-cucumber-java-lite/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be taken to search results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.google.steps.StepDefinitions.i_should_be_taken_to_search_results() in file:/Users/venkatsiva/eclipse-workspace/selenium-cucumber-java-lite/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    Text Search - Multi with DataTable",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Google page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.google.steps.StepDefinitions.i_am_on_google_page() in file:/Users/venkatsiva/eclipse-workspace/selenium-cucumber-java-lite/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter search criteria - multi",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.google.steps.StepDefinitions.i_enter_search_criteria(DataTable) in file:/Users/venkatsiva/eclipse-workspace/selenium-cucumber-java-lite/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be taken to search results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.google.steps.StepDefinitions.i_should_be_taken_to_search_results() in file:/Users/venkatsiva/eclipse-workspace/selenium-cucumber-java-lite/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
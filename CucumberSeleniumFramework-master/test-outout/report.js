$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Users/NEW/Downloads/CucumberSeleniumFramework-master/CucumberSeleniumFramework-master/src/test/java/Features/webdriver1.feature");
formatter.feature({
  "line": 1,
  "name": "Web Driver Login Feature1",
  "description": "",
  "id": "web-driver-login-feature1",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Web Driver Login Test Scenario1",
  "description": "",
  "id": "web-driver-login-feature1;web-driver-login-test-scenario1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "web-driver-login-feature1;web-driver-login-test-scenario1;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "web-driver-login-feature1;web-driver-login-test-scenario1;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 11,
      "id": "web-driver-login-feature1;web-driver-login-test-scenario1;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 731500,
  "status": "passed"
});
formatter.before({
  "duration": 116500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Web Driver Login Test Scenario1",
  "description": "",
  "id": "web-driver-login-feature1;web-driver-login-test-scenario1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "webdriverStepdefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 9652111700,
  "status": "passed"
});
formatter.match({
  "location": "webdriverStepdefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 74100,
  "status": "passed"
});
formatter.match({
  "location": "webdriverStepdefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 63100,
  "status": "passed"
});
formatter.after({
  "duration": 49200,
  "status": "passed"
});
formatter.after({
  "duration": 43200,
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Cogmento CRM Login feature",
  "description": "",
  "id": "cogmento-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#without example keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: Cogmento CRM Login Scenario"
    },
    {
      "line": 6,
      "value": "#Given user is already on Login page"
    },
    {
      "line": 7,
      "value": "#When Title of login page is Cogmento CRM"
    },
    {
      "line": 8,
      "value": "#Then User enters username and password"
    },
    {
      "line": 9,
      "value": "#Then User clicks on Login button"
    },
    {
      "line": 10,
      "value": "#Then User is on HomePage"
    }
  ],
  "line": 14,
  "name": "Cogmento CRM Login Scenario",
  "description": "",
  "id": "cogmento-crm-login-feature;cogmento-crm-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User is on HomePage",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "cogmento-crm-login-feature;cogmento-crm-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23,
      "id": "cogmento-crm-login-feature;cogmento-crm-login-scenario;;1"
    },
    {
      "cells": [
        "lipsita.987@gmail.com",
        "indu123$"
      ],
      "line": 24,
      "id": "cogmento-crm-login-feature;cogmento-crm-login-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Cogmento CRM Login Scenario",
  "description": "",
  "id": "cogmento-crm-login-feature;cogmento-crm-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"lipsita.987@gmail.com\" and \"indu123$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User is on HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 18044889300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 261512200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lipsita.987@gmail.com",
      "offset": 13
    },
    {
      "val": "indu123$",
      "offset": 41
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 17485250200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 68838500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "duration": 1200294000,
  "status": "passed"
});
});
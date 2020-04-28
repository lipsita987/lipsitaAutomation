$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Automation/AutomationWorkspace/cucumber_project/src/test/java/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Cogmento CRM Login feature",
  "description": "",
  "id": "cogmento-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Cogmento CRM Login Scenario",
  "description": "",
  "id": "cogmento-crm-login-feature;cogmento-crm-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on HomePage",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "cogmento-crm-login-feature;cogmento-crm-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "cogmento-crm-login-feature;cogmento-crm-login-scenario;;1"
    },
    {
      "cells": [
        "lipsita.987@gmail.com",
        "indu123$"
      ],
      "line": 13,
      "id": "cogmento-crm-login-feature;cogmento-crm-login-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Cogmento CRM Login Scenario",
  "description": "",
  "id": "cogmento-crm-login-feature;cogmento-crm-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"lipsita.987@gmail.com\" and \"indu123$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 11549288400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 251173300,
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
  "duration": 7358559900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 48247800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "duration": 1163826700,
  "status": "passed"
});
});
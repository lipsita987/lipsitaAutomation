$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Automation/AutomationWorkspace/cucumber_project/src/test/java/features/Contact.feature");
formatter.feature({
  "line": 1,
  "name": "Cogmento CRM Create Contacts",
  "description": "",
  "id": "cogmento-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Cogmento CRM Create a new contact scenario",
  "description": "",
  "id": "cogmento-crm-create-contacts;cogmento-crm-create-a-new-contact-scenario",
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
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "cogmento-crm-create-contacts;cogmento-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "cogmento-crm-create-contacts;cogmento-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "lipsita.987@gmail.com",
        "indu123$",
        "Tom",
        "Peter",
        "Manager"
      ],
      "line": 16,
      "id": "cogmento-crm-create-contacts;cogmento-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "lipsita.987@gmail.com",
        "indu123$",
        "John",
        "Smith",
        "Developer"
      ],
      "line": 17,
      "id": "cogmento-crm-create-contacts;cogmento-crm-create-a-new-contact-scenario;;3"
    },
    {
      "cells": [
        "lipsita.987@gmail.com",
        "indu123$",
        "Javed",
        "Ali",
        "Tester"
      ],
      "line": 18,
      "id": "cogmento-crm-create-contacts;cogmento-crm-create-a-new-contact-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Cogmento CRM Create a new contact scenario",
  "description": "",
  "id": "cogmento-crm-create-contacts;cogmento-crm-create-a-new-contact-scenario;;2",
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
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Tom\" and \"Peter\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 27725485500,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 16715400,
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
  "location": "ContactStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 7265275600,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 57432900,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "duration": 8815500,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 4220267600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 29
    },
    {
      "val": "Peter",
      "offset": 39
    },
    {
      "val": "Manager",
      "offset": 51
    }
  ],
  "location": "ContactStepDefination.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 19450799900,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 2653899300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Cogmento CRM Create a new contact scenario",
  "description": "",
  "id": "cogmento-crm-create-contacts;cogmento-crm-create-a-new-contact-scenario;;3",
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
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"John\" and \"Smith\" and \"Developer\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 15842057500,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 95739800,
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
  "location": "ContactStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5024455100,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 72678300,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "duration": 13164500,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 4998959900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 29
    },
    {
      "val": "Smith",
      "offset": 40
    },
    {
      "val": "Developer",
      "offset": 52
    }
  ],
  "location": "ContactStepDefination.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 19424304700,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 4253301000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Cogmento CRM Create a new contact scenario",
  "description": "",
  "id": "cogmento-crm-create-contacts;cogmento-crm-create-a-new-contact-scenario;;4",
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
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Javed\" and \"Ali\" and \"Tester\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 16423768600,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 11548200,
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
  "location": "ContactStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 4955700200,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 51506800,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "duration": 10042600,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 3105246300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Javed",
      "offset": 29
    },
    {
      "val": "Ali",
      "offset": 41
    },
    {
      "val": "Tester",
      "offset": 51
    }
  ],
  "location": "ContactStepDefination.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 19927898900,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 3784951700,
  "status": "passed"
});
});
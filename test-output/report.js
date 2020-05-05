$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/soumya/git/lipsitaAutomation/src/test/java/features/Contact.feature");
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
    },
    {
      "cells": [
        "lipsita.987@gmail.com",
        "indu123$",
        "Soumya",
        "Dash",
        "Admin"
      ],
      "line": 19,
      "id": "cogmento-crm-create-contacts;cogmento-crm-create-a-new-contact-scenario;;5"
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
  "duration": 3973147815,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 25871965,
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
  "duration": 2829049019,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 29523417,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "duration": 3724606,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 1604735013,
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
  "duration": 13811147961,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 383570663,
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
  "duration": 3774761146,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 43650671,
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
  "duration": 2458269992,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 24960513,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "duration": 4071606,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 1580740964,
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
  "duration": 2960830672,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 388442125,
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
  "duration": 2695897815,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 24479634,
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
  "duration": 2037674817,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 39881898,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "duration": 4509345,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 1915042603,
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
  "duration": 23802278969,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 388077710,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Cogmento CRM Create a new contact scenario",
  "description": "",
  "id": "cogmento-crm-create-contacts;cogmento-crm-create-a-new-contact-scenario;;5",
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
  "name": "user enters contact details \"Soumya\" and \"Dash\" and \"Admin\"",
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
  "duration": 2583663609,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 17312755,
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
  "duration": 3440273715,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 25560506,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "duration": 6097113,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 1600233700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Soumya",
      "offset": 29
    },
    {
      "val": "Dash",
      "offset": 42
    },
    {
      "val": "Admin",
      "offset": 53
    }
  ],
  "location": "ContactStepDefination.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 12942578075,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 359424655,
  "status": "passed"
});
});
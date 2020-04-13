$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Automation/AutomationWorkspace/cucumber_project/src/test/java/features/DealsMap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Cogmento CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;cogmento-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "lipsita.987@gmail.com",
        "indu123$"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 17
    },
    {
      "cells": [
        "test deal1",
        "1000",
        "50",
        "20"
      ],
      "line": 18
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "60",
        "30"
      ],
      "line": 19
    },
    {
      "cells": [
        "test deal3",
        "3000",
        "70",
        "40"
      ],
      "line": 20
    },
    {
      "cells": [
        "test deal4",
        "4000",
        "80",
        "50"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsMapStepDefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 15557040900,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 19398500,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 5112297800,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 45268500,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "duration": 8982300,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 9448422200,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 24072857700,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 2100713900,
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Selenium/manishSelenium/manishSelenium/FreeCrmBDDFrameWork/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Login with correct login values"
    },
    {
      "line": 6,
      "value": "#Given  user launch the browser"
    },
    {
      "line": 7,
      "value": "#Then user enters url"
    },
    {
      "line": 8,
      "value": "#Then user enters username \"rahul.sanghavi.mca@gmail.com\" and password \"rahul12345\""
    },
    {
      "line": 9,
      "value": "#Then user click on login button"
    },
    {
      "line": 10,
      "value": "#And user will on home page"
    },
    {
      "line": 11,
      "value": "#Then user close the browser"
    }
  ],
  "line": 14,
  "name": ": Login with correct login values",
  "description": "",
  "id": "login;:-login-with-correct-login-values",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user enters url",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user enters username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user will on home page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login;:-login-with-correct-login-values;",
  "rows": [
    {
      "cells": [
        "username",
        "passwrod"
      ],
      "line": 26,
      "id": "login;:-login-with-correct-login-values;;1"
    },
    {
      "cells": [
        "rahul.sanghavi.mca@gmail.com",
        "rahul12345"
      ],
      "line": 27,
      "id": "login;:-login-with-correct-login-values;;2"
    },
    {
      "cells": [
        "manishpatel1985@googlemail.com",
        "July2020"
      ],
      "line": 28,
      "id": "login;:-login-with-correct-login-values;;3"
    },
    {
      "cells": [
        "hetalpatel@gmail.com",
        "12345"
      ],
      "line": 29,
      "id": "login;:-login-with-correct-login-values;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": ": Login with correct login values",
  "description": "",
  "id": "login;:-login-with-correct-login-values;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user enters url",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user enters username \"rahul.sanghavi.mca@gmail.com\" and password \"\u003cpassword\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user will on home page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_browser()"
});
formatter.result({
  "duration": 6945225900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_url()"
});
formatter.result({
  "duration": 3103766199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rahul.sanghavi.mca@gmail.com",
      "offset": 22
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 66
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 5967528900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 3912771799,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_will_on_home_page()"
});
formatter.result({
  "duration": 56414801,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepDefinations.LoginStepDefinition.user_will_on_home_page(LoginStepDefinition.java:55)\r\n\tat ✽.And user will on home page(C:/Selenium/manishSelenium/manishSelenium/FreeCrmBDDFrameWork/src/main/java/Features/login.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": ": Login with correct login values",
  "description": "",
  "id": "login;:-login-with-correct-login-values;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user enters url",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user enters username \"manishpatel1985@googlemail.com\" and password \"\u003cpassword\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user will on home page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_browser()"
});

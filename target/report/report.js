$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFile/DottiForgot.feature");
formatter.feature({
  "name": "To validate Forgot password of dotti forgot page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate forgot password with invalid Email Id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch the chrome browser and load the dotti url",
  "keyword": "Given "
});
formatter.match({
  "location": "ForgotStepDefinition.userShouldLaunchTheChromeBrowserAndLoadTheDottiUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should go to the Drop Down SigIn",
  "keyword": "When "
});
formatter.match({
  "location": "DottiStepDefinition.user_should_go_to_the_Drop_Down_SigIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sigIn button",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.click_the_sigIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the forgot password",
  "keyword": "And "
});
formatter.match({
  "location": "ForgotStepDefinition.userShouldClickTheForgotPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the invalid email id",
  "keyword": "And "
});
formatter.match({
  "location": "ForgotStepDefinition.userEnterTheInvalidEmailId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the Reset Password button",
  "keyword": "And "
});
formatter.match({
  "location": "ForgotStepDefinition.userShouldClickTheResetPasswordButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Check the url and Navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "ForgotStepDefinition.userShouldCheckTheUrlAndNavigateToIncorrectCredentialPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFile/DottiLogin.feature");
formatter.feature({
  "name": "To validate sigIn functionality of dotti page",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should lounch the browser and load the Dotti page URL",
  "keyword": "Given "
});
formatter.match({
  "location": "DottiStepDefinition.user_should_lounch_the_browser_and_load_the_Dotti_page_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should go to the Drop Down SigIn",
  "keyword": "When "
});
formatter.match({
  "location": "DottiStepDefinition.user_should_go_to_the_Drop_Down_SigIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sigIn button",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.click_the_sigIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the title of dotti signin page",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.printTheTitleOfDottiSigninPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the current url dotti signin page",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.printTheCurrentUrlDottiSigninPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the sigIn page invalid email and invalid passWord",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User should type the Invalid email id in dotti page",
  "rows": [
    {
      "cells": [
        "invalid1",
        "jaijo@gmail.com"
      ]
    },
    {
      "cells": [
        "invalid2",
        "geeja@gmail.com"
      ]
    },
    {
      "cells": [
        "invalid3",
        "jaijohn@gmail.com"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.user_should_type_the_Invalid_email_id_in_dotti_page(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should type the Invalid password in dotti page",
  "rows": [
    {
      "cells": [
        "invPass1",
        "invPass2",
        "invPass3",
        "invPass4"
      ]
    },
    {
      "cells": [
        "112345",
        "123456",
        "134567",
        "145678"
      ]
    },
    {
      "cells": [
        "212345",
        "223456",
        "234567",
        "245678"
      ]
    },
    {
      "cells": [
        "312345",
        "323456",
        "334567",
        "345678"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.user_should_type_the_Invalid_password_in_dotti_page(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User shhould click the SIGN IN button",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.user_shhould_click_the_SIGN_IN_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "DottiStepDefinition.user_Should_navigate_to_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should lounch the browser and load the Dotti page URL",
  "keyword": "Given "
});
formatter.match({
  "location": "DottiStepDefinition.user_should_lounch_the_browser_and_load_the_Dotti_page_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should go to the Drop Down SigIn",
  "keyword": "When "
});
formatter.match({
  "location": "DottiStepDefinition.user_should_go_to_the_Drop_Down_SigIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sigIn button",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.click_the_sigIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the title of dotti signin page",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.printTheTitleOfDottiSigninPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the current url dotti signin page",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.printTheCurrentUrlDottiSigninPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the sigIn page valid email and invalid passWord",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User should type the valid Email id in dotti page",
  "rows": [
    {
      "cells": [
        "jaimalliga@gmail.com",
        "jai@gmail.com",
        "raj@gmail.com",
        "jaijohn@gmail.com"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.userShouldTypeTheValidEmailIdInDottiPage(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should type the Invalid Password in dotti page",
  "rows": [
    {
      "cells": [
        "12345",
        "23456",
        "34567",
        "45678"
      ]
    },
    {
      "cells": [
        "54321",
        "65432",
        "76543",
        "87654"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.userShouldTypeTheInvalidPasswordInDottiPage(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User shhould click the SIGN IN button",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.user_shhould_click_the_SIGN_IN_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should navigate to incorrect credential page verify url",
  "keyword": "Then "
});
formatter.match({
  "location": "DottiStepDefinition.userShouldNavigateToIncorrectCredentialPageVerifyUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the singin page invalid Email and valid Password bundle of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User should type the invalid Email id in dotti page\"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should type the valid Password in dotti page\"\u003cpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User shhould click the SIGN IN button",
  "keyword": "And "
});
formatter.step({
  "name": "User Should check url and navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "pass"
      ]
    },
    {
      "cells": [
        "kannan@gmail.com",
        "abcdef"
      ]
    },
    {
      "cells": [
        "dhana@gmail.com",
        "abcdef"
      ]
    },
    {
      "cells": [
        "bala@ymail.com",
        "abcdef"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should lounch the browser and load the Dotti page URL",
  "keyword": "Given "
});
formatter.match({
  "location": "DottiStepDefinition.user_should_lounch_the_browser_and_load_the_Dotti_page_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should go to the Drop Down SigIn",
  "keyword": "When "
});
formatter.match({
  "location": "DottiStepDefinition.user_should_go_to_the_Drop_Down_SigIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sigIn button",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.click_the_sigIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the title of dotti signin page",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.printTheTitleOfDottiSigninPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the current url dotti signin page",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.printTheCurrentUrlDottiSigninPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the singin page invalid Email and valid Password bundle of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User should type the invalid Email id in dotti page\"kannan@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.userShouldTypeTheInvalidEmailIdInDottiPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should type the valid Password in dotti page\"abcdef\"",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.userShouldTypeTheValidPasswordInDottiPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User shhould click the SIGN IN button",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.user_shhould_click_the_SIGN_IN_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should check url and navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "DottiStepDefinition.userShouldCheckUrlAndNavigateToIncorrectCredentialPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should lounch the browser and load the Dotti page URL",
  "keyword": "Given "
});
formatter.match({
  "location": "DottiStepDefinition.user_should_lounch_the_browser_and_load_the_Dotti_page_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should go to the Drop Down SigIn",
  "keyword": "When "
});
formatter.match({
  "location": "DottiStepDefinition.user_should_go_to_the_Drop_Down_SigIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sigIn button",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.click_the_sigIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the title of dotti signin page",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.printTheTitleOfDottiSigninPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the current url dotti signin page",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.printTheCurrentUrlDottiSigninPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the singin page invalid Email and valid Password bundle of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User should type the invalid Email id in dotti page\"dhana@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.userShouldTypeTheInvalidEmailIdInDottiPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should type the valid Password in dotti page\"abcdef\"",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.userShouldTypeTheValidPasswordInDottiPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User shhould click the SIGN IN button",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.user_shhould_click_the_SIGN_IN_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should check url and navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "DottiStepDefinition.userShouldCheckUrlAndNavigateToIncorrectCredentialPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should lounch the browser and load the Dotti page URL",
  "keyword": "Given "
});
formatter.match({
  "location": "DottiStepDefinition.user_should_lounch_the_browser_and_load_the_Dotti_page_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should go to the Drop Down SigIn",
  "keyword": "When "
});
formatter.match({
  "location": "DottiStepDefinition.user_should_go_to_the_Drop_Down_SigIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sigIn button",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.click_the_sigIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the title of dotti signin page",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.printTheTitleOfDottiSigninPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the current url dotti signin page",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.printTheCurrentUrlDottiSigninPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the singin page invalid Email and valid Password bundle of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User should type the invalid Email id in dotti page\"bala@ymail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.userShouldTypeTheInvalidEmailIdInDottiPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should type the valid Password in dotti page\"abcdef\"",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.userShouldTypeTheValidPasswordInDottiPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User shhould click the SIGN IN button",
  "keyword": "And "
});
formatter.match({
  "location": "DottiStepDefinition.user_shhould_click_the_SIGN_IN_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should check url and navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "DottiStepDefinition.userShouldCheckUrlAndNavigateToIncorrectCredentialPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
package org.stepdefinition;

import org.junit.Assert;
import org.utilepackage.BaseClass;
import org.utilepackage.DottiForgotPOJO;

import io.cucumber.java.en.*;

public class ForgotStepDefinition extends BaseClass {
	
	
	@Given("User should launch the chrome browser and load the dotti url")
	public void userShouldLaunchTheChromeBrowserAndLoadTheDottiUrl() {
		  
	}

	@When("User should click the forgot password")
	public void userShouldClickTheForgotPassword() {
	    DottiForgotPOJO p = new DottiForgotPOJO();
	    jsClick(p.getLinkForgot());
	    wait(2);
	}

	@When("User enter the invalid email id")
	public void userEnterTheInvalidEmailId() {
	    DottiForgotPOJO p = new DottiForgotPOJO();
	    fill(p.getTxtForgotEmail(), "jaima@gmail.com");
	    wait(2);
	}

	@When("User should click the Reset Password button")
	public void userShouldClickTheResetPasswordButton() {
	    DottiForgotPOJO p = new DottiForgotPOJO();
	    btnClick(p.getBtnResetPass());
	    wait(2);
	}

	@Then("User Should Check the url and Navigate to incorrect credential page")
	public void userShouldCheckTheUrlAndNavigateToIncorrectCredentialPage() {
		 String currentUrl = driver.getCurrentUrl();
		   Assert.assertTrue("validate the URL", currentUrl.contains("PersonChangeServicePasswordForgottenReset"));
		   System.out.println("My Forgot Scenario 1 is Passed");
		  
	}


}

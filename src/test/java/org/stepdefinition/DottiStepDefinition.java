package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.utilepackage.BaseClass;
import org.utilepackage.DottiLogInPOJO;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.*;


public class DottiStepDefinition extends BaseClass {
	@Given("User should lounch the browser and load the Dotti page URL")
	public void user_should_lounch_the_browser_and_load_the_Dotti_page_URL() {
	  
	}

	@When("User should go to the Drop Down SigIn")
	public void user_should_go_to_the_Drop_Down_SigIn() {
	    DottiLogInPOJO p = new DottiLogInPOJO();
		moveElementTo(p.getDdSigIn());
		wait(10);
	}

	@When("Click the sigIn button")
	public void click_the_sigIn_button() {
		DottiLogInPOJO p = new DottiLogInPOJO();
		btnClick(p.getSigIn());	  
		wait(2);
	}

	@When("User should type the Invalid email id in dotti page")
	public void user_should_type_the_Invalid_email_id_in_dotti_page(io.cucumber.datatable.DataTable d) {
	   DottiLogInPOJO p = new DottiLogInPOJO();
	   
	   Map<String, String> listMap = d.asMap(String.class, String.class);
	   fill(p.getTxtEmail(), listMap.get("invalid2"));
	   System.out.println(p.getTxtEmail().getAttribute("value"));
	}

	@When("User should type the Invalid password in dotti page")
	public void user_should_type_the_Invalid_password_in_dotti_page(io.cucumber.datatable.DataTable d) {
	   DottiLogInPOJO p = new DottiLogInPOJO();
	   
	   List<Map<String, String>> liMaps = d.asMaps();
	   fill(p.getTxtPass(), liMaps.get(0).get("invPass1"));
	   System.out.println(p.getTxtPass().getAttribute("value"));
	   wait(2);
	}

	@When("User shhould click the SIGN IN button")
	public void user_shhould_click_the_SIGN_IN_button() {
	   DottiLogInPOJO p = new DottiLogInPOJO();
	   btnClick(p.getBtnSigIn());
	   wait(2);
	}
	
	@Then("User Should navigate to incorrect credential page")
	public void user_Should_navigate_to_incorrect_credential_page() {
	   String currentUrl = driver.getCurrentUrl();
	   Assert.assertTrue("validate the URL", currentUrl.contains("LogonForm?"));
	   System.out.println("My first Scenario 1 is passed");
	   
	}

	@When("print the title of dotti signin page")
	public void printTheTitleOfDottiSigninPage() {
		printTitle();
	}

	@When("print the current url dotti signin page")
	public void printTheCurrentUrlDottiSigninPage() {
		 printCurrentUrl();
	}
	
	// 1 dimentional list without header
	@When("User should type the valid Email id in dotti page")
	public void userShouldTypeTheValidEmailIdInDottiPage(io.cucumber.datatable.DataTable d) {
		 DottiLogInPOJO p = new DottiLogInPOJO();
		 List<String> list = d.asList();
		 
		 fill(p.getTxtEmail(), list.get(1));
		 System.out.println(p.getTxtEmail().getAttribute("value"));
	}
	
	// 2 dimentional lists without header
	@When("User should type the Invalid Password in dotti page")
	public void userShouldTypeTheInvalidPasswordInDottiPage(io.cucumber.datatable.DataTable d) {
		 DottiLogInPOJO p = new DottiLogInPOJO();
		 
		 List<List<String>> lists = d.asLists();
		 fill(p.getTxtPass(), lists.get(1).get(2));
		 System.out.println(p.getTxtPass().getAttribute("value"));
	}

	@Then("User Should navigate to incorrect credential page verify url")
	public void userShouldNavigateToIncorrectCredentialPageVerifyUrl() {
		 String currentUrl = driver.getCurrentUrl();
		   Assert.assertTrue("validate the URL", currentUrl.contains("LogonForm?"));
		   System.out.println("My Scenario 2 is passed");
		   
	}
	
	@When("User should type the invalid Email id in dotti page{string}")
	public void userShouldTypeTheInvalidEmailIdInDottiPage(String user) {
		 DottiLogInPOJO p = new DottiLogInPOJO();
		 fill(p.getTxtEmail(), user);
		 wait(2);
	}

	@When("User should type the valid Password in dotti page{string}")
	public void userShouldTypeTheValidPasswordInDottiPage(String pass) {
		 DottiLogInPOJO p = new DottiLogInPOJO();
		 fill(p.getTxtPass(), pass);
		 wait(2);
	}
	
	@Then("User Should check url and navigate to incorrect credential page")
	public void userShouldCheckUrlAndNavigateToIncorrectCredentialPage() {
		 String currentUrl = driver.getCurrentUrl();
		   Assert.assertTrue("validate the URL", currentUrl.contains("LogonForm?"));
		   System.out.println("My Scenario 3 is passed");
		   
	}
	
//	@When("User should type the valid Email id in dotti page{string}")
//	public void userShouldTypeTheValidEmailIdInDottiPage(String user) {
//		DottiLogInPOJO p = new DottiLogInPOJO();
//		 fill(p.getTxtEmail(), user);
//	}
//
//	@Then("User Should check url and navigate to Account Home page")
//	public void userShouldCheckUrlAndNavigateToAccountHomePage() {
//		 String currentUrl = driver.getCurrentUrl();
//		   Assert.assertTrue("validate the URL", currentUrl.contains("AjaxLogonForm"));
//		   System.out.println("My Scenario 3 Valid Email And Valid Password is passed");
//		   closeChrome();
//	}




}

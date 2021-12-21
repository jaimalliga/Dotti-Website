package org.utilepackage;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DottiLogInPOJO extends BaseClass {
	public DottiLogInPOJO() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="(//a[text()='Sign In'])[1]")
	private WebElement ddSigIn;
	
	@FindBy(xpath="(//a[text()='Sign In'])[2]")
	private WebElement sigIn;
	
	@FindBy(id="logonId")
	private WebElement txtEmail;
	
	@FindBy(id="logonPassword")
	private WebElement txtPass;
	
	@FindBy(xpath="(//button[@class='button button--full'])[3]")
	private WebElement btnSigIn;

	public WebElement getDdSigIn() {
		return ddSigIn;
	}

	public WebElement getSigIn() {
		return sigIn;
	}

	public WebElement getTxtEmail() {
		return txtEmail;
	}

	public WebElement getTxtPass() {
		return txtPass;
	}

	public WebElement getBtnSigIn() {
		return btnSigIn;
	}
	
	

}

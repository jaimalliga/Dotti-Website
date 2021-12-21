package org.utilepackage;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DottiForgotPOJO extends BaseClass {
	public DottiForgotPOJO() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//a[@class='forgetPwd']")
	private WebElement linkForgot;
	
	@FindBy(id="logonId")
	private WebElement txtForgotEmail;
	
	@FindBy(id="passwordResetBtn")
	private WebElement btnResetPass;

	public WebElement getLinkForgot() {
		return linkForgot;
	}

	public WebElement getTxtForgotEmail() {
		return txtForgotEmail;
	}

	public WebElement getBtnResetPass() {
		return btnResetPass;
	}
	
}

package org.stepdefinition;

import java.util.Date;

import org.utilepackage.BaseClass;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksClass extends BaseClass {
	@Before(order=1)
	public void beforeScenario() {
		//System.out.println("Before Scenario Got Executed");
		
		launchChrome();
		loadUrl("https://www.dotti.com.au/shop/en/dotti");
		winMax();
		wait(10);
	}
	
	@Before(order=2)
	public void startTime() {
		System.out.println(new Date());
	}
	
	
	@After(order=1)
	public void afterScenario() {
		System.out.println("After Scenario got Executed");
		closeChrome();
	}
	
	@After(order=2)
	public void endTime() {
		System.out.println(new Date());
	}

}

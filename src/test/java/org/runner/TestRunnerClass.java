package org.runner;


import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.utilepackage.JVMreport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources", glue="org.stepdefinition", monochrome=true, 
dryRun=false, plugin= {	"html:target\\report",
						"junit:target\\report\\dottijunit.xml",
						"json:target\\report\\dottilog.json"} )
public class TestRunnerClass extends JVMreport{
	
	@AfterClass
	public static void sample() {
		generateJvmReport(System.getProperty("user.dir")+"\\target\\report\\dottilog.json");
	}

}



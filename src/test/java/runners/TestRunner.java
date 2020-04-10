package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;  //always need to copy paste this import file

@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "F:/Automation/AutomationWorkspace/cucumber_project/src/test/java/features/Contact.feature", //the path of the feature files
			glue={"stepDefination"} ,//the path of the step definition files	
			monochrome = true,
			strict = false,
			dryRun =false					
   // format= {"pretty","html:test-output","junit:junit-xml/cucumber.xml"}     // generate different types of reporting
//			monochrome = true, //display the console output in a proper readable format
//			strict = true, //it will check if any step is not defined in step definition file
//			dryRun = false //to check the mapping is proper between feature file and step def file
//			//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}			
			)
	 
	public class TestRunner {
	 
	
	

}

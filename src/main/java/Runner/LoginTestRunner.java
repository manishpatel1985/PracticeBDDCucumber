package Runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Selenium\\manishSelenium\\manishSelenium\\FreeCrmBDDFrameWork\\src\\main\\java\\Features\\deals.feature",
		glue= {"stepDefinations"},
		
		monochrome=true,
		strict=true,
		dryRun=false )




public class LoginTestRunner {

}

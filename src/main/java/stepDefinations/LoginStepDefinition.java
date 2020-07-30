package stepDefinations;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^user launch the browser$")
	public void user_launch_the_browser() {
	    driver= new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.manage().deleteAllCookies();
	    driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
	    driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		}

	@Then("^user enters url$")
	public void user_enters_url() throws Throwable {
		driver.get("https://ui.freecrm.com/");
	   
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credintial) {
		
	}

	@Then("^user click on login button$")
	public void user_click_on_login_button() {
	   
	}

	@Then("^user will on home page$")
	public void user_will_on_home_page() throws Throwable {
	   
	}

	@Then("^user clicks on new dealspage$")
	public void user_clicks_on_new_dealspage()  {
	  
	}

	@Then("^user enters deals details$")
	public void user_enters_deals_details(DataTable arg1)  {
	   
	}

	@Then("^user close the browser$")
	public void user_close_the_browser()  {
	  
	}
	
	

}

package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class webdriverStepdefinition {
	
	@Given("user is already on Login Page")
	public void user_is_already_on_Login_Page() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("IT is GIVEN STEP");
		System.setProperty("webdriver.gecko.driver","D:\\Users\\NEW\\eclipse-workspace\\T2Maven\\src\\test\\resources\\geckodriver.exe" ); 
		WebDriver wd = new FirefoxDriver();
		wd.get("https://www.google.com");
		wd.close();	   
	}

	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("IT is WHEN STEP");
	   
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("IT is LAST STEP");
	    
	}

}

/*
 * package stepDefinitions;
 * 
 * import org.openqa.selenium.By; import org.openqa.selenium.JavascriptExecutor;
 * import org.openqa.selenium.Point; import org.openqa.selenium.WebDriver;
 * import org.openqa.selenium.WebElement; import
 * org.openqa.selenium.chrome.ChromeDriver; import
 * org.openqa.selenium.firefox.FirefoxDriver; import
 * org.openqa.selenium.interactions.Actions;
 * 
 * import cucumber.api.java.en.Given; import cucumber.api.java.en.Then; import
 * cucumber.api.java.en.When; import junit.framework.Assert;
 * 
 * public class LoginStepDefinition {
 * 
 * WebDriver driver;
 * 
 * 
 * @Given("user is already on Login Page") public void
 * user_already_on_login_page(){ System.setProperty("webdriver.gecko.driver",
 * "D:\\Users\\NEW\\eclipse-workspace\\T2Maven\\src\\test\\resources\\geckodriver.exe"
 * ); //WebDriver wd = new ChromeDriver(); WebDriver wd = new FirefoxDriver();
 * wd.get("https://www.google.com"); }
 * 
 * 
 * @When("title of login page is Free CRM") public void
 * title_of_login_page_is_free_CRM(){ String title = driver.getTitle();
 * System.out.println(title); }
 * 
 * @Then("^user enters username and password$") public void
 * user_enters_username_and_password() throws Throwable { // Write code here
 * that turns the phrase above into concrete actions }
 * 
 * 
 * 
 * 
 * 
 * }
 */
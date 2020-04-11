package stepDefination;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class ContactStepDefination {

	 WebDriver driver;

	@Given("^user is already on Login page$")
	public void user_is_already_on_Login_Page() {
		//WebDriver driver = null;
		WebDriverManager.chromedriver().version("80.0.3987.106").setup();
		System.getProperty("webdriver.chrome.driver", "F:\\Downloads\\chromedriver801.exe");
		driver = new ChromeDriver();
		driver.get("https://freecrm.co.in/");
		// WebDriverWait wait = new WebDriverWait(driver, 10);
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
	}

	@When("^Title of login page is Cogmento CRM$")
	public void title_of_login_page_is_Cogmento_CRM() {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		String title = null;
		try {
			title = driver.getTitle();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(title);
		Assert.assertEquals("Free CRM #1 cloud software for any business large or small", title);
	}

		@Then("^User enters \"(.*)\" and \"(.*)\"$")
		public void user_enters_username_and_password(String username, String password) {
			driver.findElement(By.xpath("//span[contains(text(),'Log In')]")).click();
			driver.findElement(By.name("email")).sendKeys(username);
			driver.findElement(By.name("password")).sendKeys(password);
			
			}

	@Then("^User clicks on Login button$")
	public void user_clicks_on_Login_button() {
		WebElement loginBtn = driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginBtn);

	}

	@Then("^User is on HomePage$")
	public void user_is_on_HomePage() {
		String title = driver.getTitle();
		System.out.println("Home page title::" + title);
		Assert.assertEquals("Cogmento CRM", title);
		
	}
	
	@Then("^user moves to new contact page$")
	public void user_moves_to_new_contact_page() throws InterruptedException {
	//	driver.switchTo().frame("mainpanel");
//		Actions action = new Actions(driver);
//		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
//		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
//		
		driver.findElement(By.xpath("//span[contains(text(),'Contacts')]")).click();
		Thread.sleep(10000);
	
		
	}
	   
	@Then("^user enters contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details_and_and(String firstname, String lastname, String position) throws InterruptedException {
		driver.findElement(By.xpath("//button[contains(text(),'New')]")).click();
		Thread.sleep(10000);
//		driver.findElement(By.xpath("(//*[@class='ui label label right corner']//following-sibling::input)[1]")).sendKeys(firstname);
//		driver.findElement(By.xpath("(//div[@class='ui label label right corner']//following-sibling::input)[2]")).sendKeys(lastname);
//		driver.findElement(By.xpath("//*[@id='ui']/div/div[2]/div[2]/div/div[2]/form/div[10]/div[2]/div/div/input")).sendKeys(position);	
//
//		driver.findElement(By.xpath("//button[@class='ui linkedin button' ]")).click();
//	    
	}

	@Then("^Close the browser$")
	public void close_the_browser()  {
		driver.quit();	

}
}

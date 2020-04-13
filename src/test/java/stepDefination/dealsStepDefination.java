//package stepDefination;
//
//
//import java.util.List;
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.support.ui.ExpectedConditions;
//import org.openqa.selenium.support.ui.WebDriverWait;
//
//import cucumber.api.DataTable;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import io.github.bonigarcia.wdm.WebDriverManager;
//import junit.framework.Assert;
//
//@SuppressWarnings("deprecation")
//public class dealsStepDefination {
//
//	 WebDriver driver;
//
//	@Given("^user is already on Login page$")
//	public void user_is_already_on_Login_Page() {		
//		WebDriverManager.chromedriver().version("80.0.3987.106").setup();
//		System.getProperty("webdriver.chrome.driver", "F:\\Downloads\\chromedriver801.exe");
//		driver = new ChromeDriver();
//		driver.get("https://freecrm.co.in/");		
//		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
//	}
//
//	@When("^Title of login page is Cogmento CRM$")
//	public void title_of_login_page_is_Cogmento_CRM() {
//		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
//		String title = null;
//		try {
//			title = driver.getTitle();
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		System.out.println(title);
//		Assert.assertEquals("Free CRM #1 cloud software for any business large or small", title);
//	}
//
//	@Then("^User enters username and password$")
//	public void user_enters_username_and_password(DataTable credentials){
//		driver.findElement(By.xpath("//span[contains(text(),'Log In')]")).click();
//	  List<List<String>> data = credentials.raw();	  
//	  driver.findElement(By.name("email")).sendKeys(data.get(0).get(0));
//	  driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
//	    
//	}
//
//	@Then("^User clicks on Login button$")
//	public void user_clicks_on_Login_button() {
//		WebElement loginBtn = driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']"));
//		JavascriptExecutor js = (JavascriptExecutor) driver;
//		js.executeScript("arguments[0].click();", loginBtn);
//
//	}
//
//	@Then("^User is on HomePage$")
//	public void user_is_on_HomePage() {
//		String title = driver.getTitle();
//		System.out.println("Home page title::" + title);
//		Assert.assertEquals("Cogmento CRM", title);		
//	}
//	
//	
//	@Then("^user moves to new deal page$")
//	public void user_moves_to_new_deal_page() throws Throwable {
//		driver.findElement(By.xpath("//span[contains(text(),'Deals')]")).click(); 	
//		driver.findElement(By.xpath("//button[contains(text(),'New')]")).click(); 	
//		
//	}
//	   
//	@Then("^user enters deal details$")
//	public void user_enters_deal_details(DataTable dealdata) throws InterruptedException {
//		List<List<String>> dealsValue = dealdata.raw();
//		driver.findElement(By.name("title")).sendKeys(dealsValue.get(0).get(0));		
//		driver.findElement(By.name("amount")).sendKeys(dealsValue.get(0).get(1));	
//		driver.findElement(By.name("probability")).sendKeys(dealsValue.get(0).get(2));
//		driver.findElement(By.name("commission")).sendKeys(dealsValue.get(0).get(3));	
//		driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
//		Thread.sleep(5000);	    
//			
//	}
//
//	@Then("^Close the browser$")
//	public void close_the_browser()  {
//		driver.quit();	
//
//}
//}

package stepDefinitions;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import cucumber.api.java.en.And;
import org.apache.commons.exec.OS;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;


public class DealStepDefnition {

	WebDriver driver;
	String finalValue;
	String os = System.getProperty("os.name").toLowerCase();

	@Given("^I add four different products to my wishlist$")
	public void iAddFourDifferentProductsToMyWishlist() throws InterruptedException {
		if(os.contains("windows")){
			System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
			driver = new ChromeDriver();
		}
		else if(os.contains("mac")){
			System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver");
			driver = new ChromeDriver();
		}
		driver.manage().window().maximize();
		driver.get("https://testscriptdemo.com/");
		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[text()='Accept all']")).click();
		for (int i = 1; i <= 4; i++) {
			driver.findElement(By.xpath("//*[@data-title='Add to wishlist']")).click();
			Thread.sleep(3000);
		}
	}

	@When("^I view my wishlist table$")
	public void iViewMyWishlistTable() {
		driver.findElement(By.xpath("//*[@data-tooltip='Wishlist']")).click();
		String assertText = driver.findElement(By.xpath("//*[h2='My wishlist']")).getText();
		Assert.assertEquals("My wishlist", assertText);
	}

	@Then("^I find total four selected items in my Wishlist$")
	public void iFindTotalFourSelectedItemsInMyWishlist() {
		int expNum = driver.findElements(By.xpath("//*[@title=\"Remove this product\"]")).size();
		Assert.assertEquals(4, expNum);
	}

	@When("^I search for lowest price product$")
	public void iSearchForLowestPriceProduct() throws InterruptedException {
		List<String> lst = new ArrayList<String>();
		List<String> newLst = new ArrayList<String>();

		String regexr = "\\d+\\.\\d+";
		for (int i = 1; i < 5; i++) {
			String items = driver.findElement(By.xpath("(//td[@class='product-price'])[" + i + "]")).getText();
			lst.add(items);
		}
		for (String str : lst) {
			Pattern pattern = Pattern.compile(regexr);
			Matcher matcher = pattern.matcher(str);
			while (matcher.find()) {
				newLst.add(matcher.group());
			}
			System.out.println(newLst);
		}
		finalValue = Collections.min(newLst);
		driver.findElement(By.xpath("//*[contains(text(),'" + finalValue + "')]//following::td[2]")).click();
		Thread.sleep(3000);
	}

	@Then("^I am able to verify the item in my cart$")
	public void iAmAbleToVerifyTheItemInMyCart() {
		driver.findElement(By.xpath("//*[@data-tooltip='Cart']")).click();
		String expVal = driver.findElement(By.xpath("//td[@class='product-price']")).getText().replace("£", "");
		Assert.assertEquals(expVal, finalValue);

	}

	@Then("^I close the browser$")
	public void iCloseTheBrowser() throws InterruptedException {
		driver.close();
	}

}
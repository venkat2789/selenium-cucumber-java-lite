package com.google.steps;

import java.time.Duration;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.manager.SeleniumManager;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinitions {

	private WebDriver driver;
	private WebDriverWait wait;
	private String url = "https://www.google.com";
	private By searchBar = By.xpath("//*[@title='Search']");
	private By searchResult = By.cssSelector("div.SzZmKb");

	@Before
	public void browserSetup() {
		SeleniumManager.getInstance();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		wait = new WebDriverWait(driver, Duration.ofSeconds(15));
	}

	@Given("I am on Google page")
	public void i_am_on_google_page() {
		driver.get(url);
	}

	@When("I enter search criteria")
	public void i_enter_search_criteria() {
		WebElement search = driver.findElement(searchBar);
		search.click();
		search.sendKeys("Apple");
		search.sendKeys(Keys.ENTER);
	}

	@When("I enter search {string}")
	public void i_enter_search_criteria(String criteria) {
		WebElement search = driver.findElement(searchBar);
		search.click();
		search.sendKeys(criteria);
		search.sendKeys(Keys.ENTER);
	}

	@When("I enter search criteria - multi")
	public void i_enter_search_criteria(DataTable table) {
		WebElement search = driver.findElement(searchBar);
		List<String> criteria = table.asList();

		search.click();
		search.sendKeys(criteria.get(0));
		search.sendKeys(" " + criteria.get(1));
		search.sendKeys(Keys.ENTER);
	}

	@Then("I should be taken to search results")
	public void i_should_be_taken_to_search_results() {
		WebElement result = driver.findElement(searchResult);

		wait.until(ExpectedConditions.visibilityOf(result));
		System.out.println("Output: " + result.getText());

	}

	@After
	public void closeBrowser() {
		driver.quit();
	}

}

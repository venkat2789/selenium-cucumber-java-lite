package com.google.runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(glue = {
		"com.google.steps" }, features = "src/test/resources", /* tags = { "@FirstTest" }, */ plugin = { "pretty",
				"html:target/cucumber-reports" })

public class RunCucumberTests {

}

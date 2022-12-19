# selenium-cucumber-java-lite

A light-weight selenium-cucumber-java based UI automation framework following BDD approach, providing basic implementation of components but flexible enough to customize for specific needs.

Tip: Install Cucumber plugin for your respective IDE e.g. Eclipse or IntelliJ for making, working with cucumber files easier.

Below are the tech-stack used:

Maven
- manage dependencies and plugins, integrate with CI/CD tools

Selenium
- latest version 4 as of Dec 2022 - 4.7.2
- all dependencies updated
- uses SeleniumManager for browser invocation

Cucumber
- version 5.0.0
- follows all best practices and folder structure
- includes 3 examples - simple scenario, scenario with outline, scenario with data table, usage of tags etc.

Tests
- separate driver config - uses SeleniumManager
- multi data using data table and exmaples
- multi browser (using SeleniumManager)

GIT
- integration options

Jenkins
- integration options

Reports
- native cucumber and surefire-reports included
- can be extended to other reports

const fs = require("fs");
const { Builder, Browser, By } = require("selenium-webdriver");

(async () => {
  // Using the WebDriver create an instance of the Chrome browser
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  // Using the WebDriver, navigate to a website using the url
  await driver.get("127.0.0.1:5500/index.html");

  let submitBtn;
  let mainBQ;
  let mainBQText;
  let userNameField;
  let passwordField;
  const SCREEN_SHOT_NAME = "screenshot.png";

  // Using the WebDriver, find an html element with a id = "userName"
  userNameField = await driver.findElement(By.id("userName"));

  // Using the WebDriver, enter gbc to the textbox
  userNameField.sendKeys("gbc");

  // Using the WebDriver, find an html element with a id = "password"
  passwordField = await driver.findElement(By.id("password"));

  // Using the WebDriver, enter gbc to the textbox
  passwordField.sendKeys("gbc");

  // Using the WebDriver, find an html element with a id = "password"
  submitBtn = await driver.findElement(By.id("submitBtn"));

  // Using the WebDriver, click on the submit button
  submitBtn.click();

  // Using the WebDriver, find an html element with a id = "mainBQ"
  mainBQ = await driver.findElement(By.id("mainBQ"));

  // Using the WebDriver, get the inner text of the html element
  mainBQText = await mainBQ.getText();
  console.log(mainBQText);

  // Take a screenshot
  let image = await driver.takeScreenshot();
  // Save the screenshot to a file
  fs.writeFileSync(SCREEN_SHOT_NAME, image, "base64");

  // Close the browser
  await driver.quit();
})();

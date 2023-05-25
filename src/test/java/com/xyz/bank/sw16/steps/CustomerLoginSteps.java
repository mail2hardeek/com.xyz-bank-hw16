package com.xyz.bank.sw16.steps;

import com.xyz.bank.sw16.pages.CustomerLoginPage;
import com.xyz.bank.sw16.pages.CustomerPage;
import com.xyz.bank.sw16.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class CustomerLoginSteps {
    @Given("^User is on homepage$")
    public void userIsOnHomepage() {


    }

    @When("^User Clicks on Customer Login Tab$")
    public void userClicksOnCustomerLoginTab() {
        new HomePage().clickOnCustomerLogin();
    }

    @And("^User Search customer that you created\\.$")
    public void userSearchCustomerThatYouCreated() {
        new CustomerPage().selectCustomer("Ron Weasly ");
    }

    @And("^User Clicks on Login Button$")
    public void userClicksOnLoginButton() {
        new CustomerPage().clickOnLogin();
    }

    @Then("^User Verifies Your Name text displayed\\.$")
    public void userVerifiesYourNameTextDisplayed() {
        Assert.assertEquals(new CustomerLoginPage().getMessage(), "Ron Weasly");
    }

    @And("^User verifies Logout text displayed$")
    public void userVerifiesLogoutTextDisplayed() {
        Assert.assertEquals(new CustomerLoginPage().getMessage1(), "Logout");
    }

    @Then("^User Clicks on Logout button$")
    public void userClicksOnLogoutButton() {
        new CustomerLoginPage().clickOnOut();
    }

    @And("^User verifies Name text displayed$")
    public void userVerifiesNameTextDisplayed() {
        Assert.assertEquals(new CustomerLoginPage().getMessage2(), "Your Name :");
    }
}


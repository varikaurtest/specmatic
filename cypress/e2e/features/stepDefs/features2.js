import {Given, When, Then } from
	"cypress-cucumber-preprocessor/steps"
    
Given("I access the home page", ()=> {
    cy.visit("https://www.quickbase.com/");
})

When("I access the home page", ()=> {
    cy.visit("https://www.quickbase.com/");
})

Then("I access the home page", ()=> {
    cy.visit("https://www.quickbase.com/");
})
import {Given, When, Then } from "cypress-cucumber-preprocessor/steps"
    
Then("THEN CHECK", ()=> {
    cy.log("I am in then from a random file")
})
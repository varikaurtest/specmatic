import {Given, When, Then } from "cypress-cucumber-preprocessor/steps"
    
Given("GIVEN CHECK", ()=> {
    cy.log("GIVNR");
});
And( "AND CHECK", ()=> {
    cy.log("AND THING")
});
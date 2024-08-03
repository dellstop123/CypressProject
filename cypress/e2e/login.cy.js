///<require='cypress'>

import LoginPage from '../support/page_object/loginPage';

describe('template spec', () => {

  before(function(){
    cy.fixture('example').then((data) => {
      this.data = data;

    })
  })
  

  it('Login User with InValid Username and Password', function (){
    
    const loginPage = new LoginPage();
    loginPage.visit()
    // cy.visit('https://guneet.pythonanywhere.com')
  this.data.forEach(element => {
    loginPage.fillUsername(element.UserName)
    loginPage.fillPassword("India@123")
    loginPage.submit()
    // cy.get("#username").type(element.UserName)
    // cy.get("#password").type("India@123")
    // cy.get('input[type="submit"]').click()
    cy.get("p[class='error']").contains("Invalid username or password.")

  });
   
  })
  it('Login User with Valid Username and Password', () => {
    cy.visit('https://guneet.pythonanywhere.com')

  
    cy.get("#username").type("Malathi")
    cy.get("#password").type("Malathi@123")
    cy.get('input[type="submit"]').click()
    cy.title().should('eq',"GitHub Open Source Projects")
  })
})
///<require='cypress'>

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
  });

describe('template spec', () => {

  before(function(){
    cy.fixture('example').then((data) => {
      this.data = data;

    })
  })
  

  it('Login User with InValid Username and Password', function (){
    
    cy.visit('https://guneet.pythonanywhere.com')
  this.data.forEach(element => {
    
    cy.get("#username").type(element.UserName)
    cy.get("#password").type("India@123")
    cy.get('input[type="submit"]').click()
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
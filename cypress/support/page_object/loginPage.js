class LoginPage{

visit(){
    cy.visit('https://guneet.pythonanywhere.com')
}

fillUsername(username){

    cy.get("#username").type(username)
}
fillPassword(password){

    cy.get("#password").type(password)
}
submit(){
    cy.get("input[type='submit']").click()
}
}

export default LoginPage;
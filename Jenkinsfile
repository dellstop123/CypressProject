pipeline {
  agent any


  tools {nodejs "node"}


  environment {
      CHROME_BIN = '/bin/google-chrome'
   
  }
  stages {
      stage('Dependencies') {
          steps {
              sh 'npm i'
              sh 'npm i cypress'
              sh 'npm install cypress-parallel'
          }
      }
      stage('e2e Tests') {

                 steps {
            //    sh 'npm run cy:parallel',
                  sh 'npx cypress run --reporter mochawesome \ 
                   --reporter-options reportDir="cypress/results",overwrite=false,html=true,json=false'
                 }
              }
      stage('Deploy') {
          steps {
              echo 'Deploying....'
          }
      }
  }
}

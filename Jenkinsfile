pipeline {
  agent any


  tools {nodejs "Node"}


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
               sh 'npm run cypress:ci'
                 }
              }
      stage('Deploy') {
          steps {
              echo 'Deploying....'
          }
      }
  }
}

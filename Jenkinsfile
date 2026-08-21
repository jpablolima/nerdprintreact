pipeline {

       // label 'nerdprint'
        agent any

    stages {
        stage ("build") {
            steps {
            echo "building the application..."
            sh 'node -v'
            sh  "ls  -la"
            }
        }
        stage ("Check old image")
            steps {
            echo "Check old image Docker..."
            sh "docker imagens | grep nerdprint"
            }
    }
}

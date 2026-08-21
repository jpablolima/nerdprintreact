pipeline {

       // label 'nerdprint'
        agent any

    stages {
        stage ("build") {
            steps {
            echo "building the application..."
            sh 'node -v'
           // sh  "ls  -la"
            }
        }
        stage ("Check old image") {
            steps {
            echo "Check the application's old image..."
            sh "docker images | grep nerdprint"
            }
        }
        stage ("Removing the application's old image") {
            steps {
            echo "Removing the application's old image"
            sh "docker rmi -f nerdprint:latest"
            }
        }
        stage ("Creating new application image...") {
            steps{
            echo "creating new application image"
            sh "docker build -t  nerdprint:latest ."
            }
        }
    }
}

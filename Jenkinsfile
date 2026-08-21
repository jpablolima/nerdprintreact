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
        stage ("Check old image") {
            steps {
            echo "Check the application's old image..."
            sh "docker images | grep nerdprint"
            }
        }
    }
}

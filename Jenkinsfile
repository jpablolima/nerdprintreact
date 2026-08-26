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
                sh "docker images | grep nerdprint:latest"
            }
        }
        stage ("Removing the application's old image") {
            steps {
                echo "Removing the application's old image"
               // sh "docker rmi -f nerdprint:latest"
            }
        }
        stage ("Creating new application image...") {
            steps{
                echo "creating new application image"
                sh "docker build -t  nerdprint:latest ."
                sh "docker images | grep nerdprint:latest "
            }
        }
        stage("Upload new image in kind...") {
        steps {
            echo "Checking old image on kind"
            sh "docker exec devops-control-plane crictl images | grep nerdprint"
            echo "Loading new image into Kind..."
            sh "kind load docker-image nerdprint:latest --name devops"
            echo "Checking image on Kind..."
            sh "docker exec devops-control-plane crictl images | grep nerdprint"
          }
        }
        stage("upload deployment nerd print") {
        steps {
            echo "upload deployment nerd print"
            sh """
                kubectl rollout restart deployment/nerdprint -n nerdprint
                kubectl rollout status deployment/nerdprint -n nerdprint --timeout=120s"
               """

            }
        }
    }
}

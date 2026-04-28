pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Image') {
            steps {
                bat "docker build -t arunbalaji6768/devops-app:latest ."
            }
        }
        stage('Push to Docker Hub') {
            steps {
                bat "docker login -u ${DOCKERHUB_CREDENTIALS_USR} -p ${DOCKERHUB_CREDENTIALS_PSW}"
                bat "docker push arunbalaji6768/devops-app:latest"
            }
        }
        stage('Deploy & Automated Switch') {
            steps {
                // Deploy both environments
                bat "kubectl apply -f deployment.yaml --validate=false"
                
                // AUTOMATION: Switch the service to point to Green
                bat "kubectl patch service devops-app-service -p \"{\\\"spec\\\":{\\\"selector\\\":{\\\"version\\\":\\\"green\\\"}}}\""
                
                echo "Traffic switched to GREEN environment successfully!"
            }
        }
    }
}

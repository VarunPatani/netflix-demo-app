pipeline {
    agent any

    environment {
        IMAGE_NAME = "netflix-ci-demo"
        IMAGE_TAG = "latest"
    }

    stages {
        stage('📦 Checkout Code') {
            steps {
                echo "Cloning repository..."
                checkout scm
            }
        }

        stage('🐳 Build Docker Image') {
            steps {
                echo "Building Docker image..."
                script {
                    bat "docker build -t %IMAGE_NAME%:%IMAGE_TAG% ."
                }
            }
        }

        stage('✅ Run Tests') {
            steps {
                echo "Running tests (simulated)..."
                bat "echo All tests passed!"
            }
        }

        stage('🚀 Trigger Deploy (Simulated)') {
            steps {
                echo "Triggering deployment (placeholder)..."
                bat "echo Deployment triggered!"
            }
        }
    }

    post {
        success {
            echo '✅ CI Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Check logs for details.'
        }
    }
}

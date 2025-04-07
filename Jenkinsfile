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
                    sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
                }
            }
        }

        stage('✅ Run Tests') {
            steps {
                echo "Running tests (simulated)..."
                // Replace with actual test command if you have one
                sh "echo All tests passed!"
            }
        }

        stage('📤 Push to Registry (Optional)') {
            when {
                expression { return false } // set to true if you're using Docker Hub
            }
            steps {
                echo "Pushing image to Docker registry..."
                // Example: docker push your-dockerhub-user/${IMAGE_NAME}:${IMAGE_TAG}
            }
        }

        stage('🚀 Trigger Deploy (Spinnaker or Simulated)') {
            steps {
                echo "Triggering deployment..."
                // Simulate trigger or add webhook to Spinnaker here
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

import groovy.json.JsonOutput

pipeline {
  agent any

  options {
    ansiColor('xterm')
  }

  stages {
    stage('build') {
      steps {
        script {
          def awsRegion = env.AWS_REGION
          def targetS3Bucket = env.TARGET_S3_BUCKET

          dir ('./website') {
            sh "yarn"
            sh "yarn build"
            sh "aws s3 sync --region \"${awsRegion}\" --acl public-read --cache-control \"no-cache\" --delete ./build/hubs-docs \"s3://${targetS3Bucket}\""
          }
        }
      }
    }
  }
}
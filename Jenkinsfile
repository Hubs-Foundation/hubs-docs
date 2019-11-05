import groovy.json.JsonOutput

// From https://issues.jenkins-ci.org/browse/JENKINS-44231

// Given arbitrary string returns a strongly escaped shell string literal.
// I.e. it will be in single quotes which turns off interpolation of $(...), etc.
// E.g.: 1'2\3\'4 5"6 (groovy string) -> '1'\''2\3\'\''4 5"6' (groovy string which can be safely pasted into shell command).
def shellString(s) {
  // Replace ' with '\'' (https://unix.stackexchange.com/a/187654/260156). Then enclose with '...'.
  // 1) Why not replace \ with \\? Because '...' does not treat backslashes in a special way.
  // 2) And why not use ANSI-C quoting? I.e. we could replace ' with \'
  // and enclose using $'...' (https://stackoverflow.com/a/8254156/4839573).
  // Because ANSI-C quoting is not yet supported by Dash (default shell in Ubuntu & Debian) (https://unix.stackexchange.com/a/371873).
  '\'' + s.replace('\'', '\'\\\'\'') + '\''
}

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
            sh "aws s3 sync --region \"${awsRegion}\" --acl public-read --cache-control \"no-cache\" --delete ./build/hubs-docs \"${baseAssetsPath}\""
          }
        }
      }
    }
  }
}
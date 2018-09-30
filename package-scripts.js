// const npsUtils = require('nps-utils')

module.exports = {
  scripts: {
    compodoc: {
      default: 'compodoc -p tsconfig.json -d docs',
      serve: 'compodoc -s'
    },
    lint: {
      default: 'ng lint',
      js: 'eslint *.js',
      all: 'eslint *.js && ng lint'
    },
    build: {
      default: 'ng build && gulp',
      ci: 'ng build sample && ng build sample --prod && ng build && gulp'
    },
    test: {
      default: 'ng test',
      e2e: 'ng e2e',
      ci: 'ng test sample -c ci'
    },
    e2e: {
      default: 'ng e2e',
      ci: 'ng e2e -c ci && ng e2e -c ci-prod'
    },
    ci: 'nps lint.all && nps build.ci && nps test.ci && nps e2e.ci'
  }
}

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
      sample: 'ng build sample --prod',
      ci: 'nps build && nps build.sample'
    },
    test: {
      default: 'ng test',
      e2e: 'ng e2e',
      ci: 'ng test ngx-dom-wrappers -c ci && ng test sample -c ci'
    },
    e2e: {
      default: 'ng e2e',
      ci: 'ng e2e -c ci-prod'
    },
    ci: 'nps lint.all && nps build.ci && nps test.ci && nps e2e.ci'
  }
}

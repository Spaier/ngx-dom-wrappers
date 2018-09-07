const npsUtils = require('nps-utils')

module.exports = {
  compodoc: {
    default: 'compodoc -p tsconfig.json -d docs',
    serve: 'compodoc -s'
  },
  build: {
    default: 'ng build'
  },
  test: {
    default: 'ng test',
    ci: 'ng test -c ci'
  }
}

const npsUtils = require('nps-utils')

module.exports = {
  scripts: {
    compodoc: {
      default: 'compodoc -p tsconfig.json -d docs',
      serve: 'compodoc -s'
    },
    build: 'ng build && gulp',
    test: {
      default: 'ng test',
      ci: 'ng test -c ci'
    }
  }
}

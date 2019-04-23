'use strict'

// Local dependencies
const healthcheck = require('./healthcheck')
const index = require('./index')
const somethingsWrong = require('./somethings-wrong')
const help = require('./help')
const feedback = require('./feedback')
const success = require('./success')
const features = require('./features')
const roadmap = require('./roadmap')
const security = require('./security')
const psp = require('./payment-service-provider')
const directDebit = require('./direct-debit')
const paymentLinks = require('./payment-links')
const getStarted = require('./get-started')

// Export
module.exports.bind = app => {
  app.use(healthcheck.router)
  app.use(index.router)
  app.use(somethingsWrong.router)
  app.use(help.router)
  app.use(feedback.router)
  app.use(success.router)
  app.use(features.router)
  app.use(roadmap.router)
  app.use(security.router)
  app.use(psp.router)
  app.use(directDebit.router)
  app.use(paymentLinks.router)
  app.use(getStarted.router)
}

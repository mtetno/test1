import * as log from 'loglevel'
import remote from 'loglevel-plugin-remote'

log.enableAll()

const developmentLogger = {
  info: (msg, obj) => {
    log.info(obj)
    log.info(msg)
  },
  warn: (msg, obj) => {
    log.warn(obj)
    log.warn(msg)
  },
  error: (msg, obj) => {
    log.error(obj)
    log.error(msg)
  },
}

const productionLogger = {
  info: (msg, obj) => {
    log.error(obj)
    log.error(msg)
  },
}

const getDevelopmentLogger = () => {
  return developmentLogger
}

const getProdLogger = () => {
  const customJSON = (logger) => ({
    data: logger.message,
  })
  remote.apply(log, {
    url: 'http://localhost:4200/api/remoteLogger',
    method: 'POST',
    format: customJSON,
  })
  return productionLogger
}

const Logger =
  process.env.REACT_APP_ENVIRONMENT === 'development'
    ? getDevelopmentLogger()
    : getProdLogger()

export default Logger

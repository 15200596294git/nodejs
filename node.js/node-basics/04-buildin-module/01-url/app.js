const url = require('url')
const log4js = require('log4js')
// const logger = log4js.getLogger()

log4js.configure({
  appenders: {
    cheese: {
      type: 'file',
      filename: 'cheese.log'
    }
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'error'
    }
  }
})
const logger = log4js.getLogger('cheese')
logger.level = 'debug'

const urlString = 'https://www.baidu.com:443/path/inde.html?id=2#tag=3'

logger.debug(url.parse(urlString))

const urlObj = {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:443',
  port: '443',
  hostname: 'www.baidu.com',
  hash: '#tag=3',
  search: '?id=2',
  query: 'id=2',
  pathname: '/path/inde.html',
  path: '/path/inde.html?id=2',
  href: 'https://www.baidu.com:443/path/inde.html?id=2#tag=3'
}

logger.debug(url.format(urlObj))
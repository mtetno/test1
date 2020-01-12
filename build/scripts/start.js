const logger = require('../lib/logger');

logger.info('Starting server...');
require('../../server/main').listen(2200, () => {
  logger.success('Server is running at http://localhost:2200');
});

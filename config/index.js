'use strict'

module.exports = {
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  PAYLOAD_MAX_SIZE: process.env.PAYLOAD_MAX_SIZE || 1048576,
  TIMEOUT_SERVER: process.env.TIMEOUT_SERVER || 60000 * 2,
  TIMEOUT_SOCKET: process.env.TIMEOUT_SOCKET || 60000 * 2,
  UPLOADS_FOLDER: process.env.UPLOADS_FOLDER || process.cwd() + '/uploads/' 
}

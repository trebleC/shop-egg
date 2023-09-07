/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    mongoose: {
      url: process.env.EGG_MONGODB_URL || 'mongodb://0.0.0.0:27017/shop',
      options: {
        server: {
          poolSize: 27017,
        },

      }
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1691052434016_8196';

  // add your middleware config here
  config.middleware = [];
  config.security = {
    csrf:{
      enable:false
    }
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  //附件地址
  config.attachmentPath = 'app/public/upload'
  config.downloadPath = '/public/upload'


// config/config.default.js
const path = require('path')
config.static = {
  prefix: '/',// 将静态资源前缀改为'/'（默认是 '/public')
  dir: [
      path.join(__dirname, '../app/public'), 
      path.join(__dirname, '../html')
  ]
}


  return {
    ...config,
    ...userConfig,
  };
};

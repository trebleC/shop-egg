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
  config.downloadPath = '/upload'


// config/config.default.js
const path = require('path')
config.static = {
  prefix: '/',// 将静态资源前缀改为'/'（默认是 '/public')
  dir: [
      path.join(__dirname, '../app/public'), 
      path.join(__dirname, '../html')
  ]
}

config.cors = {
  origin: '*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
}

// config.cors = {
//   // origin: ['http://localhost'],
//   origin:function(ctx) { //设置允许来自指定域名请求
//       console.log(ctx);
//       const whiteList = ['http://www.baidu.com','http://www.hqyj.com']; 
//       let url = ctx.request.header.origin;
//       if(whiteList.includes(url)){
//           return url;
//       }
//       return 'http://localhost' //默认允许本地请求可跨域
//   },
//   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
// };



  return {
    ...config,
    ...userConfig,
  };
};

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getBaseInfo',controller.base.index)


  router.post('/upload',controller.upload.singleUpload)
  router.get('/deleteFile',controller.upload.deleteFile)


  router.post('/saveCategory',controller.category.saveCategory)
  router.get('/deleteCategory',controller.category.deleteCategory)

  router.post('/saveGood',controller.good.saveGood)
  router.get('/deleteGood',controller.good.deleteGood)
};

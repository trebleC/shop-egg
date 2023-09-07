'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.redirect('/', '/index.html', 302);
  
  router.get('/', controller.home.index);
  router.post('/user/login',controller.base.login)
  router.get('/getBaseInfo',controller.base.index)


  router.post('/upload',controller.upload.singleUpload)
  router.get('/deleteFile',controller.upload.deleteFile)


  router.post('/saveCategory',controller.category.saveCategory)
  router.get('/deleteCategory',controller.category.deleteCategory)
  router.get('/queryCategoryList',controller.category.queryCategoryList)
  router.get('/queryCategoryMap',controller.category.queryCategoryMap)

  router.post('/saveGood',controller.good.saveGood)
  router.get('/queryGood',controller.good.queryGood)
  router.get('/deleteGood',controller.good.deleteGood)
  router.get('/queryGoodList',controller.good.queryGoodList)


  router.post('/saveDemand',controller.demand.saveDemand)
  router.get('/queryDemand',controller.demand.queryDemand)
  router.get('/removeDemand',controller.demand.removeDemand)
  router.get('/queryDemandList',controller.demand.queryDemandList)

  router.post('/saveNews',controller.news.saveNews)
  router.get('/queryNews',controller.news.queryNews)
  router.get('/newsDetail',controller.news.queryNewsDetail) //前端详情页
  router.get('/removeNews',controller.news.removeNews)
  router.get('/queryNewsList',controller.news.queryNewsList)
};

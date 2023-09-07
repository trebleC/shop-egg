const { Controller } = require("egg");

class NewsController extends Controller {
  async saveNews() {
    const { ctx } = this;
    await ctx.service.news.saveNewsInfo(ctx.request.body);
    ctx.body = {
      code: 0,
      message: "success",
    };
  }

  async removeNews() {
    const { ctx } = this;
    let newsId = ctx.query.newsId;
    let { deletedCount } = await ctx.service.news.removeNews(newsId);
    if (!newsId || deletedCount == 0) {
      ctx.body = {
        code: "10400",
        message: "系统异常",
      };
      return;
    }
    ctx.body = {
      code: 0,
      message: "succes",
    };
  }

  async queryNews(){
    let newsId = this.ctx.query.newsId
    let data = await this.ctx.service.news.queryNews(newsId);
    if(data){
      this.ctx.body = {
        code: 0,
        message: "succes",
        data
      };
    }else{
      this.ctx.body = {
        code: 10400,
        message: "找不到该产品",
      };
    }

  }
  //前端详情页
  async queryNewsDetail(){
    let newsId = this.ctx.query.newsId
    let data = await this.ctx.service.news.queryNews(newsId,true);
    if(data){
      this.ctx.body = {
        code: 0,
        message: "succes",
        data
      };
    }else{
      this.ctx.body = {
        code: 10400,
        message: "找不到该产品",
      };
    }

  }


  async queryNewsList(){
    let list = await this.ctx.service.news.queryNewsList(this.ctx.query)

    this.ctx.body = {
      code:0,
      message:'success',
      data:list
    }
  }
}

module.exports = NewsController;

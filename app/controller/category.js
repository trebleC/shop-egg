const { Controller } = require('egg');

class CategoryController extends Controller {
  async saveCategory() {
    const { ctx } = this;
    let flag = await ctx.service.category.setCategory(ctx.request.body)
    if(!flag){
      ctx.body =  {
        code:10400,
        message:'fail'
      }
    }
    ctx.body =  {
      code:0,
      message:'succes',
      data:flag
    }
  }

  async deleteCategory(){
   
    
    let categoryId = this.ctx.query.categoryId
    let {deletedCount} = await this.ctx.service.category.deleteCategory(categoryId)
    if(!categoryId || deletedCount==0){
      this.ctx.body = {
        code:'10400',
        message:'系统异常'
      }
      return
    }
    this.ctx.body =  {
      code:0,
      message:'succes'
    }
  }
}

module.exports = CategoryController;

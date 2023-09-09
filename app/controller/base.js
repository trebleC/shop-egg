const { Controller } = require('egg');

class BaseController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body =  ctx.service.base.getName()||'hi, egg...11';
  }
  async login() {
    const { ctx } = this;
    let info = ctx.request.body
    if(info.username == 'admin' && info.password == 'admin123456A!' || info.username == 'mng' && info.password == 'mng0909A!'){
      ctx.body =  {
        code:0,
        token:new Date().getTime()
      }
    }else{
      ctx.body =  {
        code:10400,
        message:'账号或密码有误'
      }
    }
   
  }
}

module.exports = BaseController;

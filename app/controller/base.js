const { Controller } = require('egg');

class BaseController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body =  ctx.service.base.getName()||'hi, egg...11';
  }
  async login() {
    const { ctx } = this;
    ctx.body =  {
      code:0,
      token:'123'
    }
  }
}

module.exports = BaseController;

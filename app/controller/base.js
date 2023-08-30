const { Controller } = require('egg');

class BaseController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body =  ctx.service.base.getName()||'hi, egg...11';
  }
}

module.exports = BaseController;

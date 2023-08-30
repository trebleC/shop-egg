const { Controller } = require("egg");

class GoodController extends Controller {
  async saveGood() {
    const { ctx } = this;
    await ctx.service.good.saveGoodInfo(ctx.request.body);
    ctx.body = {
      code: 0,
      message: "success",
    };
  }

  async deleteGood() {
    const { ctx } = this;
    let goodId = ctx.query.goodId;
    let { deletedCount } = await ctx.service.good.deleteGood(goodId);
    if (!goodId || deletedCount == 0) {
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
}

module.exports = GoodController;

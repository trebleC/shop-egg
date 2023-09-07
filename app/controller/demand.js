const { Controller } = require("egg");

class DemandController extends Controller {
  async saveDemand() {
    const { ctx } = this;
    await ctx.service.demand.saveDemandInfo(ctx.request.body);
    ctx.body = {
      code: 0,
      message: "success",
    };
  }

  async removeDemand() {
    const { ctx } = this;
    let demandId = ctx.query.demandId;
    let { deletedCount } = await ctx.service.demand.removeDemand(demandId);
    if (!demandId || deletedCount == 0) {
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

  async queryDemand(){
    let demandId = this.ctx.query.demandId
    let data = await this.ctx.service.demand.queryDemand(demandId);
    if(data.goodId){
      let good =  await this.ctx.service.good.queryGood(data.goodId);
      data.good = good
    }
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


  async queryDemandList(){
    let list = await this.ctx.service.demand.queryDemandList(this.ctx.query);
    // console.log(await this.ctx.service.good.queryGood(12))
    // let goodInfoArr = []
    // list.map(item =>  {
    //   goodInfoArr.push(this.ctx.service.good.queryGood(item.goodId))
    // })
    // const getGoodData = () => {
    //   return Promise.all(goodInfoArr).then(res => { return Promise.resolve(res)}).catch(err => {})
    // }
    // let data = await getGoodData()
    // let result = []
    // list.map((item,index) => {
    //   result.push({
        
    //     good:data[index]
    //   })

    // })
    
    this.ctx.body = {
      code:0,
      message:'success',
      data:list
    }
  }
}

module.exports = DemandController;

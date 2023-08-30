const { Service } = require('egg');
const {getNextSequenceValue} = require('../../utils/utils')
class GoodService extends Service {
    
    async saveGoodInfo(goodInfo){

        if(!goodInfo.goodId){
           
            goodInfo.goodId = await getNextSequenceValue('goods',this.ctx)
            await this.ctx.model.Good.create(goodInfo)
            
            return true
        }else{
            await this.ctx.model.Good.findOneAndUpdate({goodId:goodInfo.goodId},goodInfo,{},(err,doc)=>{
         
                if(err){
                    return false
                }
            })
   
        }
        
  
        
    }

    async deleteGood(goodId){
        return await this.ctx.model.Good.deleteOne({goodId})
    }
}

module.exports = GoodService;
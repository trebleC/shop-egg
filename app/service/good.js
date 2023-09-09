const { Service } = require('egg');
const {getNextSequenceValue} = require('../../utils/utils')
class GoodService extends Service {
    
    async saveGoodInfo(goodInfo){

        if(!goodInfo.goodId){
           
            goodInfo.goodId = await getNextSequenceValue('goods',this.ctx)
            goodInfo.isHot = false
            goodInfo.createTime = new Date()
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

    async queryGood(goodId){
        return await this.ctx.model.Good.findOneAndUpdate({ goodId },
            {$inc: { views: +1 } }
         );
        // return await this.ctx.model.Good.findOne({goodId})
    }

    async getGoodList(params){
        let query = {}
        if(params.name){
            query.name = new RegExp(params.name, 'i')
        }
        if(params.categoryId || params.categoryId === 0){
            query.categoryId = params.categoryId
        }
        
        return await this.ctx.model.Good.find(query,null).find(()=>{})
        .sort({_id:-1})
    }


    async setHot(params){
        return await this.ctx.model.Good.findOneAndUpdate({goodId:params.goodId},{isHot:params.isHot})
    }
    async queryHotGoodList(params){
        let query = {
            name: new RegExp(params.name, 'i'),
            isHot:true
        }
        if(params.categoryId !== undefined){
            query.categoryId = params.categoryId
        }
        
        
        return await this.ctx.model.Good.find(query,null).find(()=>{})
        .sort({_id:-1})
    }
}

module.exports = GoodService;
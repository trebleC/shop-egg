const { Service } = require('egg');
const {getNextSequenceValue} = require('../../utils/utils')
class CategoryService extends Service {
    
    async setCategory(categoryInfo){

        if(!categoryInfo.categoryId){
           
            categoryInfo.categoryId = await getNextSequenceValue('categorys',this.ctx)
            await this.ctx.model.Category.create(categoryInfo)
            
            return true
        }else{
            await this.ctx.model.Category.findOneAndUpdate({categoryId:categoryInfo.categoryId},categoryInfo,{},(err,doc)=>{
         
                if(err){
                    return false
                }
            })
   
        }
        
  
        
    }

    async deleteCategory(categoryId){
        return await this.ctx.model.Category.deleteOne({categoryId})
    }
}

module.exports = CategoryService;
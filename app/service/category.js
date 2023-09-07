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


    async getCategoryList(){
        return await this.ctx.model.Category.find({},{
            categoryId:1,
            categoryName:1,
            desc:1,
            attachments:1,
            _id:0,
        }).find(()=>{})
        .sort({_id:-1})
        // .limit(999999)
    }

    async getCategoryMap(){
        return await this.ctx.model.Category.find({},{
            categoryId:1,
            categoryName:1,

            _id:0,
        }).find(()=>{})
        .sort({_id:-1})
        // .limit(999999)
    }
}

module.exports = CategoryService;
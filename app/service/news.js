const { Service } = require('egg');
const {getNextSequenceValue} = require('../../utils/utils')
const dayjs = require('dayjs')
class NewsService extends Service {
    
    async saveNewsInfo(newsInfo){
        newsInfo.updateTime = new Date()
        
        if(!newsInfo.newsId){
            newsInfo.views = 0
            newsInfo.newsId = await getNextSequenceValue('news',this.ctx)
            
            await this.ctx.model.News.create(newsInfo)
            
            return true
        }else{
            await this.ctx.model.News.findOneAndUpdate({newsId:newsInfo.newsId},newsInfo,{},(err,doc)=>{
         
                if(err){
                    return false
                }
            })
   
        }
        
  
        
    }

    async removeNews(newsId){
        return await this.ctx.model.News.deleteOne({newsId})
    }

    async queryNews(newsId,addViews){
        if(addViews){
          return await this.ctx.model.News.findOneAndUpdate({newsId},{$inc: { views: +1 } },)
        }else{
            return await this.ctx.model.News.findOne({newsId})
        }
        
    }

    async queryNewsList(params){
        let query = {
            title: new RegExp(params.name, 'i')
        }
        if(params.newsId){
            query.newsId = params.newsId
        }
        return await this.ctx.model.News.find(query,{
            newsId:1,
            title:1,
            author:1,
            updateTime:1,
            attachments:1,
            views:1,
            _id:0,
        }).find(()=>{})
        .sort({_id:-1})
    }
}

module.exports = NewsService;
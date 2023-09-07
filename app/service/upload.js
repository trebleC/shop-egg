const { Service } = require('egg');
const path = require('path')
const fs = require('fs')
const dayjs = require('dayjs')

class UploadService extends Service {

    
    async setAttachmentInfo(fileInfo){
        const {ctx} = this
        const  getNextSequenceValue  = async (sequenceName)=>{
            
            
            let sequenceDocument = await ctx.model.Counter.findOneAndUpdate({ _id: sequenceName },
                {$inc: { sequence_value: +1 } },
            //     {
            //     query : ,
            //     update : ,
            //     new: true
            //  }
             );
    
             return new Promise(resole => {
                resole(sequenceDocument.sequence_value)
             })
        }
        // 插入新图片
        var attachmentId = await getNextSequenceValue("attachment");

        await ctx.model.Attachment.create({
            attachmentId:attachmentId,
            attachmentName:fileInfo.filename,
            createdTime:dayjs()
        })
        return {attachmentId,name:fileInfo.filename}
    }

    async deleteFile(id){
        return await this.ctx.model.Attachment.deleteOne({attachmentId:id})
    }
}

module.exports = UploadService;

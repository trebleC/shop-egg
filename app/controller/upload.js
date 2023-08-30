'use strict';
const Pump = require('mz-modules/pump');

const Path = require('path');
const Fs = require('fs');

const { Controller } = require('egg');
class UploadController extends Controller {

  // 单文件上传
  async singleUpload() {
    // 获取表单提交的数据
    let stream = await this.ctx.getFileStream();
    // 防止上传空文件
    if (!stream.filename) {
      return;
    }
    // 文件名，实际项目中文件名要添加时间戳
    let filename = stream.filename.toLowerCase();

    // 上传的目录，注意upload目录要存在，实际项目中以云服务器地址为准，入库要替换地址符号
    let target = this.config.attachmentPath + '/'+Path.basename(filename)
    // 创建写入流
    let writeStream = Fs.createWriteStream(target);

    // 上传超过时长会卡死
    // stream.pipe(writeStream);

    // 上传超过时长不会卡死
    await Pump(stream, writeStream);
    
    //保存id到数据库
    let fileObj = await this.ctx.service.upload.setAttachmentInfo({filename})

    // 返回上传的信息
    this.ctx.body = {
      code:0,
      message:'success',
      data:{
        ...fileObj,
        url: this.config.downloadPath + '/'+Path.basename(filename),
      }
      // 表单上传的图片

      // 表单的其它数据
      // fields: stream.fields
    }
  }

  async multiUpload() {
    // autoFields: true 表示除了文件的其它字段
    let parts = this.ctx.multipart({ autoFields: true });
    let files = [];
    let stream;
    // 循环获取数据流
    while ((stream = await parts()) != null) {
      if (!stream.filename) {
        // 多文件上传时，只能break,不能return
        break;
      }
      // 文件名，实际项目中文件名要添加时间戳
      let filename = stream.filename.toLowerCase();
      // 文件表单的name
      let fieldname = stream.fieldname;
      // 上传的目录，注意upload目录要存在，实际项目中以云服务器地址为准，入库要替换地址符号
      let target = '/public/admin/upload/' + Path.basename(filename);

      let writeStream = Fs.createWriteStream(target);
      await Pump(stream, writeStream);

      files.push({
        [fieldname]: target
      });
    }
    // 返回上传的信息
    this.ctx.body = {
      // 表单上传的文件
      files: files,
      // 表单的其它数据，注意放到循环后面，否则拿不到对应的字段
      fields: parts.field
    }

  }


  async deleteFile(){
    const {ctx} = this
    console.log('ctx',ctx.query);
    //this.ctx.service.upload.setAttachmentInfo({filename})
    let {deletedCount} = await this.ctx.service.upload.deleteFile(ctx.query.id)
    // 返回上传的信息
    if(deletedCount>0){
      this.ctx.body = {
        code:0,
        message:'success',
        data:true
      }
    }else{
      this.ctx.body = {
        code:10400,
        message:'fail',
      }
    }

  }

}
module.exports = UploadController;
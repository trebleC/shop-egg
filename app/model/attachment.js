'use strict';
module.exports = ({mongoose}) => {
  const {Schema} = mongoose;
  const AttachmentSchema = new Schema({
    attachmentId:{
        type:Number,
        require:true
    },
    attachmentName:{
        type:String,
    },
    createdTime:{
        type:Date
    }
  });
  return mongoose.model('Attachment', AttachmentSchema);
};
 
'use strict';
//备注：其中type表示字段类型，Mongoose 有以下几种类型
//Number（数字），String（字符串），Boolean（布尔值），ObjectId（对象ID），Array（数组），Object（对象），Date（日期)，Timestamp (时间戳类型)
module.exports = ({mongoose}) => {
  const {Schema} = mongoose;
  const GoodSchema = new Schema({
    goodId:{
        type:Number,
        require:true
    },
    categoryId:{
        type:Number,
    },
    name:{
        type:String
    },
    goodNo:{
        type:String
    },
    views:{
        type:Number
    },
    specification:{
        type:Object
    },
    desc:{
        type:String
    },
    attachments:{
        type:Array
    },
    createdTime:{
        type:Date
    }
  });
  return mongoose.model('Good', GoodSchema);
};
 
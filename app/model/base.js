'use strict';
//备注：其中type表示字段类型，Mongoose 有以下几种类型
//Number（数字），String（字符串），Boolean（布尔值），ObjectId（对象ID），Array（数组），Object（对象），Date（日期)，Timestamp (时间戳类型)
module.exports = ({mongoose}) => {
  const {Schema} = mongoose;
  const BaseSchema = new Schema({
    //海报
    banner:{
        type:Array
    },
    //公司信息
    dept:{
        type:Object
    },
    tel:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    //分享
    icons:{
        type:Array
    },
  });
  return mongoose.model('Base', BaseSchema);
};
 
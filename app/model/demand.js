"use strict";
module.exports = ({ mongoose }) => {
  const { Schema } = mongoose;
  const DemandSchema = new Schema({
    demandId: {
      type: Number,
      require: true,
    },
    goodId: {
      type: Number,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    desc: {
      type: String,
    },
    createTime:{
      type: String,
    }
  });
  return mongoose.model("demand", DemandSchema);
};

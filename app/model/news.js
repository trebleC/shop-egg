"use strict";
module.exports = ({ mongoose }) => {
  const { Schema } = mongoose;
  const NewsSchema = new Schema({
    newsId: {
      type: Number,
      require: true,
    },
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    attachments:{
      type: Array,
    },
    content: {
      type: String,
    },
    updateTime: {
      type: String,
    },
    views: {
      type: Number,
    },
  });
  return mongoose.model("news", NewsSchema);
};

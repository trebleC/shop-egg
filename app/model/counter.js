'use strict';
module.exports = ({mongoose}) => {
  const {Schema} = mongoose;
  const CounterSchema = new Schema({
    _id:{
        type:String,
        require:true
    },
    sequence_value:{
        type:Number,
        require:true
    }
  });
  return mongoose.model('Counters', CounterSchema);
};
 
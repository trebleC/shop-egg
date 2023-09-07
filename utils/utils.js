 const  getNextSequenceValue  = async (sequenceName,ctx)=>{
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
module.exports = {getNextSequenceValue}
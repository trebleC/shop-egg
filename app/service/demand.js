const {
    Service
} = require('egg');
const {
    getNextSequenceValue
} = require('../../utils/utils');
const dayjs = require('dayjs');
class DemandService extends Service {

    async saveDemandInfo(demandInfo) {

        if (!demandInfo.demandId) {
            demandInfo.createTime = dayjs()
            if (!demandInfo.goodId) {
                demandInfo.goodId = null
            }
            demandInfo.demandId = await getNextSequenceValue('demands', this.ctx)

            await this.ctx.model.Demand.create(demandInfo)

            return true
        } else {
            await this.ctx.model.Demand.findOneAndUpdate({
                demandId: demandInfo.demandId
            }, demandInfo, {}, (err, doc) => {

                if (err) {
                    return false
                }
            })

        }



    }

    async removeDemand(demandId) {
        return await this.ctx.model.Demand.deleteOne({
            demandId
        })
    }

    async queryDemand(demandId) {
        return await this.ctx.model.Demand.findOne({
            demandId
        })
    }

    async queryDemandList(params) {
        let query = {
            name: new RegExp(params.name, 'i'),
            email: new RegExp(params.email, 'i'),
            phone: new RegExp(params.phone, 'i'),
        }
        if (params.demanId) {
            query.demanId = params.demanId
        }
     
        let demandArr = await this.ctx.model.Demand.find(query, null)
        let goodArr = await this.ctx.model.Good.find({}, 'goodId name attachments')
        let res = []
        demandArr.map(item => {
            let good = {name:'',attachments:[]}
            goodArr.map(_item => {
                if(item.goodId && item.goodId == _item.goodId){
                    good = _item
                }
            })
            res.push({...item._doc,goodInfo:good})
            return item
        })
        return res


    }
}

module.exports = DemandService;
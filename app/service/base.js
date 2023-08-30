const { Service } = require('egg');

class BaseService extends Service {
    getName(){
        const {ctx} = this
        ctx.model.Base.create({aa:'wong',release:false})
        return '1111'
    }

}

module.exports = BaseService;
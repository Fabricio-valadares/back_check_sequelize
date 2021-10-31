const { CheckModel } = require("../model/check.model.js")

class CheckRepo {
    static async create(data) {
        const newCheck = await CheckModel.create(data)

        return newCheck
    }

    static async findAllCheck() {
        const allCheck = await CheckModel.findAll()

        return allCheck
    }
}

module.exports = { CheckRepo }

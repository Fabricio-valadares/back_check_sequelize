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

    static async findOneCheck(num_input) {
        const oneCheck = await CheckModel.findOne({
            where: {
                num_input: num_input
            }
        })

        return oneCheck
    }

    static async deleteCheck(num_input) {
        try {
            await CheckModel.destroy({
                where: {
                    num_input: num_input
                }
            })

            return true

        } catch(error) {
            return false
        }
        
    }
}

module.exports = { CheckRepo }

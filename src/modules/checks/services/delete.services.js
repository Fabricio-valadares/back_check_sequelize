const { CheckRepo } = require("../repositories/check.repo.js")

class DeleteCheckServices {
    static async deleteServices(num_input) {
        const itemInput = await CheckRepo.findOneCheck(num_input)

        if (!itemInput) {
            return { message: "Check is not exists" }
        }

        const result = await CheckRepo.deleteCheck(num_input)

        if (!result) {
            return { message: "it was not possible to delete" }
        }

    }
}

module.exports = { DeleteCheckServices }

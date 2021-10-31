const { CheckRepo } = require("../repositories/check.repo.js")

class ListAllCheckServices {
    static async listAllServices() {
        const listAllCheck = await CheckRepo.findAllCheck()

        return listAllCheck
    }
}

module.exports = { ListAllCheckServices }

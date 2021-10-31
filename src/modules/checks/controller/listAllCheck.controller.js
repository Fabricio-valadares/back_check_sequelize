const { ListAllCheckServices } = require("../services/listAllCheck.services")

class ListAllCheckController {
    static async execute(request, response) {
        const listAllCheck = await ListAllCheckServices.listAllServices()

        return response.json(listAllCheck)
    }
}

module.exports = { ListAllCheckController }

const { DeleteCheckServices } = require("../services/delete.services")

class DeleteCheckController {
    static async execute(request, response) {
        const { num_input } = request.params

        const result = await DeleteCheckServices.deleteServices(num_input)

        return response.json(result)
    }
}

module.exports = { DeleteCheckController }

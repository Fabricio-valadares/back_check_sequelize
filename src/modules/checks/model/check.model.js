const { Model, DataTypes } = require("sequelize")

class CheckModel extends Model {
   static init(sequelize) {
       super.init({
        num_input: DataTypes.INTEGER,
        name_module: DataTypes.STRING
       }, {
        sequelize,
        modelName: 'checks'
    })
   }
}

module.exports = { CheckModel }

const { DataTypes } = require("sequelize");
const sequelize = require("../../services/mysql/sequelize");
const User = require("../user/model");

const CarShopping = sequelize.define(
  "car_shopping",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        as: "User",
        onDelete: "cascade",
        onUpdate: "cascade",
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

User.hasOne(CarShopping, { foreignKey: "id_user" });
CarShopping.belongsTo(User, { foreignKey: "id_user" });

module.exports = CarShopping;

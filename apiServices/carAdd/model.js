const { DataTypes } = require("sequelize");
const sequelize = require("../../services/mysql/sequelize");
const CarShopping = require("../carShopping/model");
const Course = require("../course/model");

const CarAdd = sequelize.define(
  "car_add",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    id_car: {
      type: DataTypes.INTEGER,
      references: {
        model: "car_shopping",
        key: "id",
        as: "CarShopping",
        onDelete: "cascade",
        onUpdate: "cascade",
      },
    },

    id_course: {
      type: DataTypes.INTEGER,
      references: {
        model: "course",
        key: "id",
        as: "Course",
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

Course.hasMany(CarAdd,{foreignKey:"id_course"});
CarAdd.belongsTo(Course,{foreignKey:"id_course"});

CarShopping.hasMany(CarAdd,{foreignKey:"id_car"});
CarAdd.belongsTo(CarShopping,{foreignKey:"id_car"});

module.exports = CarAdd;

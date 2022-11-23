const CarShopping = require("./model");

module.exports = {
  async createCars() {
    return await CarShopping.create();
  },
};

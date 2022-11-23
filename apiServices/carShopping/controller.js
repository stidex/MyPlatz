const dao = require("./dao");

module.exports = {
  async createCars(req, res) {
    return await dao.createCars();
  },
};

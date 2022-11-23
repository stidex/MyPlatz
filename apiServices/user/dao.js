const User = require("./model");
const CarShopping = require("../carShopping/controller");

module.exports = {
  async getUsers() {
    return await User.findAll();
  },

  async getUser(data) {
    return await User.findOne({ where: { email: data.email } });
  },

  async createUsers(data) {
    const validation = await User.findOne({ where: { email: data.email} });
    if (!validation){
      const user = await User.create(data);
      const car = await CarShopping.createCars();
      car.setUser(user);
      return true;
    }
    else return false;
   
  },
};

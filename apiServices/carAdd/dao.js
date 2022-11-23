const CarAdd = require("./model");
const Course = require("../course/model");
const category = require("../category/model");

module.exports = {
  async addCourse(data) {
    const validation = await CarAdd.findOne({
      where: { id_course: data.id_course, id_car: data.id_car },
    });
    if (!validation) {
      return await CarAdd.create(data);
    } else return false;
  },
  async getCar(id_car) {
    return await CarAdd.findAll({
      where: { id_car },
      include: [
        {
          model: Course,
          require: false,
          include: [{ model: category, require: true }],
        },
      ],
    });
  },
  async removeCourses(id_car) {
    await CarAdd.destroy({ where: { id_car }, truncate: true, cascade: false });
  },

  async removeCourse(data) {
    await CarAdd.destroy({
      where: { id_car: data.id_car, id_course: data.id_course },
    });
  },
};

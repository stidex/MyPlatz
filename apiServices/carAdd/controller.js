const dao = require("./dao");
const dto = require("./dto");

module.exports = {
  async addCourse(req, res) {
    const id = req.body.id;
    const car = await dao.addCourse({
      id_car: req.token.id,
      id_course: id,
    });
    if (car) res.status(201).send({ message: "data saved successfully" });
    else
      return res
        .status(202)
        .send({ message: "the course is already saved in the cart    " });
  },

  async getCar(req, res) {
    let car = await dao.getCar(req.token.id);
    car = JSON.stringify(car, null, 2);
    car = JSON.parse(car);
    return res.status(200).send(dto.multiple(car));
  },

  async removeCourses(req, res) {
    await dao.removeCourses(req.token.id);
    return res.status(200).send({ message: "data delete successfully" });
  },

  async removeCourse(req, res) {
    const { id } = req.params;
    await dao.removeCourse({
      id_car: req.token.id,
      id_course: id,
    });
    return res.status(200).send({ message: "data delete successfully" });
  },
};

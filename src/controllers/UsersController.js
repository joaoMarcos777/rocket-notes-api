const AppError = require("../utils/AppError");

class UsersController {
  create(req, res) {
    const { name, email, password } = req.body;

    if (!name) {
      throw new AppError("bruh");
    }

    res.send({ name, email, password });
  }
}

module.exports = UsersController;

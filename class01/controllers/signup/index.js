const { User } = require("../../models");

const signUp = (req, res) => {
  let { body } = req;

  const user = new User(body);
  user
    .save()
    .then((data) => {
      console.log("data", data);
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

module.exports = signUp;

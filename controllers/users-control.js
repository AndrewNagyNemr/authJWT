const User = require("../models/users-model");

const users = [];

exports.getUser = (req, res) => {
  res.json(users);
};

exports.postUser = (req, res) => {
  const id = users.length === 0 ? 1 : users[users.length - 1].id + 1;
  const { error } = User.validate(req.body);
  if (error) return res.json(error.details[0]);
  const newUser = { id, ...req.body };
  users.push(newUser);
  res.json(newUser);
};

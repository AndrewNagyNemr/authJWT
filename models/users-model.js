const Joi = require("joi");
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  })
);

exports.add = (user) => new User(user).save();
exports.edit = (id, user) => User.findByIdAndUpdate(id, user);
exports.remove = (id) => User.findByIdAndDelete(id);
exports.getAll = () => User.find();
exports.getOne = (id) => User.findById(id);

const joiSchema = Joi.object({
  name: Joi.string().min(5).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5).max(20),
  repeatPassword: Joi.ref("password"),
});

exports.validate = (user) => {
  return joiSchema.validate(user);
};

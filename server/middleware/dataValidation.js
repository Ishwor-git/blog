const joi = require("joi");

const LoginValidation = (req, res, next) => {
  const schema = joi.object({
    username: joi.string().min(6).required(),
    password: joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = {
  LoginValidation,
};

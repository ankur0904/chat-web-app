import bcrypt from "bcrypt";
import mongoose from "../db/DBconfig.js";
import User from "../model/User.js";

// defining the salt rounds
const saltRounds = 10;

const signUpController = (req, res) => {
  const {  email, password, confirmPassword } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  // saving the user to the database
  const user = new User({ email, password });
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      user.save()
        .then(() => {
          res.status(200).json({ message: 'User signed up successfully' });
        })
        .catch((err) => {
          res.status(400).send('Unable to save user');
        });
    });
  });
}

export default signUpController;
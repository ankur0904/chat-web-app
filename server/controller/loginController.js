import bcrypt from "bcrypt";
import mongoose from "../db/DBconfig.js";
import User from "../model/User.js";

// salt round same as signup
const saltRounds = 10;

const loginController = (req, res) => {
    const { email, password } = req.body;
    bcrypt.genSalt(saltRounds, function (err, salt) {        // generating salt
        bcrypt.hash(password, salt, function (err, hash) {   // hashing the password
            User.findOne({ email: email })                   // finding the user with the email
                .then((user) => {
                    if (user) {
                        // comparing the password hashed version with the user's password
                        bcrypt.compare(password, user.password, function (err, result) {
                            if (result) {
                                res.status(200).json({ message: 'Login successful',authorization: true});
                                return;
                            } else {
                                res.status(401).json({ message: 'Invalid email or password', authorization: false});
                                return;
                            }
                        });
                    } else {
                        res.status(401).json({ message: 'Invalid email or password', authorization: false });
                        return;
                    }
                });
        });
    });
};

export default loginController;

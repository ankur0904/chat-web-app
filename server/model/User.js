import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.ObjectId;

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    confirmPassword: String
});

const User = mongoose.model('User', userSchema);

export default User;
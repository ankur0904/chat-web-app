import mongoose from 'mongoose';
// config .env
import 'dotenv/config'

// connect to the database
mongoose.connect(`mongodb+srv://admin-ankur:${process.env.SECRET_KEY}@cluster0.4zksoll.mongodb.net/chatDB`)
  .then(() => console.log('Connected!'));
export default mongoose;
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this user.'],
    maxlength: [60, 'Name cannot be longer than 60 characters.'],
  },
  age: {
    type: Number,
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);

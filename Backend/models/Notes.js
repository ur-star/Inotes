import mongoose from 'mongoose';
const { Schema } = mongoose;

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
    // unique: true
  },
  description:{
    type: String,
    required: true,
  },
  tag:{
    type: String,
    default: "General"
    // required: true
  },
  date:{
    type: Date,
    required: Date.now
  }
});

module.exports = mongoose.model('note',noteSchema);
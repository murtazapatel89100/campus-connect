import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  personalEmail: { type: String, required: true, unique: true },
  name: {
    middleName: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  birthdate: { type: Date, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  branch: { type: String, required: true },
  currentYear: { type: Number, enum: ["1", "2", "3", "4"], required: true },
  rollNo: { type: String, required: true, unique: true },
  mobileNo: { type: String, required: true, unique: true },
  mobileNo2: { type: String, unique: true, required: false },
  universityEmail: { type: String, required: true, unique: true },
});

export default mongoose.models.User || model("User", userSchema);

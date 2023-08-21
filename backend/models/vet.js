import mongoose from "mongoose";
import generateId from "../helpers/generateId.js";
import bcrypt from "bcrypt";
const vetShema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  cellphone: {
    type: String,
    default: null,
    trim: true,
  },
  web: {
    type: String,
    default: null,
  },
  token: {
    type: String,
    default: generateId,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
});

vetShema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

vetShema.methods.comperPassword= async function(passwordForm){
  return  await  bcrypt.compare(passwordForm, this.password)
}

const Vet = mongoose.model("Vet", vetShema);
export default Vet;

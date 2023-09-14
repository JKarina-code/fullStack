import Vet from "../models/Vet.js";
import generateJWT from "../helpers/generateJWT.js";
import generateId from "../helpers/generateId.js";
import emailRegister from "../helpers/emailRegister.js";
import emailForgotPassword from "../helpers/emailForgotPassword.js";

const register = async (req, res) => {
  //Prevent duplicate users
  const { email, name } = req.body;

  const userExist = await Vet.findOne({ email });
  if (userExist) {
    const error = new Error("Already registered user");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const vet = new Vet(req.body);
    const vetSave = await vet.save();

    // Send email
    emailRegister({ name, email, token: vetSave.token });
    res.json(vetSave);
  } catch (error) {
    console.log(error);
  }
};

const profile = (req, res) => {
  const { vet } = req;
  res.json({ vet });
};

const confirm = async (req, res) => {
  const { token } = req.params;
  const userConfirm = await Vet.findOne({ token });
  if (!userConfirm) {
    const error = new Error("Invalid token");
    return res.status(404).json({ msg: error.message });
  }
  try {
    userConfirm.token = null;
    userConfirm.confirmed = true;
    await userConfirm.save();
    res.json({ msg: "User confirmed successfully" });
  } catch (error) {
    console.log(error);
  }
};

const authenticate = async (req, res) => {
  const { email, password } = req.body;
  const user = await Vet.findOne({ email });

  if (!user) {
    const error = new Error("user does not exist");
    return res.status(404).json({ msg: error.message });
  }

  if (!user.confirmed) {
    const error = new Error("Your account has not been confirmed");
    return res.status(403).json({ msg: error.message });
  }
  if (await user.comperPassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateJWT(user.id),
    });
  } else {
    const error = new Error("pass incorrect");
    return res.status(403).json({ msg: error.message });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const existsVet = await Vet.findOne({ email });
  if (!existsVet) {
    const error = new Error("Email does not exist");
    return res.status(400).json({ msg: error.message });
  }

  try {
    existsVet.token = generateId();
    await existsVet.save();

    // Send email forgot password
    emailForgotPassword({
      email,
      name: existsVet.name,
      token: existsVet.token,
    });
    res.json({ msg: "Email sent with instructions" });
  } catch (error) {
    console.log(error);
  }
};

const checkPassword = async (req, res) => {
  const { token } = req.params;

  const tokenValido = await Vet.findOne({ token });

  if (tokenValido) {
    // El TOken es válido el usuario existe
    res.json({ msg: "Valid token and user exist" });
  } else {
    const error = new Error("Invalid token");
    return res.status(400).json({ msg: error.message });
  }
};
const newPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const vet = await Vet.findOne({ token });

  if (!vet) {
    const error = new Error("There was a mistake");
    return res.status(400).json({ msg: error.message });
  }

  try {
    vet.token = null;
    vet.password = password;
    await vet.save();
    res.json({ msg: "Password changed successfully " });
  } catch (error) {
    console.log(error);
  }
};

const updateProfile = async (req, res) => {
  const vet = await Vet.findById(req.params.id); //info in bd
  if (!vet) {
    const error = new Error("There was an error");
    return res.status(400).json({ msg: error.message });
  }

  const { email } = req.body;
  if (vet.email !== req.body.email) {
    const existEmail = await Vet.findOne({ email });
    if (existEmail) {
      const error = new Error("That  email is already in use");
      return res.status(400).json({ msg: error.message });
    }
  }
  try {
    vet.name = req.body.name;
    vet.email = req.body.email;
    vet.web = req.body.web;
    vet.cellphone = req.body.cellphone;

    const vetUpdate = await vet.save();
    res.json(vetUpdate);
  } catch (error) {
    console.log(error);
  }
};
export {
  register,
  profile,
  confirm,
  authenticate,
  forgotPassword,
  newPassword,
  checkPassword,
  updateProfile,
};

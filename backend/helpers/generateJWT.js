import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";
const generateJWT = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: 86400, // 24 hours
  });
};

export default generateJWT;

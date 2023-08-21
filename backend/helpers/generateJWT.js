import jwt from "jsonwebtoken";

const generateJWT = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: 86400, // 24 hours
  });
};

export default generateJWT;

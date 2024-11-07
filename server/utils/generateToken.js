import jwt from "jsonwebtoken";

const generateToken = async (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });

  const thirtyDays = 30 * 24 * 60 * 60 * 1000;

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    maxAge: thirtyDays,
    sameSite: "strict",
  });

  return token;
};

export default generateToken;

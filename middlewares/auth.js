const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// create jwt token
const createToken = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
  return token;
};

// protect routes
const protect = async (req, res, next) => {
  // get token from header
  const token = req.headers.authorization.split(" ")[1];

  // check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Token is not valid" });
  }
};

// compare passwords
const comparePasswords = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// hash passwords

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

module.exports = { createToken, protect, comparePasswords, hashPassword };

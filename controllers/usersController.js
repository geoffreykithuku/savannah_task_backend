const {
  createToken,
  hashPassword,
  comparePasswords,
} = require("../middlewares/auth");

const { User } = require("../models/User");

// user signup

const userSignup = async (req, res) => {
  try {
    const { username, name, email, password } = req.body;

    // check if user exists
    const userExists = await User.findOne({
      email: email,
    });

    if (userExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // create user with a hashed password
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      username,
      name,
      email,
      password: hashedPassword,
    });

    // create token
    const token = createToken(user);

    return res.status(201).json({ token , user});
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// user login

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // check if password matches
    const isMatch = await comparePasswords(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // create token
    const token = createToken(user);

    return res.status(200).json({ token , user});
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// get user

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// update user

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
      runValidators: true,
    }).select("-password");

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// delete user

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);

    return res.status(200).json({ msg: "User deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// get all users

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = {
  userSignup,
  userLogin,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
};

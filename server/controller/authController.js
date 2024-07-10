const User = require("../model/userSchema");
const bcryptjs = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    const { username, email } = newUser;
    res.status(200).json({
      message: "User created",
      user: {
        username,
        email,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcryptjs.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(404).json({
        message: "Invalid password",
      });
    }

    const { password, isAdmin, ...others } = user._doc;
    res.status(200).send({ ...others });
  } catch (err) {
    res.status(500).json(err);
  }
};

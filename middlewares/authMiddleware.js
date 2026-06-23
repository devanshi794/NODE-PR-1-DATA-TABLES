import User from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  try {
    const { email } = req.headers;

    if (!email) {
      return res.status(401).json({
        message: "Email is required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export default authMiddleware;
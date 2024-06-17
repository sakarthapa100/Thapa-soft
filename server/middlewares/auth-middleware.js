const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized HTTP, Token not provided" });
  }

  // Assuming token is in the format "Bearer <jwtToken>", Removing the "Bearer" prefix
  const jwtToken = token.replace("Bearer", "").trim();
  console.log(`Extracted Token: ${jwtToken}`);

  try {
    // Verifying the token
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    console.log(`Token verified: ${JSON.stringify(isVerified)}`);

    // getting the complete user details & also we don't want password to be sent
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    req.token = token;
    req.user = userData;
    req.userID = userData._id; // corrected this line

    // Move on to the next middleware or route handler
    next();
  } catch (error) {
    console.error(`Token verification failed: ${error.message}`);
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

module.exports = authMiddleware;

const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSeceret = "shhh@thisIsASeceret";

// Create user using : post "api/auth/createuser"
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // console.log(req.body);
    // const user = User(req.body)
    // user.save()

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "A user with same email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, jwtSeceret);
      console.log(token);
      // .then(user => res.json(user))
      // .catch(err => {console.log(err)
      // res.json({error : 'Please enter different email', message: err.message})})
      // res.send(req.body);

      res.json({ Success: token });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  }
);

//Authorise user using : POST "/api/auth/login"

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "password cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({email});
      if (!user) {
        return res.status(400).json({error: " Input valid credentials "})
      }

      const comparePassword = await bcrypt.compare(password,user.password);

      if(!comparePassword)
      {
        return res.status(400).json({error: " Input valid credentials "})
      }

      const payload = {
        user:{
          id: user.id
        }
      }
      const token = jwt.sign(payload, jwtSeceret);
      res.send({token});
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  }
);
module.exports = router;

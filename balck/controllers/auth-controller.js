const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const db = require("../models/db");

exports.register = async (req, res, next) => {
  const { username, password, email, address } = req.body;
  try {
    // validation
    if (!(username && password && email && address)) {
      return next(new Error("Please fill in all fields"));
    }
    // if (confirmPassword !== password) {
    //   throw new Error("Passwords do not match");
    // }

    const hashedPassword = await bcrypt.hash(password, 8);
    const userData = {
      username,
      password: hashedPassword,
      email,
      address
    };

    const rs = await db.user.create({ data :userData })
    console.log(rs)

    res.json({ msg: 'Register successful' })
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body
  try {
    // validation
    if (!(username.trim() && password.trim())) {
      throw new Error('username or password must not blank')
    }
    // find username in db.user
    const user = await db.user.findFirstOrThrow({ where: { username } })
    // check password
    const pwOk = await bcrypt.compare(password, user.password)
    if (!pwOk) {
      throw new Error('invalid login')
    }
    // issue jwt token 
    const payload = { id: user.id }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d'
    })
    console.log(token)
    res.json({ token: token })
  } catch (err) {
    next(err)
  }
};

exports.getme = (req, res, next) => {
  res.json(req.user)
}
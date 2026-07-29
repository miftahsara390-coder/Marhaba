const User = require('../models/user.model');
const { hashPassword, comparePassword } = require('../utils/hash');
const { generateToken } = require('../utils/jwt');

const register = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Cet email est déjà utilisé.' });
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user.id);

    res.status(201).json({
      message: 'Inscription réussie',
      token,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const genericErrorMsg = 'Email ou mot de passe incorrect';

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: genericErrorMsg });
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: genericErrorMsg });
    }

    const token = generateToken(user.id);

    res.status(200).json({
      message: 'Connexion réussie',
      token,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getMe = async (req, res, next) => {
  try {
    
    res.status(200).json({
      id: req.user.id,
      fullName: req.user.fullName,
      email: req.user.email,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, getMe };
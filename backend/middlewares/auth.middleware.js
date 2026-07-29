const { verifyToken } = require('../utils/jwt');
const User = require('../models/user.model');

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Accès non autorisé. Token manquant.' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);
    
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(401).json({ error: 'Utilisateur introuvable.' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalide ou expiré.' });
  }
};

module.exports = authenticate;
exports.validateRegister = (req, res, next) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Mot de passe minimum 6 caractères" });
  }

  next();
};

exports.validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Champs requis" });
  }

  next();
};
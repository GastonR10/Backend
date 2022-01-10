const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../middleware/jwt-validate");


const registro = async (req, res, next) => {
  try {
    if (req.body.mail && req.body.password) {
    
      if (/^\S+@\S+\.\S+$/.test(req.body.mail) === false) {
        res
          .status(400)
          .json({ success: false, message: "Formato de mail incorrecto" });
        return;
      }

      const existeUser = users.find((u) => {
        return u.mail === req.body.mail;
      });

      if (existeUser) {
        res.status(400).json({ success: false, message: "Mail repetido" });
        return;
      }

      const salt = await bcrypt.genSalt(10);
      console.log("Salt", salt);
      const password = await bcrypt.hash(req.body.password, salt);

      const newUser = {
        mail: req.body.mail,
        password: password,
      };

      users.push(newUser);

      return res.status(200).json({ success: true, newUser });
    } else {
      return res.status(400).json({
        success: false,
        message: "Faltan datos (requeridos: mail, name, password)",
      });
    }
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = users.find((u) => u.mail === req.body.mail);
    if (!user) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({ error: "Contraseña no válida" });
    }

    const token = jwt.sign(
      {
        mail: user.mail,
      },
      TOKEN_SECRET
    );

    res.status(200).json({
      error: null,
      data: "Login exitoso",
      token,
    });
  
  } catch (error) {
    return next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    return res.json({ error: null, users });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  registro,
  login,
  getUsers,
};

const users = [
  {
    mail: "gastonrm10@gmail.com",
    password: "$2a$10$PhozXJLJ484qQ9t0/BMUxOyfut96MTxX.r4Tu4u/UE4TNaz/UjcWi",
  },
];
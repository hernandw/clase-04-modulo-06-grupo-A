import fs from "fs";

const createUser = (req, res) => {
  const user = req.body;

  //Leer todos los usuarios
  const users = JSON.parse(fs.readFileSync("src/data/users.json", "utf-8"));
  users.push(user);
  //escribe el archivo
  fs.writeFileSync("src/data/users.json", JSON.stringify(users));
  res.json({
    message: "Usuario creado con éxito",
  });
};

const getUsers = (req, res) => {
  const users = JSON.parse(fs.readFileSync("src/data/users.json", "utf-8"));
  res.json(users);
};

export { createUser, getUsers };

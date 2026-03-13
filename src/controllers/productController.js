import fs from 'fs'

export const createProduct = (req, res) => {
  const product = req.body;

  //Leer todos los productos
  const products = JSON.parse(fs.readFileSync("src/data/products.json", "utf-8"));
  products.push(product);
  //escribe el archivo
  fs.writeFileSync("src/data/products.json", JSON.stringify(products));
  res.json({
    message: "Producto creado con éxito",
  });
};

export const getProducts = (req, res) => {
  try {
    const products = JSON.parse(fs.readFileSync("src/data/products.json", "utf-8"));
  res.json(products);
  } catch (error) {
    console.log(error)
  }
};


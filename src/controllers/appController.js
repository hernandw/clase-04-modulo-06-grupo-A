const home = (req, res) => {
  res.send("Pagina Principal desde el controller");
};

const about = (req, res) => {
  res.send("Pagina de About");
};

const contact = (req, res) => {
  res.send("Pagina de contacto");
};

export { home, about, contact };

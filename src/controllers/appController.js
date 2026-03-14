const home = (req, res) => {
  res.render('home',{
    nombrePagina: 'Pagina Principal'
  })
};

const about = (req, res) => {
  res.render('about',{
    nombrePagina: 'Pagina de About'
  })
};

const contact = (req, res) => {
  res.render('contact', {
    nombrePagina: 'Página de Contacto'
  })
};

export { home, about, contact };

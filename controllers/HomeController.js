const path = require('path');

const HomeController = {
    showPaginaInicial: (req, res) => {
        res.send('Ola tudo bem?')
    },

    showContato: (req, res) => {
        res.send('Pagina de Contato!');
    },

     showLogin: (req, res) => {
        res.render("login");
    }

}

module.exports = HomeController;
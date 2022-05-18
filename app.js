const express = require('express');
const app = express();
const port = 3000;
const homeRoutes = require('./routes/homeRoutes');
const produtosRoutes = require('./routes/produtosRoutes');

app.set('view engine', 'ejs');

app.use(homeRoutes);
app.use(produtosRoutes);


app.listen(port, () => {
    console.log("Server started on port " + port + "🏆!")
});
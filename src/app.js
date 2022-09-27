const express = require('express');

// ...

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

// ...

app.post('/login', middlewares.login, controllers.login);
app.post('/user', middlewares.user, controllers.user);
app.get('/user', middlewares.auth, controllers.listUsers);
app.get('/user/:id', middlewares.auth, controllers.findUser); 
app.post('/categories', middlewares.auth, controllers.createCategory);
app.get('/categories', middlewares.auth, controllers.findAllCategory);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

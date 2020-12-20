const express = require('express');
const routes = require('./routes');
const app = express();
require('./config/db')();

const PORT = process.env.PORT || 5000;

// parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// this is for pre production
// if(process.env.NODE_ENV ==="production"){
  app.use(express.static("client/build"));
  app.get('*', (req, res)=> {
    res.sendFile(path.json(__dirname,"../client/build/index.html"));
  })
// }

app.listen(PORT, () => {
  console.log('app running on PORT: ' + PORT);
});

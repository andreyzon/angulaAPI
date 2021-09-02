const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.static(__dirname + '/dist/client'));

app.get('*', function(req, res){
  res.sendFile(__dirname + '/dist/client/index.html');
});

app.listen(PORT, () =>
  console.log(`Server listening on port: ${PORT}`),
);

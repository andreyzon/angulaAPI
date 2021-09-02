const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.static(__dirname + '/client'));

app.get('*', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

app.listen(PORT, () =>
  console.log(`Server listening on port: ${PORT}`),
);

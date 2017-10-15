const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(3001, ()=>{
    console.log('listening to port 3001');
});

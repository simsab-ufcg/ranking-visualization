const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/sab'));
app.use('/src/assets', express.static(__dirname + '/src/assets/'));

const PORT = 4200;

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/sab/index.html'));
});

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
//Require the Express npm Package

const express = require('express');

 const app = express();

 app.use(express.static('public'));
 

 app.get('/home', (request, response, next) =>{
    response.sendFile(__dirname + '/views/home.html')
 });

 

//Create a Second Route
app.get('/about',(request, response) =>{
    response.sendFile(__dirname + '/views/about.html');
});

//Create a Third Route
app.get('/work',(request, response) =>{
    response.sendFile(__dirname + '/views/work.html');
})


//Start the Server
 app.listen(3000, () => console.log('App is listening on PORT 3000'));
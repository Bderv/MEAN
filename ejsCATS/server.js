const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname+'/static'));

app.get('/', (request, response) => {
response.render('cats.ejs')
});

app.get('/Bengal', (request, response) => {
    var cats = [
        {name: "Bengal",age: "7", diet: "Raw Meat", location: "Jungle"},
    ];
response.render('details.ejs', {cats: cats});
});

app.get('/Snow_Leopard', (request, response) => {
    var cats = [
        {name: "Snow Leopard", age:"4", diet: "Birds and Sheep", location: "Mountains, Cold places"},
    ];
response.render('details.ejs', {cats: cats});
});

app.listen(4400, () => console.log("listening on port 4400"));
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.render('index')
})
 
app.get('/about', (req, res) =>{
    res.render('about')
})

app.get('/bouquets', (req, res) =>{
    res.render('bouquets');
})

app.get('/order-form', (req, res) =>{
    res.render('order-form');
})

app.get('/contact-us', (req, res) =>{
    res.render('contact-us');
})

app.get('/bouquets-2', (req, res) =>{
    res.render('bouquets-2');
})

app.listen(3000, ()=>{
    console.log('Server running on port 3000...')
})
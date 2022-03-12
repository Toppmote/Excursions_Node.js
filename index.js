const express = require('express');
const router = require('./routes/excursion.routes')

let swig = require('twig')

const PORT = 8000 || process.env.PORT

const app = express()
app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use('/', router)

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/about', function (req, res) {
    res.render('about.html');
});

app.listen(PORT, () => console.log('Server started on port ' + PORT))
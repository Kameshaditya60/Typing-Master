require('dotenv').config(); 
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

//set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// routes 

app.get('/', (req, res) => {
    console.log('Request for home page received');

    res.render('index');
});

app.post('/result', (req, res) => {
    console.log('Request for result page received');
    const { wpm , accuracy} = req.body;

    res.render('result', { wpm, accuracy });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
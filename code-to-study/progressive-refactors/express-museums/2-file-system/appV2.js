const express = require('express')
const app = express()
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')

app.set('view engine', 'ejs')

app.use('/tate', express.static(path.join(__dirname, './paintings/tate/')));
app.use('/tate', express.static(path.join(__dirname, './paintings/tate/')));

app.get('/tate', (req, res) => {
   
    fs.readdir(__dirname + '/paintings/tate/landscape', function (err, items) {
        var landscapes = []
        for (var i = 0; i < items.length; i++) {
            landscapes.push('landscape/' + items[i]);
        }

        fs.readdir(__dirname + '/paintings/tate/portrait', function (err, items) {
            var portraits = []
            for (var i = 0; i < items.length; i++) {
                portraits.push('portrait/' + items[i]);
            }
            
            res.render('tate', {
                'painter': 'Tate',
                'data': {
                    'landscapes': landscapes,
                    'portraits': portraits
                }
            })

        });
    });

});

app.get('/', (req, res) => {
    res.render('home')
})




app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

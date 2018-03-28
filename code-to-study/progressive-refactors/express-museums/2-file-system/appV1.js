var express = require('express');
var app = express();
var path = require('path');

const fs = require('fs')

var port = 3000;

app.use(function (req, res, next) { console.log('camembert 3k'); next() })

app.use('/tate', express.static(path.join(__dirname, './paintings/tate/')));


app.get('/tate', (req, res) => {
    // res.sendFile(path.join(__dirname, './public/tate.html'));
    whatever(res, __dirname + '/public/tate.html')
});

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, './public/home.html'));
    whatever(res, __dirname + '/public/home.html')
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('yo, ' + port);
    };
});

function whatever(res, pathname) {
    fs.exists(pathname, function (exist) {
        if (!exist) {
            // if the file is not found, return 404
            res.statusCode = 404;
            res.end(`File ${pathname} not found!`);
            return;
        }
        // if is a directory, then look for index.html
        // if (fs.statSync(pathname).isDirectory()) {
        //     pathname += 'public/index.html';
        // }
        // read file from file system
        fs.readFile(pathname, function (err, data) {
            if (err) {
                res.statusCode = 500;
                res.end(`Error getting the file: ${err}.`);
            } else {
                // based on the URL path, extract the file extention. e.g. .js, .doc, ...
                // const ext = path.parse(pathname).ext;
                // if the file is found, set Content-type and send data
                //res.setHeader('Content-type', mimeType[ext] || 'text/plain');
                res.write(data)
            }
        });
    });
}

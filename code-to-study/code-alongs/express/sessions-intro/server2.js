const express = require('express');
const app = express();
// for cookies, we use cookie-parser.  for body we used body-parser
const cookieParser = require('cookie-parser');

// configure app
app.use(cookieParser());

// middleware defining what sessions do
app.get('/', (req, res) => { 
  console.log(req.cookies.views)
   // if it isn't the first visit on their current cookie
   if (req.cookies.views) { 
    // figure out this inside bit yourself, it's not that bad
    if (Number(req.cookies.views) < 5) {
      var newCookieValue = Number(req.cookies.views) + 1;
      res.cookie('views', newCookieValue, { maxAge: 1000 });
      console.log('to secretlab 111')
      res.redirect('/secretLab');
      // this one here, what's it do?  why's it here?
    } else {
      res.cookie('views', 0, { maxAge: 1000 });
      console.log('to dungeon')
      res.redirect('/dungeon');
    }
  } else {   // if it is their first visit on their current cookie
    res.cookie('views', 0, { maxAge: 1000 });
    console.log('to secretlab 000')
    res.redirect('/secretLab');
  };
});

app.get('/secretLab', (req, res) => {
  console.log('-- in secretlab')
  res.send('you are in a top secret laboratory');
});

app.get('/dungeon', (req, res) => {
  console.log('-- in dungeon')
  res.send('tool.  youre in dungeon');
})


app.listen(process.env.PORT || 3000, () => {
  console.log('listening on 3000');
});



















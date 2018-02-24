Express
===

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Express is **minimalist** and **unopinionated**, which means it provides you a thin layer of fundamental web application features, without obscuring Node.js features and it gives you a lot of freedom how you organize your code.


Link to lecture: https://docs.google.com/presentation/d/1CjnhghAZoRlpYuXAc-v8MjKBn62P3prvT_YgsZ-Qvqk/edit#slide=id.p

Hello World in Express
---

```javascript
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
```

Express is just another module, so that means you need to import it in your code before you can use it. Then you need to create an _instance_ of the express object. Conventionally, this variable will be named _app_ (sometimes, you'll see _server_ as well);

You then create your first **route**. `app.get` refers to the **method** being used, i.e GET. As first argument it expects the relative route in your route tree. Here we pass a single forward slash, which refers to the **root** of the route tree. The second argument is a callback function with two arguments: a _request_ and a _response_ object. The function then sends a plain text response: Hello World!.

You then tell the app to listen at port 3000 when the app starts and to log a confirmation. Then, load http://localhost:3000/ in a browser to see the output.


External Resources: 
---
+ Express in action: https://hackerstribe.com/wp-content/uploads/2016/04/Node.js-Express-in-Action.pdf
+ Docs: https://expressjs.com/
+ Great 10-part tutorial: https://www.youtube.com/watch?v=k_0ZzvHbNBQ&list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp

link to projects, code samples, george's stuff
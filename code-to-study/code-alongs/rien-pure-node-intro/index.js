// Step 1: require module(s)
var http = require("http");

// Step 2: create a server
http
  .createServer(function(request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { "Content-Type": "text/plain" });

    // Send the response body as "Hello World"
    response.end("Hello World!");
  })
  .listen(3000);

console.log("Server running at port 3000");

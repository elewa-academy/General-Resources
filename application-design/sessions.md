Sessions
===

HTTP is a STATELESS PROTOCOL. This idea is why we need cookies and sessions.  
When talking about the client and the server, stateless means that the server doesn't remember the client.  Like a goldfish, every time the server recieves a request it's like the first time it has ever seen that user.  
another way to think of this is that your server is like a pure function.  Every time it recieves the same input, it will return the same output.  
In order to be both stateless and remember your preferences, servers send out cookies.  These cookies enable the server to retrieve your history from it's local database and remember who you are.  
So you ask how is this stateless if it remembers me?  The server doesn't remember you, the database does.  If I sent the server a request with your cookies, it would think I was you.   

[cookies video](https://www.youtube.com/watch?v=I01XMRo2ESg)  
  
[cookies article](http://www.whatarecookies.com)  

[Exercise example](./sessions-demo)

---
describe and diagrams for manual authentication flow
link to manual exercise


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
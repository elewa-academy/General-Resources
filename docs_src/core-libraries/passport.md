Passport-local
===

Passport strategy for authenticating with a username and password.

This module lets you authenticate using a username and password in your Node.js applications. By plugging into Passport, local authentication can be easily and unobtrusively integrated into any application or framework that supports Connect-style middleware, including Express.

External resources
---
+ docs: https://www.npmjs.com/package/passport-local
+ [scotch tutorial](https://www.google.be/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjJmOKD8YjXAhXNSxoKHUkYDuMQFggoMAA&url=https%3A%2F%2Fscotch.io%2Ftutorials%2Feasy-node-authentication-setup-and-local&usg=AOvVaw0p5wlwHw7G1C0vyBwZB8UC)  
+ [rising stack tutorial](https://blog.risingstack.com/node-hero-node-js-authentication-passport-js/)
+ Colt Steele

--------


Passport-jwt
----

Passport is authentication middleware for Node.js. Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

This module lets you authenticate endpoints using a JSON web token. It is intended to be used to secure RESTful endpoints without sessions.

JSON Web Token (JWT) is a JSON-based open standard (RFC 7519) for creating access tokens that assert some number of claims. For example, a server could generate a token that has the claim "logged in as admin" and provide that to a client. The client could then use that token to prove that it is logged in as admin. The tokens are signed by the server's key, so the client and server are both able to verify that the token is legitimate.

External Resources
---

+ Docs: http://passportjs.org/
+ jwt: https://jwt.io/
+ https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec
+ Nice tutorial: https://scotch.io/tutorials/easy-node-authentication-setup-and-local
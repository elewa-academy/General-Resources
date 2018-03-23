RESTful is first a network architecture, and second a routing convention

Basically, treat your server like a pure function.  The same request will always bring the same response (though the data in the response will change over time).  
[A google slides](https://docs.google.com/presentation/d/1Mhoj-SHEX-sMSqxlsigBGyEjjxTvAFHP1PHOP3M0N9o/edit#slide=id.g1f8026c0cf_0_35)

RESTful routing
====

What is Representational state transfer (REST)?
----

The term representational state transfer was introduced and defined in 2000 by Roy Fielding in his doctoral dissertation. Fielding used REST to design HTTP 1.1 and Uniform Resource Identifiers (URI). The term is intended to evoke an image of how a well-designed Web application behaves: it is a network of Web resources (a virtual state-machine) where the user progresses through the application by selecting links, such as `/user/tom`, and operations such as GET or DELETE (state transitions), resulting in the next resource (representing the next state of the application) being transferred to the user for their use.

Web service APIs that adhere to the REST architectural constraints are called RESTful APIs. HTTP-based RESTful APIs are defined with the following aspects:

+ base URL, such as http://api.example.com/resources/
+ an internet media type that defines state transition data elements (e.g., Atom, microformats, application/vnd.collection+json, etc.) The current representation tells the client how to compose requests for transitions to all the next available application states. This could be as simple as a URL or as complex as a Java applet.
+ standard HTTP methods (e.g., OPTIONS, GET, PUT, POST, and DELETE)

Relationship between URL and HTTP methods
----

The following table shows how HTTP methods are typically used in a RESTful API:

<table>
<caption>HTTP methods</caption>
<thead>
<tr>
<td>Uniform Resource Locator (URL)</td>
<td>GET</td>
<td>PUT</td>
<td>PATCH</td>	
<td>POST</td>	
<td>DELETE</td>
</tr>
</thead>
<tbody>
<tr>
<td>Collection, such as https://api.example.com/resources/</td>	
<td> <b>List</b> the URIs and perhaps other details of the collection's members.
<td> <b>Replace</b> the entire collection with another collection.	
<td>Not generally used</td>	
<td><b>Create</b> a new entry in the collection. The new entry's URI is assigned automatically and is usually returned by the operation.</td>	
<td><b>Delete</b> the entire collection.</td>
</tr>
<tr>
<td>Element, such as https://api.example.com/resources/item17</td>
<td><b>Retrieve</b> a representation of the addressed member of the collection, expressed in an appropriate Internet media type.</td>
<td><b>Replace</b> the addressed member of the collection, or if it does not exist, <b>create</b> it.
<td><b>Update</b> the addressed member of the collection.
<td>Not generally used. Treat the addressed member as a collection in its own right and <b>create</b> a new entry within it.</td>	
<td>Delete the addressed member of the collection.</td>
</tbody>
</table>

CRUD: Create, Read, Update, Delete
----

RESTful routing should in most cases follow the CRUD architecture, i.e different routes that handles **listing**, **creating**, **updating** and **deleting** data.

```javascript
var express = require("express");
var app = express();
var db = usersDb;

/* CREATE */

app.post("/add", (req, res) => {
    // add a user to the db
})

/* READ */

app.get("/users", (req, res) => {
    // List all users in the database
})

/* UPDATE */

app.put("/user/15461", (req, res) => {
    // update user with id 15461
})

/* DELETE */
app.delete("/user/15461/delete", (req, res) => {
    // delete user 15461
})

```


External Resources
----
+ Scotch.io tutorial: https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
+ Best practices: https://blog.risingstack.com/10-best-practices-for-writing-node-js-rest-apis/  
+ Simple RESTFUL example: https://github.com/jankeLearning/content-code/tree/master/Week%2005-6/1-simply-cruddy-to-read  


Source
---
https://en.wikipedia.org/wiki/Representational_state_transfer

http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api#requirements 


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
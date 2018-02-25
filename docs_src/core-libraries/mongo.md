MongoDb
===

MongoDB (from hu**mongo**us) is a free and open-source cross-platform **document-oriented** database program. Classified as a **NoSQL** database program, MongoDB uses JSON-like documents with schemas. 

### What is NoSQL?
From Wikipedia: "A NoSQL (originally referring to "non SQL" or "non relational") database provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases. Such databases have existed since the late 1960s, but did not obtain the "NoSQL" moniker until a surge of popularity in the early twenty-first century, triggered by the needs of Web 2.0 companies such as Facebook, Google, and Amazon.com. NoSQL databases are increasingly used in big data and real-time web applications. NoSQL systems are also sometimes called "Not only SQL" to emphasize that they may support SQL-like query languages."

### What is a document-oriented database?
A document-oriented database, or document store, is a computer program designed for storing, retrieving and managing document-oriented information, also known as semi-structured data.

Document databases contrast strongly with the traditional relational database (RDB). Relational databases generally store data in separate tables that are defined by the programmer, and a single object may be spread across several tables. Document databases store all information for a given object in a single instance in the database, and every stored object can be different from every other. This makes mapping objects into the database a simple task, normally eliminating anything similar to an object-relational mapping. This makes document stores attractive for programming web applications, which are subject to continual change in place, and where speed of deployment is an important issue

How to install MongoDb locally?
---
Download the [Community Server](https://www.mongodb.com/download-center?jmp=nav#community) version for your Operating System.

### Instructions for Windows users

Follow [these instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) for the docs.

### Instructions for Mac users

Follow [these instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) or install with HomeBrew.

Using mLab
---
You can also create a MongoDb instance remotely on [mlab](https://mlab.com). There is no need to install anything in this case, instead you can use mLab's _Database-as-a-Service_ platform. Once registered you can create a MongoDb instance, which you can then link to in your Express application, just as a database on your local machine.

You can have a 0.5 GB cloud database for free, perfect for learning purposes.

Querying MongoDb: Mongo Shell and Robo 3T
----
MongoDb comes installed with the **Mongo Shell**, a terminal-like application that allows you to read, create, update or delete data manually. 

Mastering the Mongo Shell is fairly easy. You can find the instructions [here](https://docs.mongodb.com/master/mongo/).

If you'd rather have a more graphical interface, you can install [Robo 3T](https://robomongo.org/), a free lightweight GUI for MongoDB.

External resources
---
+ MongoDb in 30 min: https://www.youtube.com/watch?v=pWbMrx5rVBE
+ or if you'd rather read: https://code.tutsplus.com/tutorials/getting-started-with-mongodb-part-1--net-22879


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
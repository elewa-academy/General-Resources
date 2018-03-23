EJS
===

EJS stands for **Embedded Javascript** and is a simple templating language that lets you generate HTML markup with plain JavaScript. 

Read this documentation about using templates with Express: https://expressjs.com/en/guide/using-template-engines.html

Usage
---

In your express-app you'll will need to import the module and set EJS as your view engine:

```javascript
app.set('view engine', 'ejs');
```

The set up of the view engine is necessary so that the render method knows which templating format to expect:

```javascript
app.get("/", function(req, res){
    res.render("home")
})
```

In the above we _render_ the home.ejs file every time somebody visits our root page. We can leave out the format as we have explicitly set the view engine as EJS. By default Express will look for your files in the **views** directory. If your ejs files are stored in another directory, you will have to explicitly point Express to it.

Once this is setup you can directly embed data in your views.

```javascript
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
```

You can see that this is some hybrid form of plain JS and HTML markup. What is important here is the use of the _tags_. Everything between those tags will be evaluated and will return your data. The tags you need to know are below:

+ <% 'Scriptlet' tag, for control-flow, no output
+ <%= Outputs the value into the template (HTML escaped)
+ <%- Outputs the unescaped value into the template
+ <%# Comment tag, no execution, no output
+ <%% Outputs a literal '<%'
+ %> Plain ending tag
+ -%> Trim-mode ('newline slurp') tag, trims following newline

Partials
----

To avoid having to repeat yourself in every single file, you can create **partials**. Partials are chunks of code you write once and then include in other files. The most common use cases are the beginnings and ends of every HTML file, the _headers_ and _footers_.

Let's say we have the following ejs file:

```html
<!doctype>
<html>
    <head>
        <title><%= title %></title>
    <head>
    <body>
        <% if (user) { %>
            <h2><%= user.name %></h2>
        <% } %>
    </body>
</html>
```

For every ejs file we write the beginning will always be the same: we'll define the doctype, open the html tag, head tag, body tag,... Instead of writing this for every single file. We write this once and _include_ it in the other files.

Our header.ejs file then becomes:

```html
<!doctype>
<html>
    <head>
        <title><%= title %></title>
    <head>
    <body>
```

Which we then include into our users.ejs file (footer.ejs would then only include the closing body and html tags):

```javascript
<%- include "./header.ejs" %>
    <% if (user) { %>
            <h2><%= user.name %></h2>
    <% } %>
<%- include "./footer.ejs>
```

External resources:

+ Docs: http://ejs.co/
+ NPM package: https://www.npmjs.com/package/ejs
+ simple tutorial: https://scotch.io/tutorials/use-ejs-to-template-your-node-application

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
# Abstractions
[example 1](#lead-by-example)  
[example 2](#lead-by-another-example)  
[Conclusion](#abstraction)  
[Resources](#resources)  

___
### Lead by example
These four examples are wrapping the same functionality in more and more layers of abstraction:
0. A little script that takes 4 command line args and logs them.  
    ```js
    var cli_args = process.argv.slice(2);
    console.log(cli_args[0]);
    console.log(cli_args[1]);
    console.log(cli_args[2]);
    console.log(cli_args[3]);
    ```
1. Wrap all those in a for loop.
    ```js
    var cli_args = process.argv.slice(2);
    for(var i = 0; i < 4; i++) {
        console.log(cli_args[i]);
    };
    ```
2. Make that into a function.
    ```js
    function print_four_items(arg_array) {
        for(var i = 0; i < 4; i++) {
            console.log(cli_args[i]);
        };
    };
    ```
3. Make that funcion general purpose.
    ```js
    function print_array(arg_array) {
        for (var index in arg_array) {
            console.log(arg_array[index])
        };
    };
    ```
___
### Lead by another example
This series builds abstractions on top of abstractions. 
0. A script to concatinate two args.
    ```js
    var string_arg_1 = process.argv.slice(2)[0];
    var string_arg_2 = process.argv.slice(2)[1];
    var new_string = string_arg_1 + ' ' + string_arg_2;
    /// ---------------- becomes ---------------- ///
    function combine_two_strings(arg_1, arg_2) {
        var new_string = string_arg_1 + ' ' + string_arg_2;
        return new_string;
    };
    ```
1. A script to set a string as a property in an object.
    ```js
    var obj = {};
    obj.prop = combine_two_strings(arg_1, arg_2);
    /// ---------------- becomes ---------------- ///
    function add_new_property(obj, prop_name, arg1, arg2) {
        obj[prop_name] = combine_two_strings(arg1, arg2);
        return obj;
    };
    ```

2. A script to combine two string-filled objects.
    ```js
    var obj_1 = {'0': 'a', '1': 'b', '2': 'c'};
    var obj_2 = {'0': 'x', '1': 'y', '2': 'z'};
    var new_obj = {};
    for (var i = 0; i < 3; i++) {
        new_obj[i] = obj_1[i] + obj_2[i]
    };
    /// ---------------- becomes ---------------- ///
    function concatinate_two_objects(obj_1, obj_2) {
        var new_obj = {};
        var i = 0000;
        var shortest = {};
        var longest = {};
        var length_obj_1 = Object.keys(obj_1).length;
        var length_obj_2 = Object.keys(obj_2).length;

        if (length_obj_1 < length_obj_2) {    
            shortest = obj_1;
            longest = obj_2;
        } else { 
            shortest = obj_2;
            longest = obj_1;
        };

        for (i; i < shortest; i++) {
            new_obj[i] = obj_1[i] + obj_2[i];
        };
        for (i; i < longest; i++) {
            new_obj[i] = longest[i];
        };

        return new_obj;
    };    
    ```


In the first example, a simple script was wrapped in a function and made general purpose.  This allows the next example to do everything the first example did without caring how it happens.  
In the second example, a simple script was wrapped in a function and made general purpose.  This allows the next example to do everything the first example did without caring how it happens.  
etc . . .
___
# ABSTRACTION
This is abstraction, everything in programming is abstraction.  jQuery, Express, CSS, they are all tools someone else built so you can make cool stuff without worrying about how it's implemented.  This is largely a good thing, but has a down-side.

The downside is that you can't "figure out" how things work.  With pure JS you can read through it and study it to figure out what the code does.  When reading an Express project or seeing jQuery for the first time, it would takes months of console-logging to figure out how things work. Reading the source code wouldn't be any more productive.  The best way to learn a library is to listen to the person who wrote it.

Documentaiton is the developer's way to tell you how to use their code - args, return values, behavior.  The modules we'll be using in class have good documentation.  Next week when you're struggling with the build project, remind yourself you're learning to use an abstraction someone else wrote for you.
___
## Resources

* [The art of abstraction](https://www.youtube.com/watch?v=p7nGcY73epw)
* [Near to the metal](https://www.youtube.com/watch?v=uNuFVq5QeRk) - some history


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
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
1. a script to set a string as a property in a new object.
    ```js
    var new_obj = {};
    new_obj.prop = combine_two_strings(process.argv.slice(2)[0], process.argv.slice(2)[1]);
    /// ---------------- becomes ---------------- ///
    function build_obj_abstraction(arg_1, arg_2) {
        var new_obj = {};
        new_obj.prop = combine_two_strings(arg_1, arg_2);   
        return new_obj
    };
    ```
2. A script using the _abstraction_ defined above.  This script takes two people and marries them, hyphenated.
    ```js
    var person_1 = { name: 'alex', surname: 'rodriguez' };
    var person_2 = { name: 'sam', surname: 'gopher' };
    var new_person_1 = {};
    // create new person_1
    new_person_1 = args_to_prop_abstraction(person_1.surname, person_2.surname);
    new_person_1.surname = new_person_1.prop;
    delete new_person_1.prop;
    new_person_1.name = person_1.name;
    // create new person_2
    new_person_2 = args_to_prop_abstraction(person_1.surname, person_2.surname);
    new_person_2.surname = new_person_2.prop;
    delete new_person_2.prop;
    new_person_2.name = person_2.name;
    /// ---------------- becomes ---------------- ///
    function marry_two_people(person_1, person_2) {
        // all that stuff above
        return [new_person_1, new_person_2];
    };
    ```
3. From dust we have come, and to dust we shall return.
    ```js
    var main_charecter = {};
    main_charecter.born = true;
    main_charecter.can_walk = true;
    main_charecter.finished_college = true;
    main_charecter = marry_two_people(spouse, main_charecter)[1];
    main_charecter.married = true;
    main_charecter.old = true;
    main_charecter.dead = true;
    for (var prop of main_charecter) {
        delete main_charecter.prop;
    };
    /// ---------------- becomes ---------------- ///
    function life(empty_object) {
        // all the code above
        return main_charecter;
    };
    ```
In the first example, a simple script was wrapped in a function.  This allows the next example to do everything the first example did without caring how it happens.  
In the second example, a simple script was wrapped in a function.  This allows the next example to do everything the first example did without caring how it happens.
e t c . . .
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
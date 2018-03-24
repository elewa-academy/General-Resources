Debugging
===
Debugging is something you do once your code is running and doesn't work right.  but there's a lot you can do to avoid that.

**"plan twice, log once"**

### Prebugging
- Make your code 'transparent'
- debugging is continuous from the first function to the final product. Always check that it works before adding or modifying. (see above: assume nothing, question everything)
- Always write readable code, have your bugs come from misuse of language, confusion with the challenge, ... not from confusion with your own code
- Build in breakpoints, debuggers, and console.logs where you anticipate problems. They remind your future self that this might be a tricky spot and saving it the time of doing this

### Debugging
- tools: debugger, console.log, inspector
- never assume anything. About how your code works, about what an object looks like, ... console.log or debugger everything
- check the resources -> <- do that

debugger
---
The debugger keyword stops the execution of JavaScript, and calls (if available) the debugging function. This has the same function as setting a breakpoint in the debugger. If no debugging is available, the debugger statement has no effect. With the debugger turned on, this code will stop executing before it executes the third line.

```javascript
var x = 15 * 5;
debugger;
document.getElementById("demo").innerHTML = x;
```

chrome console
---
You can open the Chrome Developer tools by clicking on F12. Alternatively, you can open the settings (the three vertical dots in the top right corner), go to "more tools" and click on "Developer Tools".

Go to "Console", where you can run console.log()'s and other chunks of code to test your code.

console logs
---
Console.log()'s are probably the most used statements for debugging your code. When your code doesn't work as expected, add a console.log() to check the value of a variable or the result of a function.

The result of the console.log() statement will be displayed in your web browser's console.

simple tests



___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
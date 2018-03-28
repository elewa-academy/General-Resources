const stackTract = require('stack-trace')
const colors = require('colors')

global.pathTo = {
    view: function(name) {
        return __dirname + "\\..\\app\\" + name;
    },
    model: function(name) {
        return __dirname + "/../app/" + name + "/model/index.js";
    },
    route: function(name) {
        return __dirname + "/../app/" + name + "/routes/index.js";
    },
    app: function(name) {
    return __dirname + "/../app/"+ name;
    },
    nodeRoot: function(name) {
    return __dirname + "/../"+name;
    }
}



global.requireView = function(name) {
    return require(__dirname + "\\..\\app\\" + name);
}

global.requireModel= function(name) {
    return require(__dirname + "/../app/" + name + "/model/index.js");
}

global.requireRoute= function(name) {
    return require(__dirname + "/../app/" + name + "/routes/index.js");
}

global.appRequire= function(name) {
    return require(__dirname + "/../app/"+ name);
}

global.rootRequire= function(name) {
    return require(__dirname + "/../"+name);
}

global.toConsole= function(...args) {
    console.log("------------------------------------------------------------------------------------------------------------------------")
    console.log(stackTract.get()[1].getFileName().yellow + ":" + (stackTract.get()[1].getLineNumber()+"").yellow)
    console.log(("TYPENAME: " + stackTract.get()[1].getTypeName()).cyan, ",", 
                ("METHODNAME: "+ stackTract.get()[1].getMethodName()).cyan )
    args.map((arg)=>console.log("#=>".green, arg))
    console.log()
}

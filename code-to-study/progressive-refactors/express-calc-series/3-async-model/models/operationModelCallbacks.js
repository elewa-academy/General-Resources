// challenge: make your app file work with callbacks

var operationModelCallbacks = {
    operationsDB: {
        add: {
            name: 'add',
            numArgs: 2,
            operation: function(a, b) {
                return a + b;
            }
        },
        subtract: {
            name: 'subtract',
            numArgs: 2,
            operation: function(a, b) {
                return a - b;
            }
        },
        mulitply: {
            name: 'multiply',
            numArgs: 2,
            operation: function(a, b) {
                return a * b;
            }
        },
        divide: {
            name: 'divide',
            numArgs: 2,
            operation: function(a, b) {
                return a / b;
            }
        }
    },
    schema: {
        name: {
            type: "string"
        },
        numArgs: {
            type: "number"
        },
        operation: {
            type: "function"
        }
    },
    // allows users to add new operations to the database
    addOperation: function(newOperation){
        // get the schema keys and types
        //var myObj = opCopier(newOperation);
        var addToSchemaCalc = false;
        var message = "";
        var myObj = opCopier(newOperation);
        for (key in this.schema){
            if (key in newOperation){
                var type = typeof(newOperation[key]);
               // console.log("type: " + type);
                if (type === this.schema[key].type){
                    addToSchemaCalc = true;
                    myObj[key] = myObj[key];
                    }else{
                        message = "Property of wrong type " + this.schema[key].type + " expected";
                        addToSchemaCalc = false;
                        myObj = {};
                        return message;
                    } 
                } else {
                    message = "Missing property, expected " + key;
                    addToSchemaCalc = false;
                    myObj = {};
                    return message;
                }
            }if(addToSchemaCalc){
                this.operationsObj[myObj.name] = myObj;
                message = "Success!"
            }
        // alert(message);
        // alert(JSON.stringify(this.operationsObj));
        return message
    },
    // allows users to use a given operation
    getOperation: function(operationName) {
        var operationToReturn = this.operationsDB[operationName];
        var message = '';
        if(typeof operationToReturn == 'undefined') {
            message = operationName + ' is not an operation';
        } else {
            message = 'success';
        };
        cb(message, operationToReturn);
    }
};

module.exports = operationModelCallbacks;

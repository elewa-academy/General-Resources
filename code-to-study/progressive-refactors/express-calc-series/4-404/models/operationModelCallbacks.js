// challenge: make your app file work with callbacks

var operationModelCallbacks = {
    operationsDB: {
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
    getOperation: function(operationName, cb) {
    	var operationToReturn = this.operationsDB[operationName];
    	var error = null;
    	if(operationToReturn == undefined) {
    		error = 'operation does not exist here';
    	};
        cb(error, operationToReturn);
    }
};

module.exports = operationModelCallbacks;

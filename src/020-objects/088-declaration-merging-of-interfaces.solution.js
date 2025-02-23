var myLogger = {
    log: function (message) {
        console.log(message);
    },
};
myLogger.log("My message", 
// @ts-expect-error Level is NOT needed
123);

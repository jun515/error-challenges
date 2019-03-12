//Fix the error
function myFunction() {
    let myObject = {
        objProperty: 'some text',
        objMethod: function() {
            console.log(myObject);
        }
    };
    myObject.objMethod();
}
myFunction();




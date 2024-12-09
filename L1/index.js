//  in this lecture we learn the basic of the typescript .. why it is type based javascript framework and how can we get the type of all datatypes for that code is below
var allData = function (num1, num2, printresult, someText) {
    if (printresult) {
        return "".concat(someText, " are ").concat(num1 + num2);
    }
    else {
        return num1 + num2;
    }
};
var printesult = true;
var n1 = 1;
var n2 = 2;
var someText = "the result is";
console.log(allData(n1, n2, printesult, someText));
// here upper is the basic example of the code which is upper side first simple code of the javascript

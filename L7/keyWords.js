var Example = /** @class */ (function () {
    function Example() {
        this.publicProperty = "I am public"; // you can access any where you can 
        this.privateProperty = "I am private"; // only access in to the class if you want to access outside the class then use function ir getter setter
    }
    // public method
    Example.prototype.showPublic = function () {
        console.log(this.publicProperty);
    };
    // private method
    Example.prototype.showPrivate = function () {
        console.log(this.privateProperty);
    };
    // static method
    Example.showStatic = function () {
        console.log(this.staticProperty);
    };
    // method to access the private method
    Example.prototype.accessPrivateMethod = function () {
        this.showPrivate();
    };
    Example.staticProperty = "I am static"; // only access by the class name for that code is below 
    return Example;
}());
// create an instace of the Example class
var example = new Example();
example.showPublic();
example.accessPrivateMethod();
Example.showStatic(); // when you use static then you directly access it threw the class dont need to use it threw the instance

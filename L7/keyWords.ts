class Examples {
  public publicProperty: string = "I am public"; // you can access any where you can
  private privateProperty: string = "I am private"; // only access in to the class if you want to access outside the class then use function ir getter setter
  static staticProperty: string = "I am static"; // only access by the class name for that code is below

  // public method
  showPublic(): void {
    console.log(this.publicProperty);
  }

  // private method
  private showPrivate(): void {
    console.log(this.privateProperty);
  }

  // static method
  static showStatic(): void {
    console.log(this.staticProperty);
  }

  // method to access the private method
  accessPrivateMethod(): void {
    this.showPrivate();
  }
}

// create an instace of the Example class
const examples = new Examples();

example.showPublic();
example.accessPrivateMethod();
Example.showStatic(); // when you use static then you directly access it threw the class dont need to use it threw the instance

function User(name) {
  this.name = name;
  this.sayHi = function() {
    alert( "Меня зовут: " + this.name );
  };
}
let john = new User("John");
john.sayHi();

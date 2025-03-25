// JS: Classes

class Car {
    constructor(brand, makeCar) {
        this.brand = brand;
        this.makeCar = makeCar;
    }
}
const car = new Car('Audi', makeCar);
// console.log(car);
// console.log(car.makeCar());
// console.log(Car);

function makeCar() {
   return 'Hi!';
}

/////«Об'єкт параметрів»
class User {
    // Деструктуризуємо об'єкт
    constructor({ name, email, funTree }) {
        this.name = name;
        this.email = email;
        this.funTree = funTree;
        this.init();
    }
    init() {
        console.log('init');
    }
}
console.log(User);

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
  funTree() {
    console.log('Whoa!');
  }
});
// console.log(mango); // { name: "Mango", email: "mango@mail.com", funTree: ƒ }
// mango.funTree(); // Whoa!
console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
    constructor(name, petCount, residence, hobbies) {
        this.name = name;
        this.petCount = petCount;
        this.residence = residence;
        this.hobbies = hobbies;
    }
    addHobby(newHobby){
        this.hobbies.push(newHobby);
    }
    removeHobby(remHobby){
        this.hobbies = this.hobbies.filter((element) => {
            if (element != remHobby){
                return true;
            } else {
                return false;
            }
        });
    }
    greeting(){
        console.log("Hello fellow person!");
    }
    info() {
        console.log(`Name: ${this.name}`);
        console.log(`Pets: ${this.pets}`);
        console.log(`Residence: ${this.residence}`);
        console.log(`Hobbies: ${this.hobbies}`);
      }
    
    soundOff() {
        console.log(`${this.name} is ready to sound off!`);
    }
}

const personTest = new Person("Newt Skimandr", 200, "Suitcase", ["Zoology", "Magic", "Snacks"]);
personTest.addHobby("Traveling");
personTest.removeHobby("Snacks");
console.log(personTest.hobbies);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, petCount, residence, hobbies){
        super();
        this.occupation = "Full Stack Web Developer";
    }

    //overriding
    greeting(){
        console.log("Hello fellow wizard!");
    }
}

const coderTest = new Coder("Gandolf", 0, "Minas Tirith", ["Smoking", "Magic", "Hanging out at the Shire", "Blocking bridges"]);
coderTest.greeting();
coderTest.addHobby("feeding eagles");
console.log(coderTest.hobbies);


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
    constructor() {
      this.result = 0;
    }
  
    add(a, b = this.result) {
      this.result = a + b;
      return this.result;
    }
  
    subtract(a, b = this.result) {
      this.result = a - b;
      return this.result;
    }
  
    multiply(a, b = this.result) {
      this.result = a * b;
      return this.result;
    }
  
    divide(a, b = this.result) {
      if (b === 0) {
        return null;
      }
      this.result = a / b;
      return this.result;
    }
  
    displayResult() {
      console.log(`Result: ${this.result}`);
    }
  }

  const calcTest = new Calculator();
  console.log(calcTest.result);
  calcTest.add(5, 1);
  console.log(calcTest.result);
  calcTest.subtract(5, 1);
  console.log(calcTest.result);
  calcTest.multiply(5, 2);
  console.log(calcTest.result);
  calcTest.divide(5, 0);
  console.log(calcTest.result);
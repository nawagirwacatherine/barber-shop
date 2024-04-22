// Task 1: Code a Person class
class person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
        console.log(person);
    }
    sleep() {
        for (energy = 100; energy > 100; energy+10) {
            console.log("energy is increasing");
        }
    }

    doSomethingFun() {
          for (energy = 100; energy > 100; energy-10){
            console.log("energy is Reducing");
        }
    }


}

// Task 2: Code a Worker class
class worker extends person {
    constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlywage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlywage = hourlywage;
        console.log(worker);
    }
    goTowork() {
        for (xp = 10; this.xp >10; xp++){
            console.log("xp increased");
        }
      
    }
}

// Task 3: Code an intern object, run methodsintern
class intern extends worker {
    constructor(name = "Bob", age = 21, energy = 110, xp = 0, hourlyWage = 10) {
        super(name = "Bob", age = 21, energy = 110, xp = 0, hourlyWage = 10);
    }
   

        
    goTowork() {
        for (xp = 10; this.xp > 10; xp++) {
            console.log("xp increased");
        }
      
    }
    
}
    var intern1 = new Worker();


// Task 4: Code a manager object, methods
class manager extends worker {
    constructor(name = Alice, age = 30, energy = 120, xp = 100, hourlyWage = 30) {
        super(name = Alice, age = 30, energy = 120, xp = 100, hourlyWage = 30);

    }

      doSomethingFun() {
          for (energy = 100; energy > 100; energy-10){
            console.log("energy is Reducing");
        }
    }

}

var manager2 = new manager();
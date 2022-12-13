class Animal {
  
  constructor(name, age, weight){
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.foodWeightAnimal = 0;
    this.adorationDashaMinutes = 0;
  }

  eat(foodWeightAnimal){
    console.log(`${this.name} eats goodies.`);
    this.foodWeightAnimal = foodWeightAnimal;
  }

  adoreDasha(adorationDashaMinutes){
    console.log(`${this.name} admires Dashka's photo.`);
    this.adorationDashaMinutes = adorationDashaMinutes;
  }
}

class Mammals extends Animal {
  constructor(name, age, weight){
    super(name, age, weight);
    this.sexDurationInMinutes = 0;
    this.scratchingMinutes = 0;
  }

  sex(sexDurationInMinutes){
    console.log(`Do not disturb! ${this.name} is having sex.`);
    this.sexDurationInMinutes = sexDurationInMinutes;
  }

  scratch(scratchingMinutes){
    console.log(`${this.name} gets high from scratching.`);
    this.scratchingMinutes = scratchingMinutes;
  }
}

class Birds extends Animal {
  
  constructor(name, age, weight){
    super(name, age, weight);
    this.runningDistance = 0;
    this.scratchingMinutes = 0;
  }

  run(time, speed){
    this.runningDistance = time * speed;
    console.log(`${this.name} runs ${this.runningDistance} km/h.`);
  } 

  scratch(scratchingMinutes){
    console.log(`${this.name} gets high from scratching.`);
    this.scratchingMinutes = scratchingMinutes;
  }
}

class Fishes extends Animal {

  constructor(name, age, weight){
    super(name, age, weight);
    this.swimmingDistance = 0; 
  }

  swim(time, speed){
    this.swimmingDistance = time * speed;    
    console.log(`${this.name} swims ${this.swimmingDistance} km/h.`);
  }

}

class Insects extends Animal { 
  
  constructor(name, age, weight){
    super(name, age, weight);
    this.scratchingMinutes = '';
  }

  scratch(scratchingMinutes){ 
    this.scratchingMinutes = scratchingMinutes;
  }
}

class Hamster extends Mammals {
  maxAge = 2;
  maxWeightBody = 500;
  maxWeightFoodHamster = 50;
  minWeightFoodHamster = 10;
  maxRunningDistance = 10;
  maxScratchingMinutes = 5;
  maxSexDurationInMinutes = 1;
  maxAdorationDashaMinutes = 3;

  constructor(name, age, weight){
    super(name, age, weight);
    this.runningDistance = 0;
  }

  run(time, speed){
    this.runningDistance = time * speed;
    console.log(`${this.name} runs ${this.runningDistance} km/h.`);
  } 

  scratch(scratchingMinutes, partOfTheBodyIsScratched){
    super.scratch(scratchingMinutes);
    
    if(partOfTheBodyIsScratched === 'belly' || partOfTheBodyIsScratched === 'stomach'){
      this.scratchingMinutes *= 2;
    }
  }
 
  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`);
      return false;
    }
    if(this.weight >= this.maxWeightBody){
      console.log(`${this.name} is fat. Time to run.`);
      return false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFoodHamster){
      console.log(`${this.name} overate. You should move.`);
      return false;
    }
    if(this.foodWeightAnimal <= this.minWeightFoodHamster){
      console.log(`${this.name} wants more peanuts.`);
      return false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`);
      return false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`);
      return false;
    }
    if(this.sexDurationInMinutes <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`);
      return false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`);
      return false;
    }
    
    return true;
  }
}

let hamster = new Hamster('Pit', 1, 400);
hamster.eat(12);
hamster.run(10, 4);
hamster.scratch(12);
hamster.sex(5);
hamster.adoreDasha(5);
console.log(hamster.animalIsSatisfied);
console.log('---------------------');

class Dog extends Mammals {
  maxAge = 10;
  minWeightFood = 200;
  maxWeightFood = 600;
  maxRunningDistance = 10;
  maxScratchingMinutes = 15;
  maxSexDurationInMinutes = 3;
  maxAdorationDashaMinutes = 5;
  maxSwimmingDistance = 5;

  constructor(name, age, weight){
    super(name, age, weight);
    this.runningDistance = 0;
    this.swimmingDistance = 0; 
  }

  run(time, speed){
    this.runningDistance = time * speed;
    console.log(`${this.name} runs ${this.runningDistance} km/h.`);
  } 

  swim(time, speed){
    this.swimmingDistance = time * speed;    
    console.log(`${this.name} swims ${this.swimmingDistance} km/h.`);
  }

  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`);
      return false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`);
      return false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more meat.`);
      return false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`);
      return false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`);
      return false;
    }
    if(this.sexDurationInMinutes <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`);
      return false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`);
      return false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`);
      return false;
    }
    
    return true;
  }
}
  
let dog = new Dog('Bulba', 1, 400);
dog.eat(400);
dog.run(10, 4);
dog.scratch(16);
dog.sex(4);
dog.adoreDasha(9);
dog.swim(6, 7);
console.log(dog.animalIsSatisfied);
console.log('-----------------------------');

class Wolf extends Mammals {
  maxAge = 13;
  minWeightFood = 800;
  maxWeightFood = 1500;
  maxRunningDistance = 15;
  maxScratchingMinutes = 5;
  maxSexDurationInMinutes = 5;
  maxAdorationDashaMinutes = 3;
  maxSwimmingDistance = 2;

  constructor(name, age, weight){
    super(name, age, weight);
    this.runningDistance = 0;
    this.swimmingDistance = 0; 
  }

  run(time, speed){
    this.runningDistance = time * speed;
    console.log(`${this.name} runs ${this.runningDistance} km/h.`);
  } 

  swim(time, speed){
    this.swimmingDistance = time * speed;    
    console.log(`${this.name} swims ${this.swimmingDistance} km/h.`);
  }

  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`);
      return false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`);
      return false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more meat.`);
      return false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`);
      return false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`);
      return false;
    }
    if(this.sexDurationInMinutes <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`);
      return false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`);
      return false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`);
      return false;
    }
    
    return true;
  }
}

let wolf = new Wolf('Emby', 4, 400);
wolf.eat(900);
wolf.run(10, 4);
wolf.scratch(16);
wolf.sex(8);
wolf.adoreDasha(9);
wolf.swim(6, 7);
console.log(wolf.animalIsSatisfied);
console.log('-----------------------------');

class Cheetah extends Mammals {
  maxAge = 12;
  minWeightFood = 800;
  maxWeightFood = 1000;
  maxRunningDistance = 15;
  maxScratchingMinutes = 5;
  maxSexDurationInMinutes = 3;
  maxAdorationDashaMinutes = 5;
  maxSwimmingDistance = 2;

  constructor(name, age, weight){
    super(name, age, weight);
    this.runningDistance = 0;
    this.swimmingDistance = 0; 
    this.gettingPleasureInSex = '';
  }

  run(time, speed){
    this.runningDistance = time * speed;
    console.log(`${this.name} runs ${this.runningDistance} km/h.`);
  } 

  swim(time, speed){
    this.swimmingDistance = time * speed;    
    console.log(`${this.name} swims ${this.swimmingDistance} km/h.`);
  }

  sex(sexDurationInMinutes, gettingPleasureInSex){
    super.sex(sexDurationInMinutes);
    this.gettingPleasureInSex = gettingPleasureInSex;
  }

  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`);
      return false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`);
      return false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more meat.`);
      return false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`);
      return false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`);
      return false;
    }
    if(this.sexDurationInMinutes <= this.maxSexDurationInMinutes || this.gettingPleasureInSex != 'yes'){
      console.log(`${this.name} wants more sex.`);
      return false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`);
      return false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`);
      return false;
    }
    
    return true;
  }
}

let chetah = new Cheetah('Anki', 8);
chetah.eat(900);
chetah.run(10, 4);
chetah.scratch(6);
chetah.sex(8, 'yes');
chetah.adoreDasha(9);
chetah.swim(6, 7);
console.log(chetah.animalIsSatisfied);
console.log('-----------------------------');

class Rhinoceros extends Mammals {
  maxAge = 20;
  minWeightFood = 600;
  maxWeightFood = 2000;
  maxRunningDistance = 10;
  maxScratchingMinutes = 10;
  maxSexDurationInMinutes = 5;
  maxAdorationDashaMinutes = 5;
  maxSwimmingDistance = 10;

  constructor(name, age, weight){
    super(name, age, weight);
    this.runningDistance = 0;
    this.swimmingDistance = 0; 
  }

  run(time, speed){
    this.runningDistance = time * speed;
    console.log(`${this.name} runs ${this.runningDistance} km/h.`);
  } 

  swim(time, speed){
    this.swimmingDistance = time * speed;    
    console.log(`${this.name} swims ${this.swimmingDistance} km/h.`);
  }

  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`);
      return false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`);
      return false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more meat.`);
      return false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`);
      return false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`);
      return false;
    }
    if(this.sexDurationInMinutes <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`);
      return false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`);
      return false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`);
      return false;
    }
    
    return true;
  }
}

let rhinoceros = new Rhinoceros('Cuchi', 8);
rhinoceros.eat(900);
rhinoceros.run(10, 4);
rhinoceros.scratch(15);
rhinoceros.sex(8, 'yes');
rhinoceros.adoreDasha(9);
rhinoceros.swim(6, 7);
console.log(rhinoceros.animalIsSatisfied);
console.log('-----------------------------');

class Mole extends Mammals {
  maxAge = 10;
  minWeightFood = 100;
  maxWeightFood = 250;
  maxRunningDistance = 15;
  maxScratchingMinutes = 2;
  maxSexDurationInMinutes = 1;
  maxAdorationDashaMinutes = 2;
  maxSwimmingDistance = 1;

  constructor(name, age, weight){
    super(name, age, weight);
    this.runningDistance = 0;
    this.swimmingDistance = 0; 
  }

  run(time, speed){
    this.runningDistance = time * speed;
    console.log(`${this.name} runs ${this.runningDistance} km/h.`);
  } 

  swim(time, speed){
    this.swimmingDistance = time * speed;    
    console.log(`${this.name} swims ${this.swimmingDistance} km/h.`);
  }

  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`);
      return false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`);
      return false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more worm.`);
      return false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`);
      return false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`);
      return false;
    }
    if(this.sexDurationInMinutes <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`);
      return false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`);
      return false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`);
      return false;
    }
    
    return true;
  }
}

let mole = new Mole('Buka', 3);
mole.eat(200);
mole.run(5, 4);
mole.scratch(4);
mole.sex(2);
mole.adoreDasha(4);
mole.swim(6, 7);
console.log(mole.animalIsSatisfied);
console.log('-----------------------------');

class Hedgehog extends Mammals {
  maxAge = 10;
  minWeightFood = 200;
  maxWeightFood = 500;
  maxRunningDistance = 5;
  maxScratchingMinutes = 10;
  maxSexDurationInMinutes = 2;
  maxAdorationDashaMinutes = 10;
  maxSwimmingDistance = 2;

  constructor(name, age, weight){
    super(name, age, weight);
    this.runningDistance = 0;
    this.swimmingDistance = 0; 
  }

  run(time, speed){
    this.runningDistance = time * speed;
    console.log(`${this.name} runs ${this.runningDistance} km/h.`);
  } 

  swim(time, speed){
    this.swimmingDistance = time * speed;    
    console.log(`${this.name} swims ${this.swimmingDistance} km/h.`);
  }
  
  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`);
      return false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`);
      return false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more meat or milk.`);
      return false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`);
      return false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`);
      return false;
    }
    if(this.sexDurationInMinutes <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`);
      return false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`);
      return false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`);
      return false;
    }
    
    return true;
  }
}

let hedgehog = new Hedgehog('Kiki', 3);
hedgehog.eat(300);
hedgehog.run(5, 4);
hedgehog.scratch(16);
hedgehog.sex(3);
hedgehog.adoreDasha(18);
hedgehog.swim(6, 7);
console.log(hedgehog.animalIsSatisfied);
console.log('-----------------------------');

class Dolphin extends Mammals{
  maxAge = 18;
  minWeightFood = 300;
  maxWeightFood = 2500;
  maxScratchingMinutes = 4;
  maxSexDurationInMinutes = 9;
  maxAdorationDashaMinutes = 10;
  maxSwimmingDistance = 10;

  constructor(name, age, weight){
    super(name, age, weight);
    this.swimmingDistance = 0; 
    this.gettingPleasureInSex = '';
  }

  swim(time, speed){
    this.swimmingDistance = time * speed;    
    console.log(`${this.name} swims ${this.swimmingDistance} km/h.`);
  }

  sex(sexDurationInMinutes, gettingPleasureInSex){
    super.sex(sexDurationInMinutes);
    this.gettingPleasureInSex = gettingPleasureInSex;
  }

  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`);
      return false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`);
      return false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more meat.`);
      return false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`);
      return false;
    }
    if(this.SexDurationInMinutes <= this.maxSexDurationInMinutes || this.gettingPleasureInSex != 'yes'){
      console.log(`${this.name} wants more sex.`);
      return false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`);
      return false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`);
      return false;
    }
    
    return true;
  }
}

let dolphin = new Dolphin('Vladistol', 8);
dolphin.eat(900);
dolphin.scratch(6);
dolphin.sex(10, 'yes');
dolphin.adoreDasha(17);
dolphin.swim(6, 7);
console.log(dolphin.animalIsSatisfied);
console.log('-----------------------------');

class Ostrich extends Birds{
  maxWeightBody = 8000;
  minWeightFood = 400;
  maxWeightFood = 1800;
  maxRunningDistance = 15;
  maxScratchingMinutes = 5;
  maxAdorationDashaMinutes = 4;
  maxSwimmingDistance = 2;

  constructor(name, age, weight){
    super(name, age, weight);
    this.swimmingDistance = 0; 
  }

  swim(time, speed){
   this.swimmingDistance = time * speed;    
   console.log(`${this.name} swims ${this.swimmingDistance} km/h.`);
  }
  
  get animalIsSatisfied(){
    if(this.weight >= this.maxWeightBody){
      console.log(`${this.name} is fat. Time to run.`);
      return false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`);
      return false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more grain or corn.`);
      return false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`);
      return false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`);
      return false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`);
      return false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`);
      return false;
    }
     
    return true;
  }
}

let ostrich = new Ostrich('Marta', 3);
ostrich.eat(800);
ostrich.run(5, 4);
ostrich.scratch(16);
ostrich.adoreDasha(18);
ostrich.swim(6, 7);
console.log(ostrich.animalIsSatisfied);
console.log('-----------------------------');

class Duck extends Birds{
  maxAge = 10;
  minWeightFood = 100;
  maxRunningDistance = 2;
  maxFlyingDistance = 10;
  maxAdorationDashaMinutes = 15;
  maxSwimmingDistance = 10;

  constructor(name, age, weight){
    super(name, age, weight);
    this.flyingDistance = 0;
    this.swimmingDistance = 0; 
  }

  fly(time, speed){
    this.flyingDistance = time * speed;
    console.log(`${this.name} flies ${this.flyingDistance} km/h`);
  }

  swim(time, speed){
    this.swimmingDistance = time * speed;    
    console.log(`${this.name} swims ${this.swimmingDistance} km/h.`);
  }

  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`);
      return false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more fish or grain.`);
      return false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`);
      return false;
    }
    if(this.flyingDistance <= this.maxFlyingDistance){
      console.log(`${this.name} wants to fly more.`);
      return false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`);
      return false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`);
      return false;
    }
    
    return true;
  }
}

let duck = new Duck('Mak', 3);
duck.eat(800);
duck.run(5, 4);
duck.adoreDasha(18);
duck.swim(6, 7);
duck.fly(61, 1);
console.log(duck.animalIsSatisfied);
console.log('-----------------------------');

class Hummingbird extends Birds{
  maxWeightBody = 500;
  minWeightFood = 50;
  maxWeightFood = 200;
  maxRunningDistance = 2;
  maxFlyingDistance = 15;
  maxScratchingMinutes = 5;
  maxAdorationDashaMinutes = 3;

  constructor(name, age, weight){
    super(name, age, weight);
    this.flyingDistance = 0;
  }

  fly(time, speed){
    this.flyingDistance = time * speed;
    console.log(`${this.name} flies ${this.flyingDistance} km/h`);
  }

  get animalIsSatisfied(){
    if(this.weight >= this.maxWeightBody){
      console.log(`${this.name} is fat. Time to run.`);
      return false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`);
      return false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more worm or grain.`);
      return false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`);
      return false;
    }
    if(this.flyingDistance <= this.maxFlyingDistance){
      console.log(`${this.name} wants to fly more.`);
      return false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`);
      return false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`);
      return false;
    }
    
    return true;
  }
}

let hummingbird = new Hummingbird('Hemin', 3);
hummingbird.eat(70);
hummingbird.adoreDasha(18);
hummingbird.run(14, 1);
hummingbird.fly(16, 1);
hummingbird.scratch(7);
console.log(hummingbird.animalIsSatisfied);
console.log('-----------------------------');

class Bee extends Insects{
  maxAge = 10;
  minWeightFood = 5;
  maxWeightFood = 20;
  maxRunningDistance = 1;
  maxFlyingDistance = 10;
  maxAdorationDashaMinutes = 2;
  maxCollectedNectar = 40;

  constructor(name, age, weight){
    super(name, age, weight);
    this.flyingDistance = 0;
    this.runningDistance = 0;
    this.collectedNectar = 0;
  }
  
  fly(time, speed){
    this.flyingDistance = time * speed;
    console.log(`${this.name} flies ${this.flyingDistance} km/h`);
  }
  
  run(time, speed){
    this.runningDistance = time * speed;
    console.log(`${this.name} runs ${this.runningDistance} km/h.`);
  } 

  collectHoney(flowersNumbers, distance){
    console.log(`${this.name} collects honey`);

    let nectarAmountinOneFlowers = 3;
    let lossDistanceOneMgNectar = 10;
    this.collectedNectar = flowersNumbers * nectarAmountinOneFlowers - distance / lossDistanceOneMgNectar;
  }

  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is fat. Time to run.`);
      return false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`);
      return false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more nectar.`);
      return false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`);
      return false;
    }
    if(this.flyingDistance <= this.maxFlyingDistance){
      console.log(`${this.name} wants to fly more.`);
      return false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`);
      return false;
    }
    if(this.collectedNectar <= this.maxCollectedNectar){
      console.log(`${this.name} wants to collect more nectar.`);
      return false;
    }
    if(this.scratchingMinutes === 'yes'){
      console.log(`${this.name} does not like to be scratched.`);
      return false;
    }
    
    return true;
  }
}

let bee = new Bee('Pipi');
bee.collectHoney(20, 10);
bee.eat(10);
bee.adoreDasha(18);
bee.run(14, 1);
bee.fly(1, 16);
bee.scratch('');
console.log(bee.animalIsSatisfied);
console.log('-----------------------------');

class Crucian extends Fishes{
  maxAge = 10;
  minWeightFood = 20;
  maxWeightFood = 100;
  maxAdorationDashaMinutes = 3;
  maxSwimmingDistance = 15;

  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`);
      return false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more squid.`);
      return false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`);
      return false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`);
      return false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`);
      return false;
    }
    
    return true;
  }
}

let crucian = new Crucian('Nemo', 6);
crucian.eat(80);
crucian.adoreDasha(18);
crucian.swim(6, 7);
console.log(crucian.animalIsSatisfied);
console.log('-----------------------------');

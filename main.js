// Вказані значення в умовах задоволення визначені в грамах, хвилинах, та роках

class Animal {
  
  constructor(name, age, weight){
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.foodWeightAnimal = 0;
    this.runningDistance = 0;
    this.scratchingMinutes = 0;
    this.sexDuration = 0;
    this.adorationDashaMinutes = 0;
    this.swimmingDistance = 0; 
  }

  eat(foodWeight){
    console.log(`${this.name} eats goodies.`);
    this.foodWeightAnimal = foodWeight;

    return foodWeight;
  }

  sex(sexDurationInMinutes){
    console.log(`Do not disturb! ${this.name} is having sex.`)
    this.sexDuration = sexDurationInMinutes;

    return this.sexDuration;
  }

  adoreDasha(adorationMinutes){
    console.log(`${this.name} admires Dashka's photo.`)
    this.adorationDashaMinutes = adorationMinutes;

    return this.adorationDashaMinutes;
  }

  run(time, speed){
    this.runningDistance = time * speed;
    console.log(`${this.name} runs ${this.runningDistance} km/h.`);

    return this.runningDistance;
  } 

  swim(time, speed){
    this.swimmingDistance = time * speed;    
    console.log(`${this.name} swims ${this.swimmingDistance} km/h.`)

    return this.swimmingDistance;
  }

  scratch(minutes){
    console.log(`${this.name} gets high from scratching.`)
    this.scratchingMinutes = minutes;

    return this.scratchingMinutes;
  }

}

class Mammals extends Animal {

  scratch(scratchingMinutes, partOfTheBodyIsScratched){
    super.scratch(scratchingMinutes);
    
    if(partOfTheBodyIsScratched === 'belly' || partOfTheBodyIsScratched === 'stomach' || partOfTheBodyIsScratched === 'ear'){
      return  this.scratchingMinutes *= 2;
    }

    return  this.scratchingMinutes;
  }
}

class Birds extends Animal {
  
  constructor(name, age, weight){
    super(name, age, weight);
    this.flyingDistance = 0;
  }

  fly(time, speed){
    this.flyingDistance = time * speed;
    console.log(`${this.name} flies ${this.flyingDistance} km/h`)

    return this.flyingDistance;
  }
}

class Fishes extends Animal {

 scratch(scratchingMinutes, partOfTheBodyIsScratched){
    super.scratch(scratchingMinutes);
    
    if(partOfTheBodyIsScratched === 'neck'){
      return  this.scratchingMinutes *= 3;
    }
    
    return  this.scratchingMinutes;
  }
}

class Insects extends Animal {

  fly(time, speed){
    this.distance = time * speed;
    console.log(`${this.name} flies ${this.distance} km/h`)

    return this.distance;
  }

  scratch(scratchingMinutes){
    super.scratch(scratchingMinutes);
    console.log(`${this.name} does not like to be scratched.`)
    
    return this.scratchingMinutes = 0;
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
 
  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`)
      return this.satisfactionIndex = false;
    }
    if(this.weight >= this.maxWeightBody){
      console.log(`${this.name} is fat. Time to run.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFoodHamster){
      console.log(`${this.name} overate. You should move.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal <= this.minWeightFoodHamster){
      console.log(`${this.name} wants more peanuts.`)
      return this.satisfactionIndex = false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`)
      return this.satisfactionIndex = false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`)
      return this.satisfactionIndex = false;
    }
    if(this.sexDuration <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`)
      return this.satisfactionIndex = false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`)
      return this.satisfactionIndex = false;
    }
    
    return this.satisfactionIndex = true;
  }
}

let hamster = new Hamster('Pit', 1, 400);
hamster.eat(12);
hamster.run(10, 4);
hamster.scratch(12);
hamster.sex(4);
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

  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more meat.`)
      return this.satisfactionIndex = false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`)
      return this.satisfactionIndex = false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`)
      return this.satisfactionIndex = false;
    }
    if(this.sexDuration <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`)
      return this.satisfactionIndex = false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`)
      return this.satisfactionIndex = false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`)
      return this.satisfactionIndex = false;
    }
    
    return this.satisfactionIndex = true;
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

  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more meat.`)
      return this.satisfactionIndex = false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`)
      return this.satisfactionIndex = false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`)
      return this.satisfactionIndex = false;
    }
    if(this.sexDuration <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`)
      return this.satisfactionIndex = false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`)
      return this.satisfactionIndex = false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`)
      return this.satisfactionIndex = false;
    }
    
    return this.satisfactionIndex = true;
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

  sex(sexDurationInMinutes, gettingPleasure){
    super.sex(sexDurationInMinutes);
    if(gettingPleasure === 'no'){
      return this.sexDuration = 0;;
    } 

    return this.sexDuration;
  }

  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more meat.`)
      return this.satisfactionIndex = false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`)
      return this.satisfactionIndex = false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`)
      return this.satisfactionIndex = false;
    }
    if(this.sexDuration <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`)
      return this.satisfactionIndex = false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`)
      return this.satisfactionIndex = false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`)
      return this.satisfactionIndex = false;
    }
    
    return this.satisfactionIndex = true;
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

  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more meat.`)
      return this.satisfactionIndex = false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`)
      return this.satisfactionIndex = false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`)
      return this.satisfactionIndex = false;
    }
    if(this.sexDuration <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`)
      return this.satisfactionIndex = false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`)
      return this.satisfactionIndex = false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`)
      return this.satisfactionIndex = false;
    }
    
    return this.satisfactionIndex = true;
  }
}

let rhinoceros = new Rhinoceros('Cuchi', 8);
rhinoceros.eat(900);
rhinoceros.run(10, 4);
rhinoceros.scratch(15);
rhinoceros.sex(8);
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

  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more worm.`)
      return this.satisfactionIndex = false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`)
      return this.satisfactionIndex = false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`)
      return this.satisfactionIndex = false;
    }
    if(this.sexDuration <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`)
      return this.satisfactionIndex = false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`)
      return this.satisfactionIndex = false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`)
      return this.satisfactionIndex = false;
    }
    
    return this.satisfactionIndex = true;
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
  
  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more meat or milk.`)
      return this.satisfactionIndex = false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`)
      return this.satisfactionIndex = false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`)
      return this.satisfactionIndex = false;
    }
    if(this.sexDuration <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`)
      return this.satisfactionIndex = false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`)
      return this.satisfactionIndex = false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`)
      return this.satisfactionIndex = false;
    }
    
    return this.satisfactionIndex = true;
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

class Ostrich extends Birds{
   maxWeightBody = 8000;
   minWeightFood = 400;
   maxWeightFood = 1800;
   maxRunningDistance = 15;
   maxScratchingMinutes = 5;
   maxSexDurationInMinutes = 2;
   maxAdorationDashaMinutes = 4;
   maxSwimmingDistance = 2;
 
   get animalIsSatisfied(){
     if(this.weight >= this.maxWeightBody){
      console.log(`${this.name} is fat. Time to run.`)
      return this.satisfactionIndex = false;
     }
     if(this.foodWeightAnimal >= this.maxWeightFood){
       console.log(`${this.name} overate. You should move.`)
       return this.satisfactionIndex = false;
     }
     if(this.foodWeightAnimal <= this.minWeightFood){
       console.log(`${this.name} wants more grain or corn.`)
       return this.satisfactionIndex = false;
     }
     if(this.runningDistance <= this.maxRunningDistance){
       console.log(`${this.name} wants to run more.`)
       return this.satisfactionIndex = false;
     }
     if(this.scratchingMinutes <= this.maxScratchingMinutes){
       console.log(`${this.name} wants to scratch more.`)
       return this.satisfactionIndex = false;
     }
     if(this.sexDuration <= this.maxSexDurationInMinutes){
       console.log(`${this.name} wants more sex.`)
       return this.satisfactionIndex = false;
     }
     if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
       console.log(`${this.name} wants to be with Dasha.`)
       return this.satisfactionIndex = false;
     }
     if(this.swimmingDistance <= this.maxSwimmingDistance){
       console.log(`${this.name} wants to swim more.`)
       return this.satisfactionIndex = false;
     }
     
     return this.satisfactionIndex = true;
   }
}

let ostrich = new Ostrich('Marta', 3);
ostrich.eat(800);
ostrich.run(5, 4);
ostrich.scratch(16);
ostrich.sex(3);
ostrich.adoreDasha(18);
ostrich.swim(6, 7);
console.log(ostrich.animalIsSatisfied);
console.log('-----------------------------');

class Duck extends Birds{
  maxAge = 10;
  minWeightFood = 100;
  maxRunningDistance = 2;
  maxFlyingDistance = 10;
  maxSexDurationInMinutes = 1;
  maxAdorationDashaMinutes = 15;
  maxSwimmingDistance = 10;
  
  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more fish or grain.`)
      return this.satisfactionIndex = false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`)
      return this.satisfactionIndex = false;
    }
    if(this.flyingDistance <= this.maxFlyingDistance){
      console.log(`${this.name} wants to fly more.`)
      return this.satisfactionIndex = false;
    }
    if(this.sexDuration <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`)
      return this.satisfactionIndex = false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`)
      return this.satisfactionIndex = false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`)
      return this.satisfactionIndex = false;
    }
    
    return this.satisfactionIndex = true;
  }
}

let duck = new Duck('Mak', 3);
duck.eat(800);
duck.run(5, 4);
duck.sex(3);
duck.adoreDasha(18);
duck.swim(6, 7);
duck.fly(6, 1);
console.log(duck.animalIsSatisfied);
console.log('-----------------------------');

class Hummingbird extends Birds{
  maxWeightBody = 500;
  minWeightFood = 50;
  maxWeightFood = 200;
  maxRunningDistance = 2;
  maxFlyingDistance = 15;
  maxSexDurationInMinutes = 1;
  maxAdorationDashaMinutes = 3;

  get animalIsSatisfied(){
    if(this.weight >= this.maxWeightBody){
      console.log(`${this.name} is fat. Time to run.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more worm or grain.`)
      return this.satisfactionIndex = false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`)
      return this.satisfactionIndex = false;
    }
    if(this.flyingDistance <= this.maxFlyingDistance){
      console.log(`${this.name} wants to fly more.`)
      return this.satisfactionIndex = false;
    }
    if(this.sexDuration <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`)
      return this.satisfactionIndex = false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`)
      return this.satisfactionIndex = false;
    }
    
    return this.satisfactionIndex = true;
  }
}

let hummingbird = new Hummingbird('Hemin', 3);
hummingbird.eat(70);
hummingbird.sex(3);
hummingbird.adoreDasha(18);
hummingbird.run(14, 1);
hummingbird.fly(1, 1);
console.log(hummingbird.animalIsSatisfied);
console.log('-----------------------------');

class Bee extends Insects{
  maxAge = 10;
  minWeightFood = 5;
  maxWeightFood = 20;
  maxRunningDistance = 1;
  maxFlyingDistance = 10;
  maxSexDurationInMinutes = 2;
  maxAdorationDashaMinutes = 2;
  maxCollectedNectar = 40;

  constructor(name, age, weight){
    super(name, age, weight);
    this.collectedNectar = 0;
  }

  collectHoney(flowersNumbers, distance){
    console.log(`${this.name} collects honey`)

    let nectarAmountinOneFlowers = 3;
    let lossDistanceOneMgNectar = 10;
    this.collectedNectar = flowersNumbers * nectarAmountinOneFlowers - distance / lossDistanceOneMgNectar;
   
    return this.collectedNectar;
  }

  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is fat. Time to run.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more nectar.`)
      return this.satisfactionIndex = false;
    }
    if(this.runningDistance <= this.maxRunningDistance){
      console.log(`${this.name} wants to run more.`)
      return this.satisfactionIndex = false;
    }
    if(this.flyingDistance <= this.maxFlyingDistance){
      console.log(`${this.name} wants to fly more.`)
      return this.satisfactionIndex = false;
    }
    if(this.sexDuration <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`)
      return this.satisfactionIndex = false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`)
      return this.satisfactionIndex = false;
    }
    if(this.collectedNectar <= this.maxCollectedNectar){
      console.log(`${this.name} wants to collect more nectar.`)
      return this.satisfactionIndex = false;
    }
    
    return this.satisfactionIndex = true;
  }
}

let bee = new Bee('Pipi');
bee.collectHoney(20, 10);
bee.eat(10);
bee.sex(3);
bee.adoreDasha(18);
bee.run(14, 1);
bee.fly(1, 16);
console.log(bee.animalIsSatisfied);
console.log('-----------------------------');


class Dolphin extends Fishes{
  maxAge = 18;
  minWeightFood = 300;
  maxWeightFood = 2500;
  maxScratchingMinutes = 4;
  maxSexDurationInMinutes = 9;
  maxAdorationDashaMinutes = 10;
  maxSwimmingDistance = 10;

  sex(sexDurationInMinutes, gettingPleasure){
    super.sex(sexDurationInMinutes);
    if(gettingPleasure === 'no'){
      return this.sexDuration = 0;
    } 

    return this.sexDuration;
  }

  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`)
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more meat.`)
      return this.satisfactionIndex = false;
    }
    if(this.scratchingMinutes <= this.maxScratchingMinutes){
      console.log(`${this.name} wants to scratch more.`)
      return this.satisfactionIndex = false;
    }
    if(this.sexDuration <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`)
      return this.satisfactionIndex = false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`)
      return this.satisfactionIndex = false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`)
      return this.satisfactionIndex = false;
    }
    
    return this.satisfactionIndex = true;
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

class Crucian extends Fishes{
  maxAge = 10;
  minWeightFood = 20;
  maxWeightFood = 100;
  maxSexDurationInMinutes = 2;
  maxAdorationDashaMinutes = 3;
  maxSwimmingDistance = 15;

  get animalIsSatisfied(){
    if(this.age >= this.maxAge){
      console.log(`${this.name} is old.`);
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal <= this.minWeightFood){
      console.log(`${this.name} wants more squid.`);
      return this.satisfactionIndex = false;
    }
    if(this.foodWeightAnimal >= this.maxWeightFood){
      console.log(`${this.name} overate. You should move.`);
      return this.satisfactionIndex = false;
    }
    if(this.sexDuration <= this.maxSexDurationInMinutes){
      console.log(`${this.name} wants more sex.`);
      return this.satisfactionIndex = false;
    }
    if(this.adorationDashaMinutes <= this.maxAdorationDashaMinutes){
      console.log(`${this.name} wants to be with Dasha.`);
      return this.satisfactionIndex = false;
    }
    if(this.swimmingDistance <= this.maxSwimmingDistance){
      console.log(`${this.name} wants to swim more.`);
      return this.satisfactionIndex = false;
    }
    
    return this.satisfactionIndex = true;
  }
}

let crucian = new Crucian('Nemo', 6);
crucian.eat(80);
crucian.sex(3);
crucian.adoreDasha(18);
crucian.swim(6, 7);
console.log(crucian.animalIsSatisfied);
console.log('-----------------------------');

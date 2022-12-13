
class Animal {
  
  constructor(name, age, weight, eat, sex, adoreDasha){
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.eat = eat;
    this.sex = sex;
    this.adoreDasha = adoreDasha;
    this.satisfactionIndex = true;
  }
}

class Hamster extends Animal {
  
  constructor(name, age, weight, eat, sex, adoreDasha, run, scratch){
    super(name, age, weight, eat, sex, adoreDasha);
    this.run = run;
    this.scratch = scratch;
  }

  get animalIsSatisfied(){
    return this.satisfactionIndex;
  }

  set animalIsSatisfied(value){
    if(this.age < 2 && this.weight <= 500 && this.eat >= 70 && this.eat <= 100 && this.sex >= 1 && this.adoreDasha >= 3 && this.run >= 10 && this.scratch >= 5){
      return this.satisfactionIndex = true;
    }
    this.satisfactionIndex = false;
  }
}

class Dog extends Hamster{

  constructor(name, age, weight, eat, sex, adoreDasha, run, scratch, swim){
    super(name, age, weight, eat, sex, adoreDasha, run, scratch);
    this.swim = swim;
  }

  get animalIsSatisfied(){
    return this.satisfactionIndex;
  }
  
  set animalIsSatisfied(value){
    if(this.age <= 10 && this.eat >= 200 && this.sex >= 3 && this.adoreDasha >= 5 && this.run >= 10 && this.scratch >= 15 && this.swim <= 5){
      return this.satisfactionIndex = true;
    }
    this.satisfactionIndex = false;
  }
}

class Wolf extends Dog{

  get animalIsSatisfied(){
    return this.satisfactionIndex;
  }
  
  set animalIsSatisfied(value){
    if(this.age <= 13 && this.eat >= 800 && this.eat <= 1500 && this.sex >= 5 && this.adoreDasha >= 3 && this.run >= 15 && this.scratch >= 5 && this.swim <= 2){
      return this.satisfactionIndex = true;
    }
    this.satisfactionIndex = false;
  }
}
class Cheetah extends Dog{

  get animalIsSatisfied(){
    return this.satisfactionIndex;
  }
  
  set animalIsSatisfied(value){
    if(this.age <= 12 && this.eat >= 800 && this.eat <= 1000 && this.sex >= 3 && this.adoreDasha >= 5 && this.run >= 15 && this.scratch >= 5 && this.swim <= 1){
      return this.satisfactionIndex = true;
    }
    this.satisfactionIndex = false;
  }
}

class Rhinoceros extends Dog{
  
  get animalIsSatisfied(){
    return this.satisfactionIndex;
  }
  
  set animalIsSatisfied(value){
    if(this.age <= 20 && this.eat >= 600 && this.eat <= 2000 && this.sex >= 5 && this.adoreDasha >= 5 && this.run >= 10 && this.scratch >= 10 && this.swim <= 10){
      return this.satisfactionIndex = true;
    }
    this.satisfactionIndex = false;
  }
}

class Mole extends Dog{
 
  get animalIsSatisfied(){
    return this.satisfactionIndex;
  }
  
  set animalIsSatisfied(value){
    if(this.age <= 10 && this.eat >= 100 && this.eat <= 250 && this.sex >= 1 && this.adoreDasha >= 2 && this.run >= 15 && this.scratch >= 2 && this.swim <= 1){
      return this.satisfactionIndex = true;
    }
    this.satisfactionIndex = false;
  }
}

class Hedgehog extends Dog{
 
  get animalIsSatisfied(){
    return this.satisfactionIndex;
  }
  
  set animalIsSatisfied(value){
    if(this.age <= 10 && this.eat >= 200 && this.eat <= 500 && this.sex >= 2 && this.adoreDasha >= 10 && this.run >= 5 && this.scratch >= 10 && this.swim <= 2){
      return this.satisfactionIndex = true;
    }
    this.satisfactionIndex = false;
  }
}

class Ostrich extends Dog{
  
  get animalIsSatisfied(){
    return this.satisfactionIndex;
  }
  
  set animalIsSatisfied(value){
    if(this.weight >= 4000 && this.eat >= 400 && this.eat <= 1800  && this.sex >= 2 && this.adoreDasha >= 4 && this.run >= 15 && this.swim <= 2 && this.scratch >= 5){
      return this.satisfactionIndex = true;
    }
    this.satisfactionIndex = false;
  }
}

class Crucian extends Animal{
  constructor(name, age, weight, eat, sex, adoreDasha, swim){
    super(name, age, weight, eat, sex, adoreDasha);
    this.swim = swim;
  }
  
  get animalIsSatisfied(){
    return this.satisfactionIndex;
  }
  
  set animalIsSatisfied(value){
    if(this.age <= 10 && this.eat >= 20 && this.eat <= 100  && this.sex >= 2 && this.adoreDasha >= 3 && this.swim <= 15){
      return this.satisfactionIndex = true;
    }
    this.satisfactionIndex = false;
  }
}

class Dolphin extends Crucian{
  constructor(name, age, weight, eat, sex, adoreDasha, swim, scratch){
    super(name, age, weight, eat, sex, adoreDasha, swim);
    this.scratch = scratch;
  }

  get animalIsSatisfied(){
    return this.satisfactionIndex;
  }
  
  set animalIsSatisfied(value){
    if(this.age <= 18 && this.eat >= 300 && this.eat <= 2500  && this.sex >= 9 && this.adoreDasha >= 10 && this.swim <= 10 && this.scratch >= 4){
      return this.satisfactionIndex = true;
    }
    this.satisfactionIndex = false;
  }
}

class Hummingbird extends Animal{
  constructor(name, age, weight, eat, sex, adoreDasha, run, fly){
    super(name, age, weight, eat, sex, adoreDasha);
    this.run = run;
    this.fly = fly;
  }

  get animalIsSatisfied(){
    return this.satisfactionIndex;
  }
  
  set animalIsSatisfied(value){
    if(this.weight <= 500 && this.eat >= 50 && this.eat <= 200 && this.sex >= 1 && this.adoreDasha >= 3 && this.run >= 2 && this.fly >= 15){
      return this.satisfactionIndex = true;
    }
    this.satisfactionIndex = false;
  }
}

class Duck extends Hummingbird{
  constructor(name, age, weight, eat, sex, adoreDasha, run, fly, swim){
    super(name, age, weight, eat, sex, adoreDasha, run, fly);
    this.swim = swim;
  }
  
  get animalIsSatisfied(){
    return this.satisfactionIndex;
  }
  
  set animalIsSatisfied(value){
    if(this.age <= 10 && this.eat >= 100 && this.sex >= 1 && this.adoreDasha >= 15 && this.run >= 2 && this.fly >= 15 && this.swim <= 10){
      return this.satisfactionIndex = true;
    }
    this.satisfactionIndex = false;
  }
}

class Bee extends Hummingbird{
  constructor(name, age, weight, eat, sex, adoreDasha, fly, run, collectHoney){
    super(name, age, weight, eat, sex, adoreDasha, fly);
    this.run = run;
    this.collectHoney = collectHoney;
  }

  get animalIsSatisfied(){
    return this.satisfactionIndex;
  }
  
  set animalIsSatisfied(value){
    if(this.age <= 10 && this.eat >= 5 && this.eat <= 20 && this.sex >= 2 && this.adoreDasha >= 2 && this.run >= 1 && this.fly >= 10 && this.collectHoney <= 10){
      return this.satisfactionIndex = true;
    }
    this.satisfactionIndex = false;
  }
}


// Також розглядала варіант об'єднати усі характеристики тварин в один клас Animal, 
// проте це може бути не зручно під час присвоєння значень
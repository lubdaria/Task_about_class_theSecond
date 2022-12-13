// Вказані значення в умовах задоволення визначені в грамах, хвилинах, та роках

class Animal {
  
  constructor(name, age, weight, eat, sex, adoreDasha){
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.eat = eat;
    this.sex = sex;
    this.adoreDasha = adoreDasha;
  }

  animalIsSatisfied(){
    if(this.checkTermsSatisfied()){
      return this.satisfactionIndex = true;
    }
    return this.satisfactionIndex = false;
  }

}

class Hamster extends Animal {
  
  constructor(name, age, weight, eat, sex, adoreDasha, run, scratch){
    super(name, age, weight, eat, sex, adoreDasha);
    this.run = run;
    this.scratch = scratch;
  }

  checkTermsSatisfied(){
    return this.age < 2 && this.weight <= 500 && this.eat >= 70 && this.eat <= 100 && this.sex >= 1 && this.adoreDasha >= 3 && this.run >= 10 && this.scratch >= 5;
  }
}

class Dog extends Animal {

  constructor(name, age, weight, eat, sex, adoreDasha, run, scratch, swim){
    super(name, age, weight, eat, sex, adoreDasha);
    this.run = run;
    this.scratch = scratch;
    this.swim = swim;
  }

  checkTermsSatisfied(){
    return this.age <= 10 && this.eat >= 200 && this.eat <= 600 && this.sex >= 3 && this.adoreDasha >= 5 && this.run >= 10 && this.scratch >= 15 && this.swim <= 5;
  }
}

class Wolf extends Animal{

  constructor(name, age, weight, eat, sex, adoreDasha, run, scratch, swim){
    super(name, age, weight, eat, sex, adoreDasha);
    this.run = run;
    this.scratch = scratch;
    this.swim = swim;
  }

  checkTermsSatisfied(){
    return this.age <= 13 && this.eat >= 800 && this.eat <= 1500 && this.sex >= 5 && this.adoreDasha >= 3 && this.run >= 15 && this.scratch >= 5 && this.swim <= 2;
  }
}

class Cheetah extends Animal{
  constructor(name, age, weight, eat, sex, adoreDasha, run, scratch, swim){
    super(name, age, weight, eat, sex, adoreDasha);
    this.run = run;
    this.scratch = scratch;
    this.swim = swim;
  }

  checkTermsSatisfied(){
    return this.age <= 12 && this.eat >= 800 && this.eat <= 1000 && this.sex >= 3 && this.adoreDasha >= 5 && this.run >= 15 && this.scratch >= 5 && this.swim <= 1;
  }
}

class Rhinoceros extends Animal{
  constructor(name, age, weight, eat, sex, adoreDasha, run, scratch, swim){
    super(name, age, weight, eat, sex, adoreDasha);
    this.run = run;
    this.scratch = scratch;
    this.swim = swim;
  }

  checkTermsSatisfied(){
    return this.age <= 20 && this.eat >= 600 && this.eat <= 2000 && this.sex >= 5 && this.adoreDasha >= 5 && this.run >= 10 && this.scratch >= 10 && this.swim <= 10;
  }
}

class Mole extends Animal{
  constructor(name, age, weight, eat, sex, adoreDasha, run, scratch, swim){
    super(name, age, weight, eat, sex, adoreDasha);
    this.run = run;
    this.scratch = scratch;
    this.swim = swim;
  }

  checkTermsSatisfied(){
    return this.age <= 10 && this.eat >= 100 && this.eat <= 250 && this.sex >= 1 && this.adoreDasha >= 2 && this.run >= 15 && this.scratch >= 2 && this.swim <= 1;
  }
}

class Hedgehog extends Animal{
  constructor(name, age, weight, eat, sex, adoreDasha, run, scratch, swim){
    super(name, age, weight, eat, sex, adoreDasha);
    this.run = run;
    this.scratch = scratch;
    this.swim = swim;
  }

  checkTermsSatisfied(){
    return this.age <= 10 && this.eat >= 200 && this.eat <= 500 && this.sex >= 2 && this.adoreDasha >= 10 && this.run >= 5 && this.scratch >= 10 && this.swim <= 2;
  }
}

class Ostrich extends Animal{
  constructor(name, age, weight, eat, sex, adoreDasha, run, scratch, swim){
    super(name, age, weight, eat, sex, adoreDasha);
    this.run = run;
    this.scratch = scratch;
    this.swim = swim;
  }

  checkTermsSatisfied(){
    return this.weight >= 4000 && this.eat >= 400 && this.eat <= 1800  && this.sex >= 2 && this.adoreDasha >= 4 && this.run >= 15 && this.swim <= 2 && this.scratch >= 5;
  }
}

class Duck extends Animal{
  constructor(name, age, weight, eat, sex, adoreDasha, run, swim, fly){
    super(name, age, weight, eat, sex, adoreDasha);
    this.run = run;
    this.swim = swim;
    this.fly = fly;
  }

  checkTermsSatisfied(){
    return this.age <= 10 && this.eat >= 100 && this.sex >= 1 && this.adoreDasha >= 15 && this.run >= 2 && this.fly >= 15 && this.swim <= 10;
  }
}

class Bee extends Animal{
  constructor(name, age, weight, eat, sex, adoreDasha, run, fly, collectHoney){
    super(name, age, weight, eat, sex, adoreDasha);
    this.run = run;
    this.fly = fly;
    this.collectHoney = collectHoney;
  }

  checkTermsSatisfied(){
    return this.age <= 10 && this.eat >= 5 && this.eat <= 20 && this.sex >= 2 && this.adoreDasha >= 2 && this.run >= 1 && this.fly >= 10 && this.collectHoney <= 10;
  }
}

class Hummingbird extends Animal{
  constructor(name, age, weight, eat, sex, adoreDasha, run, fly){
    super(name, age, weight, eat, sex, adoreDasha);
    this.run = run;
    this.fly = fly;
  }

  checkTermsSatisfied(){
    return this.weight <= 500 && this.eat >= 50 && this.eat <= 200 && this.sex >= 1 && this.adoreDasha >= 3 && this.run >= 2 && this.fly >= 15;
  }
}

class Dolphin extends Animal{
  constructor(name, age, weight, eat, sex, adoreDasha, scratch, swim){
    super(name, age, weight, eat, sex, adoreDasha);
    this.scratch = scratch;
    this.swim = swim;
  }

  checkTermsSatisfied(){
    return this.age <= 18 && this.eat >= 300 && this.eat <= 2500  && this.sex >= 9 && this.adoreDasha >= 10 && this.swim <= 10 && this.scratch >= 4;
  }
}

class Crucian extends Animal{
  constructor(name, age, weight, eat, sex, adoreDasha, swim){
    super(name, age, weight, eat, sex, adoreDasha);
    this.swim = swim;
  }

  checkTermsSatisfied(){
    return this.age <= 10 && this.eat >= 20 && this.eat <= 100  && this.sex >= 2 && this.adoreDasha >= 3 && this.swim <= 15;
  }
}

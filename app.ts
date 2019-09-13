export class Hero {
  id: number;
  name: string;

  constructor(name: string, id = 1) {
      this.name = name;
      this.id = id;
  }

  myName()
  {
      return this.name;
  }
}

let hero = new Hero('Link');
console.log(hero.myName());

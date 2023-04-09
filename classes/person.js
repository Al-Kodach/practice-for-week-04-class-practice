class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // introduce instance method

  introduce() {
    console.log(
      `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
    );
  }

  // class method that introduce all person
  static introducePeople(people) {
    if (!Array.isArray(people)) {
      throw new Error(
        "introducePeople only takes an array as an argument."
      );
    }

    if (!people.every((per) => per instanceof Person)) {
      throw new Error(
        "All items in array must be Person class instances."
      );
    }

    people.forEach((per) => per.introduce());
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}

// Write your classes here
//Define a Tree class that will act as our parent.
//A `Tree` instance should take in one parameter when created, `species`, and assign this to a property named `species`
// A `Tree` should have a static method, `definition()`, that returns a short definiton of all trees
//A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves


class Tree {
    constructor(species) {
        this.species = species;
    }

    //use static instead of set
    static definition(){
        return `A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.`;
    }
}


//Define a Deciduous class that extends Tree
//A `Deciduous` instance takes two parameters, `species` and `name`
//Use super() in the constructor to use the parent class constructor to assign species`. After `super()`, assign the `name` parameter to the a `name` property of te `Deciduous` constructor
//Create a static method, `definition()`, that uses `super` to access`definition()` from `Tree` and add the following to the provide a specific
//Deciduous trees shed their leaves annually.

    //use static instead of super
    //use the super definition on the return
class Deciduous extends Tree {
    constructor(species, name) {
        super(species);
        this.name = name;
    }

    static definition() {
        return `${super.definition()} Deciduous trees shed their leaves annually.`
    }
}

//An `Evergreen` instance takes two parameters, `species` and `name`. Use `super()` in the constructor to use the parent class constructor to assign
//`species`, then assign `name` to a property in the `Evergreen`
//Create a static method, `definition()`, that uses `super` to access `definition()` from `Tree` and add the following to the provide a specific definition
//Evergreens keep their leaves all year round.
//Notice this is the same as the one above just a different definition

class Evergreen extends Tree {
    constructor(species, name) {
        super(species)
        this.name = name
}

    static definition() {
        return `${super.definition()} Evergreens keep their leaves all year round.`
    }
}
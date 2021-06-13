let selector = ".note";
let somethingelse = ".";

console.log(selector.charAt(0) === somethingelse);


console.log(selector.substr(1))

class demoClass {

    constructor(id) {
        this.id = id;
    }

    toString(){

        return " "+this.id;
    }
}


let demo = new demoClass(1);

console.log(demo+" ")
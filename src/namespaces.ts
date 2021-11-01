export {};

namespace Japanese {
    export namespace Tokyo {
        export class Person {
            constructor(public name:string) {}
        }
    }
    export namespace Osaka {
        export class Person {
            constructor(public name:string) {}
        }
    }
}

namespace Endlish {
    export class Person {
        constructor(
            public firstNeme: string,
            public middleName: string,
            public lastName: string
            ){}
    }
}

const me = new Japanese.Tokyo.Person('はむさん');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('はむやん');
console.log(meOsaka.name);

const michael = new Endlish.Person('Michael','Joseph','jackson');
console.log(michael);
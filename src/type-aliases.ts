export {};

type Mojiretsu = string;

const fooString: Mojiretsu = 'Hello';

const example1 = {
    name: 'Ham',
    age: 43
};

type Profile1 = {
    name: string;
    age: number;
}

const example2: Profile1 = {
    name: 'Ham',
    age: 43
};

type Profile2 = typeof example1;
export {};

let bmi: (height: number, wight: number) => number = function ( height: number ,wight: number ): number {
    return wight / (height*height);
}

console.log(bmi(1.78, 86));
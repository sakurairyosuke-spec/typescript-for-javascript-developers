export {};

let bmi: (height: number, wight: number) => number = ( height: number ,wight: number ):number => wight / (height*height);

console.log(bmi(1.78, 86));
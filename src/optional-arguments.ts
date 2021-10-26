export {};

let bmi: (height: number, wight: number, printable?: boolean) => number = (
    height: number,
    wight: number,
    printable?: boolean
    ): number => {
        let bmi:number = wight / (height*height);

        if(printable){
            console.log(bmi);
        }
        return bmi;
    }

bmi(1.78, 86);
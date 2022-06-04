//named exports - we can export multiple variables
export const addTwo = (a,b) => a+b;
export const Multiplication = (a,b) => a*b;
export const subtract = (a,b) => a-b;

//default exports
export default function doMatch(){
    return{
        addTwo,
        Multiplication,
        subtract
    }
}
/*Write a function that stores information about a car in a Object.
 The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
  Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
  Print the Object that’s returned to make sure all the information was stored correctly.*/

function create_car_info(manufactureR: string,ModelName: string,
    ...info: [string, any][]):object{
    let car : {
        manufacturR: string;
        ModelNmae: string;
        [key:string]: any
    }
    car={
        manufacturR:manufactureR,
        ModelNmae: ModelName
    }
    if(info){
       for(let [key, value] of info){
        car[key]=value
       }
    }
    return car;
}

let myCar = create_car_info("Toyota", "Corolla", ["color", "blue"], ["feature", "cruise control"]);
console.log(myCar);
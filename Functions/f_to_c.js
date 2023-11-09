function convertFtoC(fahrenheitTemp) { 
    const celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
    return celsiusTemp;
}


let currentTemp = 90;
let celsiusTemp = convertFtoC(currentTemp);
console.log(celsiusTemp);

 console.log(convertFtoC(currentTemp));
 
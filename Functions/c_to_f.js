function convertCtoF(celsiusTemp) {
    const fahrenheitTemp = (celsiusTemp + 32) * (9 / 5);
    return fahrenheitTemp;
}


let currentTemp = 100;
let fahrenheitTemp = convertCtoF(currentTemp);
console.log(fahrenheitTemp);

 console.log(convertCtoF(currentTemp));
//Global scope (convertFahrenheitToCelsius, temprature, otherTemprature)
    //Local scope (fahrenheit, celsius)
        // Local scope (isFreezing)

    let convertFahrenheitToCelsius = function (fahrenheit) {
        let celsius =  (fahrenheit - 32) * 5/9 

        if (celsius <= 0) {
            let isFreezing = true
        }

        return celsius
    }
    
    
    let temprature = convertFahrenheitToCelsius(32) 
    let otherTemprature = convertFahrenheitToCelsius(68)
    
    
    console.log(`32°F is : ${temprature}K, 68°F is : ${otherTemprature}K`)

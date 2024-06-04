function convertTemperature() {
    let temperature = parseFloat(document.getElementById('inputTemperature').value);
    let inputUnit = document.getElementById('inputUnit').value;
    let celsius, fahrenheit, kelvin;

    if (isNaN(temperature)) {
        alert("Please enter a valid number");
        return;
    }

    switch (inputUnit) {
        case "Celsius":
            celsius = temperature;
            fahrenheit = (temperature * 9/5) + 32;
            kelvin = temperature + 273;
            break;
        case "Fahrenheit":
            celsius = (temperature - 32) * 5/9;
            fahrenheit = temperature;
            kelvin = (temperature - 32) * 5/9 + 273;
            break;
        case "Kelvin":
            celsius = temperature - 273;
            fahrenheit = (temperature - 273) * 9/5 + 32;
            kelvin = temperature;
            break;
    }

    document.getElementById('celsiusOutput').innerText = `Celsius: ${celsius.toFixed(2)}°C`;
    document.getElementById('fahrenheitOutput').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    document.getElementById('kelvinOutput').innerText = `Kelvin: ${kelvin.toFixed(2)}K`;
}

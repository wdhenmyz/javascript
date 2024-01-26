function CelciusParaFahrenheit(){
    var celcius = Number(document.getElementById("temperaturaC").value);
    document.write((celcius*1.8) + 32 + " Fahrenheit");
} 

function FahrenheitParaCelcius(){
    var fahrenheit = Number(document.getElementById("temperaturaF").value);
    document.write((fahrenheit-32)*(5/9) + " Celcius");
}
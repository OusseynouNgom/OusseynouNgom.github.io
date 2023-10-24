function getmoney () {
    let normal_hour = document.getElementById("a1").valueAsNumber
    let normal_rates = document.getElementById("a2").valueAsNumber
    let overtime_rates =document.getElementById("a3").valueAsNumber
    let hours_worked = document.getElementById("a4").valueAsNumber
  let money 
    if ( hours_worked <= normal_hour  ) {
    money= normal_rates * hours_worked
} else 
{
   money= normal_hour *normal_rates + overtime_rates * (hours_worked - normal_hour)}
document.getElementById("a5"). innerHTML = money 

}
    



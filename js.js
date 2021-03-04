
function bmi(){
    var h = document.getElementById('h').value;
    var w = document.getElementById('w').value;
  var bmi = w/(h/100*h/100);
  var bmio=(bmi.toFixed(2));
  
  document.getElementById('r').innerHTML="Your BMI is: "+bmio;
  if(bmio<18.5)
  {
  document.getElementById('r').innerHTML="Your BMI is: "+bmio+" Under weight";
  }

   else if(bmio>18.5 && bmio<24.5)
   {
   document.getElementById('r').innerHTML="Your BMI is: "+bmio+" Normal weight";
   }
else if(bmio>24.5 && bmio<29.5)
{
document.getElementById('r').innerHTML="Your BMI is: "+bmio+" Over weight";
}
 else if(bmio>29.5 && bmio<34.5)
{
document.getElementById('r').innerHTML="Your BMI is: "+bmio+" Obese weight";
}
  else if(bmio>34.5)
{
document.getElementById('r').innerHTML="Your BMI is: "+bmio+" Extremely Obese. If you want to live, you should loose your weight";
}
  }
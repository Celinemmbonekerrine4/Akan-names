function naming(name);{
    var CC=document.getElementById("main");
    var YY=document.getElementById("name");
    var MM=document.getElementById("Form");
    var DD=document.getElementById("akan");
 
  var CC=Century;
  var YY=Year;
  var MM=Month;
  var DD=Day;



  var  (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
  var day=("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sartuday");
  var femaleNames=("Akosua", "Adwoa","Abenaa","Akua","Yaa"," Afua","Ama");
  var maleNames=("Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame");
  
  if(CC.value =="" || YY.value =="" || MM.value =="" || DD.value ==""){
      alert("No blank values allowed");
  }
  else{
    
  }
}
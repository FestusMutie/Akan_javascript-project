function day (CC,YY,MM,DD){
    return((((cc/19)+1*cc-1)+((5*yy/4))+((26*(mm+1)/10))+ dd)%7)+1
}
function dateAkan(){
    var cc =(document.getElementById("Id1").value);
    var yy =(document.getElementById("Id2").value);
    var mm =(document.getElementById("Id3").value);
    var dd =(document.getElementById("Id4").value); 
    var gender =(document.getElementById("Id5").value);
    var result =day(cc,yy,mm,dd).toFixed();
    var males = ["Kwasi", "kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  if (gender =="male" && result == 0){
      alert(males[0]);
      
  }
    
    
    
}

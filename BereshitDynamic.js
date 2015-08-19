 
 //gets idElement from html 
 function changeText(idElement) {
    if( document.getElementById('idElement').innerHTML == "In the begining"){
      document.getElementById('bereshit').innerHTML ='בְּרֵאשִׁית';
      return false;
    }

    if('idElement'=="bereshit"){
        document.getElementById('bereshit').innerHTML ='In the begining';
        return false;
    }
 }

$(document).ready(main);


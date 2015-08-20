 function changeText(idElement) {
    if( document.getElementById('bereshit').innerHTML == "In the begining"){
      document.getElementById('bereshit').innerHTML ='בְּרֵאשִׁית';
      return false;
    }

    if( idElement == 1 ){
        document.getElementById('bereshit').innerHTML ='In the begining';
        return false;
    }
 }

$(document).ready(main);
 function changeText(idElement) {
    if( idElement == 1   &&  document.getElementById('bereshit').innerHTML == "In the begining"){
      document.getElementById('bereshit').innerHTML ='בְּרֵאשִׁית';
      return false;
    }
    if( idElement == 2  &&  document.getElementById('bara').innerHTML == "created"){
      document.getElementById('bara').innerHTML ='בָּרָא';
      return false;
    }

    if( idElement == 1 ){
        document.getElementById('bereshit').innerHTML ='In the begining';
        return false;
    }
    if( idElement == 2 ){
        document.getElementById('bara').innerHTML ='created';
        return false;
    }
 }

$(document).ready(main);
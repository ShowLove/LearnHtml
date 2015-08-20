 function changeText(idElement) {
    //English --> Hebrew
    if( idElement == 1   &&  document.getElementById('bereshit').innerHTML == "In the begining"){
      document.getElementById('bereshit').innerHTML ='בְּרֵאשִׁית';
      return false;}
    if( idElement == 2  &&  document.getElementById('bara').innerHTML == "created"){
      document.getElementById('bara').innerHTML ='בָּרָא';
      return false;}
    if( idElement == 3  &&  document.getElementById('Elohim').innerHTML == "Elohim"){
      document.getElementById('Elohim').innerHTML ='אֱלֹהִים';
      return false;}
    if( idElement == 4  &&  document.getElementById('et').innerHTML == "אֵת"){
      document.getElementById('et').innerHTML ='אֵת';
      return false;}
    if( idElement == 5  &&  document.getElementById('hashamaim').innerHTML == "the heavens"){
      document.getElementById('hashamaim').innerHTML ='הַשָּׁמַיִם';
      return false;}
    if( idElement == 6  &&  document.getElementById('veet').innerHTML == "and אֵת"){
      document.getElementById('veet').innerHTML ='וְאֵת';
      return false;}
    if( idElement == 7  &&  document.getElementById('haaretz').innerHTML == "the earth"){
      document.getElementById('haaretz').innerHTML ='הָאָרֶץ';
      return false;}

      //Hebrew --> English
    if( idElement == 1 ){
        document.getElementById('bereshit').innerHTML ='In the begining';
        return false;}
    if( idElement == 2 ){
        document.getElementById('bara').innerHTML ='created';
        return false;}
    if( idElement == 3 ){
        document.getElementById('Elohim').innerHTML ='Elohim';
        return false;}
    if( idElement == 4 ){
        document.getElementById('et').innerHTML ='אֵת';
        return false;}
    if( idElement == 5 ){
        document.getElementById('hashamaim').innerHTML ='the heavens';
        return false;}
    if( idElement == 6 ){
        document.getElementById('veet').innerHTML ='and אֵת';
        return false;}
    if( idElement == 7 ){
        document.getElementById('haaretz').innerHTML ='the earth';
        return false;}
 }

$(document).ready(main);
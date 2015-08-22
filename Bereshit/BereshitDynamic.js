 function changeWordLang(idElement){
//Bereshit 1:1

    //Transliteration --> Hebrew
    if( idElement == 1   &&  document.getElementById('bereshit').innerHTML == "bê'rey'shit"){
      document.getElementById('bereshit').innerHTML ='בְּרֵאשִׁית';
      return false;}
    if( idElement == 2  &&  document.getElementById('bara').innerHTML == "ba'ra"){
      document.getElementById('bara').innerHTML ='בָּרָא';
      return false;}
    if( idElement == 3  &&  document.getElementById('Elohim').innerHTML == "e'lo'him"){
      document.getElementById('Elohim').innerHTML ='אֱלֹהִים,';
      return false;}
    if( idElement == 4  &&  document.getElementById('et').innerHTML == "eyt"){
      document.getElementById('et').innerHTML ='אֵת';
      return false;}
    if( idElement == 5  &&  document.getElementById('hashamaim').innerHTML == "ha'sha'ma'yim"){
      document.getElementById('hashamaim').innerHTML ='הַשָּׁמַיִם';
      return false;}
    if( idElement == 6  &&  document.getElementById('veet').innerHTML == "wê'eyt"){
      document.getElementById('veet').innerHTML ='וְאֵת';
      return false;}
    if( idElement == 7  &&  document.getElementById('haaretz').innerHTML == "ha'a'rets"){
      document.getElementById('haaretz').innerHTML ='הָאָרֶץ';
      return false;}

    //Hebrew --> Transliteration
    if( idElement == 1   &&  document.getElementById('bereshit').innerHTML == "בְּרֵאשִׁית"){
      document.getElementById('bereshit').innerHTML ="bê'rey'shit";
      return false;}
    if( idElement == 2  &&  document.getElementById('bara').innerHTML == "בָּרָא"){
      document.getElementById('bara').innerHTML ="ba'ra";
      return false;}
    if( idElement == 3  &&  document.getElementById('Elohim').innerHTML == "אֱלֹהִים,"){
      document.getElementById('Elohim').innerHTML ="e'lo'him";
      return false;}
    if( idElement == 4  &&  document.getElementById('et').innerHTML == "אֵת"){
      document.getElementById('et').innerHTML ="eyt";
      return false;}
    if( idElement == 5  &&  document.getElementById('hashamaim').innerHTML == "הַשָּׁמַיִם"){
      document.getElementById('hashamaim').innerHTML ="ha'sha'ma'yim";
      return false;}
    if( idElement == 6  &&  document.getElementById('veet').innerHTML == "וְאֵת"){
      document.getElementById('veet').innerHTML ="wê'eyt";
      return false;}
    if( idElement == 7  &&  document.getElementById('haaretz').innerHTML == "הָאָרֶץ"){
      document.getElementById('haaretz').innerHTML ="ha'a'rets";
      return false;}
 }//endchangeWordLang

 function changeChapterLang(idElement){
  //change entire text to English
    
    //Transliteration --> Hebrew
    if( idElement == 1){
      document.getElementById('bereshit').innerHTML ='בְּרֵאשִׁית';
      document.getElementById('bara').innerHTML ='בָּרָא';
      document.getElementById('Elohim').innerHTML ='אֱלֹהִים';
      document.getElementById('et').innerHTML ='אֵת';
      document.getElementById('hashamaim').innerHTML ='הַשָּׁמַיִם';
      document.getElementById('veet').innerHTML ='וְאֵת';
      document.getElementById('haaretz').innerHTML ='הָאָרֶץ';
      return false;}

    //Hebrew --> Transliteration
    if( idElement == 2){
      document.getElementById('bereshit').innerHTML ="bê'rey'shit";
      document.getElementById('bara').innerHTML ='created';
      document.getElementById('Elohim').innerHTML ='Elohim';
      document.getElementById('et').innerHTML ='אֵת';
      document.getElementById('hashamaim').innerHTML ='the heavens';
      document.getElementById('veet').innerHTML ='and אֵת';
      document.getElementById('haaretz').innerHTML ='the earth';
      return false;}
 }//endchangeChapterLang

$(document).ready(main);
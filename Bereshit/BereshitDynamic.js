 function Switch_Heb_Translit(idElement){
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
 }//Switch_Heb_Translit

  function Switch_Eng_AHL(idElement){
//Bereshit 1:1

    //English --> AHL
    if( idElement == 1   &&  document.getElementById('bereshit2').innerHTML == "in~SUMMIT"){
      document.getElementById('bereshit2').innerHTML ='2363';
      return false;}
    if( idElement == 2  &&  document.getElementById('bara2').innerHTML == "he~did~FATTEN"){
      document.getElementById('bara2').innerHTML ='232';
      return false;}
    if( idElement == 3  &&  document.getElementById('Elohim2').innerHTML == "Elohiym"){
      document.getElementById('Elohim2').innerHTML ='POWER~s';
      return false;}
    if( idElement == 4  &&  document.getElementById('et2').innerHTML == "AT"){
      document.getElementById('et2').innerHTML ='85';
      return false;}
    if( idElement == 5  &&  document.getElementById('hashamaim2').innerHTML == "the~SKY"){
      document.getElementById('hashamaim2').innerHTML ='2512~s2';
      return false;}
    if( idElement == 6  &&  document.getElementById('veet2').innerHTML == "and~AT"){
      document.getElementById('veet2').innerHTML ='85';
      return false;}
    if( idElement == 7  &&  document.getElementById('haaretz2').innerHTML == "the~LAND"){
      document.getElementById('haaretz2').innerHTML ='2331';
      return false;}

    //AHL --> English
    if( idElement == 1   &&  document.getElementById('bereshit2').innerHTML == "2363"){
      document.getElementById('bereshit2').innerHTML ="in~SUMMIT";
      return false;}
    if( idElement == 2  &&  document.getElementById('bara2').innerHTML == "232"){
      document.getElementById('bara2').innerHTML ='he~did~FATTEN';
      return false;}
    if( idElement == 3  &&  document.getElementById('Elohim2').innerHTML == "POWER~s"){
      document.getElementById('Elohim2').innerHTML ="Elohiym";
      return false;}
    if( idElement == 4  &&  document.getElementById('et2').innerHTML == "85"){
      document.getElementById('et2').innerHTML ="AT";
      return false;}
    if( idElement == 5  &&  document.getElementById('hashamaim2').innerHTML == "2512~s2"){
      document.getElementById('hashamaim2').innerHTML ="the~SKY";
      return false;}
    if( idElement == 6  &&  document.getElementById('veet2').innerHTML == "85"){
      document.getElementById('veet2').innerHTML ="and~AT";
      return false;}
    if( idElement == 7  &&  document.getElementById('haaretz2').innerHTML == "2331"){
      document.getElementById('haaretz2').innerHTML ="the~LAND";
      return false;}
 }//End Switch_Eng_AHL

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

      document.getElementById('bereshit2').innerHTML ="in~SUMMIT";
      document.getElementById('bara2').innerHTML ="he~did~FATTEN";
      document.getElementById('Elohim2').innerHTML ="Elohiym";
      document.getElementById('et2').innerHTML ="AT";
      document.getElementById('hashamaim2').innerHTML ="the~SKY";
      document.getElementById('veet2').innerHTML ="and~AT";
      document.getElementById('haaretz2').innerHTML ="the~LAND";
      return false;}
     

    //Hebrew --> Transliteration && Strongs --> English
    if( idElement == 2){
      document.getElementById('bereshit').innerHTML ="bê'rey'shit";
      document.getElementById('bara').innerHTML ="ba'ra";
      document.getElementById('Elohim').innerHTML ="e'lo'him";
      document.getElementById('et').innerHTML ="eyt";
      document.getElementById('hashamaim').innerHTML ="ha'sha'ma'yim";
      document.getElementById('veet').innerHTML ="wê'eyt";
      document.getElementById('haaretz').innerHTML ="ha'a'rets";

      document.getElementById('bereshit2').innerHTML ="in~SUMMIT";
      document.getElementById('bara2').innerHTML ="he~did~FATTEN";
      document.getElementById('Elohim2').innerHTML ="Elohiym";
      document.getElementById('et2').innerHTML ="AT";
      document.getElementById('hashamaim2').innerHTML ="the~SKY";
      document.getElementById('veet2').innerHTML ="and~AT";
      document.getElementById('haaretz2').innerHTML ="the~LAND";
      return false;}
 }//endchangeChapterLang

$(document).ready(main);
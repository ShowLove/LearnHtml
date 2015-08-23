function Switch_Heb_Translit_1_1(idElement){
//Bereshit 1:1
       //Transliteration-->Hebrew  getElementById(describes the div)//idElement(passed in func)
    if( idElement == 1  &&  document.getElementById('div_id1').innerHTML == "bê'rey'shit"){
      document.getElementById('div_id1').innerHTML ='בְּרֵאשִׁית';
      return false;}
    if( idElement == 2  &&  document.getElementById('div_id2').innerHTML == "ba'ra"){
      document.getElementById('div_id2').innerHTML ='בָּרָא';
      return false;}
    if( idElement == 3  &&  document.getElementById('div_id3').innerHTML == "e'lo'him"){
      document.getElementById('div_id3').innerHTML ='אֱלֹהִים';
      return false;}
    if( idElement == 4  &&  document.getElementById('div_id4').innerHTML == "eyt"){
      document.getElementById('div_id4').innerHTML ='אֵת';
      return false;}
    if( idElement == 5  &&  document.getElementById('div_id5').innerHTML == "ha'sha'ma'yim"){
      document.getElementById('div_id5').innerHTML ='הַשָּׁמַיִם';
      return false;}
    if( idElement == 6  &&  document.getElementById('div_id6').innerHTML == "wê'eyt"){
      document.getElementById('div_id6').innerHTML ='וְאֵת';
      return false;}
    if( idElement == 7  &&  document.getElementById('div_id7').innerHTML == "ha'a'rets"){
      document.getElementById('div_id7').innerHTML ='הָאָרֶץ';
      return false;}

    //Hebrew --> Transliteration
    if( idElement == 1  &&  document.getElementById('div_id1').innerHTML == "בְּרֵאשִׁית"){
      document.getElementById('div_id1').innerHTML ="bê'rey'shit";
      return false;}
    if( idElement == 2  &&  document.getElementById('div_id2').innerHTML == "בָּרָא"){
      document.getElementById('div_id2').innerHTML ="ba'ra";
      return false;}
    if( idElement == 3  &&  document.getElementById('div_id3').innerHTML == "אֱלֹהִים"){
      document.getElementById('div_id3').innerHTML ="e'lo'him";
      return false;}
    if( idElement == 4  &&  document.getElementById('div_id4').innerHTML == "אֵת"){
      document.getElementById('div_id4').innerHTML ="eyt";
      return false;}
    if( idElement == 5  &&  document.getElementById('div_id5').innerHTML == "הַשָּׁמַיִם"){
      document.getElementById('div_id5').innerHTML ="ha'sha'ma'yim";
      return false;}
    if( idElement == 6  &&  document.getElementById('div_id6').innerHTML == "וְאֵת"){
      document.getElementById('div_id6').innerHTML ="wê'eyt";
      return false;}
    if( idElement == 7  &&  document.getElementById('div_id7').innerHTML == "הָאָרֶץ"){
      document.getElementById('div_id7').innerHTML ="ha'a'rets";
      return false;}
 }//End Switch_Heb_Translit

function EngAHL_L1B1_1(idElement){
//Bereshit 1:1
       //English-->AHL
    if( idElement == 1  &&  document.getElementById('div_id1_b').innerHTML == "in~SUMMIT"){
      document.getElementById('div_id1_b').innerHTML ='456';
      return false;}
    if( idElement == 2  &&  document.getElementById('div_id2_b').innerHTML == "he~did~FATTEN"){
      document.getElementById('div_id2_b').innerHTML ='324';
      return false;}
    if( idElement == 3  &&  document.getElementById('div_id3_b').innerHTML == "Elohiym"){
      document.getElementById('div_id3_b').innerHTML ='456';
      return false;}
    if( idElement == 4  &&  document.getElementById('div_id4_b').innerHTML == "AT"){
      document.getElementById('div_id4_b').innerHTML ='567';
      return false;}
    if( idElement == 5  &&  document.getElementById('div_id5_b').innerHTML == "the~SKY"){
      document.getElementById('div_id5_b').innerHTML ='234';
      return false;}
    if( idElement == 6  &&  document.getElementById('div_id6_b').innerHTML == "and~AT"){
      document.getElementById('div_id6_b').innerHTML ='234';
      return false;}
    if( idElement == 7  &&  document.getElementById('div_id7_b').innerHTML == "the~LAND"){
      document.getElementById('div_id7_b').innerHTML ='567';
      return false;}

    //AHL --> Eng
    if( idElement == 1  &&  document.getElementById('div_id1_b').innerHTML == "456"){
      document.getElementById('div_id1_b').innerHTML ="in~SUMMIT";
      return false;}
    if( idElement == 2  &&  document.getElementById('div_id2_b').innerHTML == "324"){
      document.getElementById('div_id2_b').innerHTML ="he~did~FATTEN";
      return false;}
    if( idElement == 3  &&  document.getElementById('div_id3_b').innerHTML == "456"){
      document.getElementById('div_id3_b').innerHTML ="Elohiym";
      return false;}
    if( idElement == 4  &&  document.getElementById('div_id4_b').innerHTML == "567"){
      document.getElementById('div_id4_b').innerHTML ="AT";
      return false;}
    if( idElement == 5  &&  document.getElementById('div_id5_b').innerHTML == "234"){
      document.getElementById('div_id5_b').innerHTML ="the~SKY";
      return false;}
    if( idElement == 6  &&  document.getElementById('div_id6_b').innerHTML == "234"){
      document.getElementById('div_id6_b').innerHTML ="and~AT";
      return false;}
    if( idElement == 7  &&  document.getElementById('div_id7_b').innerHTML == "567"){
      document.getElementById('div_id7_b').innerHTML ="the~LAND";
      return false;}
 }//End Switch_Heb_Translit

 function changeChapterLang(idElement){
  //change entire text to English
    
    //Transliteration --> Hebrew
    if( idElement == 1){
      document.getElementById('div_id1').innerHTML ='בְּרֵאשִׁית';
      document.getElementById('div_id2').innerHTML ='בָּרָא';
      document.getElementById('div_id3').innerHTML ='אֱלֹהִים';
      document.getElementById('div_id4').innerHTML ='אֵת';
      document.getElementById('div_id5').innerHTML ='הַשָּׁמַיִם';
      document.getElementById('div_id6').innerHTML ='וְאֵת';
      document.getElementById('div_id7').innerHTML ='הָאָרֶץ';
      //AHL --> English
      document.getElementById('div_id1_b').innerHTML ="in~SUMMIT";
      document.getElementById('div_id2_b').innerHTML ="he~did~FATTEN";
      document.getElementById('div_id3_b').innerHTML ="Elohiym";
      document.getElementById('div_id4_b').innerHTML ="AT";
      document.getElementById('div_id5_b').innerHTML ="the~SKY";
      document.getElementById('div_id6_b').innerHTML ="and~AT";
      document.getElementById('div_id7_b').innerHTML ="the~LAND";
      return false;}
     

    //Hebrew --> Transliteration && Strongs --> English
    if( idElement == 2){
      document.getElementById('div_id1_b').innerHTML ="bê'rey'shit";
      document.getElementById('div_id2_b').innerHTML ="ba'ra";
      document.getElementById('div_id3_b').innerHTML ="e'lo'him";
      document.getElementById('div_id4_b').innerHTML ="eyt";
      document.getElementById('div_id5_b').innerHTML ="ha'sha'ma'yim";
      document.getElementById('div_id6_b').innerHTML ="wê'eyt";
      document.getElementById('div_id7_b').innerHTML ="ha'a'rets";
      //AHL --> English
      document.getElementById('div_id7_b').innerHTML ="in~SUMMIT";
      document.getElementById('div_id7_b').innerHTML ="he~did~FATTEN";
      document.getElementById('div_id7_b').innerHTML ="Elohiym";
      document.getElementById('div_id7_b').innerHTML ="AT";
      document.getElementById('div_id7_b').innerHTML ="the~SKY";
      document.getElementById('div_id7_b').innerHTML ="and~AT";
      document.getElementById('div_id7_b').innerHTML ="the~LAND";
      return false;}
 }//endchangeChapterLang
# -*- coding: utf-8 -*-
####################################
#
####################################
####################################
#Thoughts and notes for later
# Change HebEng ... to dynamicSwitch_L1
# I should add the line of ch:verse
# I'll probably have to write vars for div_id7
####################################
write_file = open("/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/jsOut.js","w")

#####################################
#Functions called from html
#####################################
HebEng_L1 	= "Switch_Heb_Translit_"
EngAHL_L1_B = "EngAHL_L1B"

def remColon_underscore( chapterVerse ):
	return chapterVerse.replace(":","_")

chapterVerse = "1:1"
chapterVerse = remColon_underscore( chapterVerse )

####################################
#Transliteration Words
####################################
t_word1 = "bê'rey'shit"		
t_word2 = "ba'ra"
t_word3 = "e'lo'him"
t_word4 = "eyt"
t_word5 = "ha'sha'ma'yim"
t_word6 = "wê'eyt"
t_word7 = "ha'a'rets"
####################################
#Hebrew Words
####################################
h_word1 = "בְּרֵאשִׁית"
h_word2 = "בָּרָא"
h_word3 = "אֱלֹהִים"
h_word4 = "אֵת"
h_word5 = "הַשָּׁמַיִם"
h_word6 = "וְאֵת"
h_word7 = "הָאָרֶץ"

def w_Heb_Translit_func(chapterVerse, t_word1, t_word2, t_word3, t_word4, t_word5, t_word6, t_word7, h_word1, h_word2, h_word3, h_word4, h_word5, h_word6, h_word7):
	write_file.write("function "+HebEng_L1+chapterVerse+"""(idElement){
//Bereshit 1:1
       //Transliteration-->Hebrew  getElementById(describes the div)//idElement(passed in func)
    if( idElement == 1  &&  document.getElementById('div_id1').innerHTML == """+'"'+t_word1+""""){
      document.getElementById('div_id1').innerHTML ='"""+h_word1+"""';
      return false;}
    if( idElement == 2  &&  document.getElementById('div_id2').innerHTML == """+'"'+t_word2+""""){
      document.getElementById('div_id2').innerHTML ='"""+h_word2+"""';
      return false;}
    if( idElement == 3  &&  document.getElementById('div_id3').innerHTML == """+'"'+t_word3+""""){
      document.getElementById('div_id3').innerHTML ='"""+h_word3+"""';
      return false;}
    if( idElement == 4  &&  document.getElementById('div_id4').innerHTML == """+'"'+t_word4+""""){
      document.getElementById('div_id4').innerHTML ='"""+h_word4+"""';
      return false;}
    if( idElement == 5  &&  document.getElementById('div_id5').innerHTML == """+'"'+t_word5+""""){
      document.getElementById('div_id5').innerHTML ='"""+h_word5+"""';
      return false;}
    if( idElement == 6  &&  document.getElementById('div_id6').innerHTML == """+'"'+t_word6+""""){
      document.getElementById('div_id6').innerHTML ='"""+h_word6+"""';
      return false;}
    if( idElement == 7  &&  document.getElementById('div_id7').innerHTML == """+'"'+t_word7+""""){
      document.getElementById('div_id7').innerHTML ='"""+h_word7+"""';
      return false;}

    //Hebrew --> Transliteration
    if( idElement == 1  &&  document.getElementById('div_id1').innerHTML == """+'"'+h_word1+""""){
      document.getElementById('div_id1').innerHTML ="""+'"'+t_word1+"""";
      return false;}
    if( idElement == 2  &&  document.getElementById('div_id2').innerHTML == """+'"'+h_word2+""""){
      document.getElementById('div_id2').innerHTML ="""+'"'+t_word2+"""";
      return false;}
    if( idElement == 3  &&  document.getElementById('div_id3').innerHTML == """+'"'+h_word3+""""){
      document.getElementById('div_id3').innerHTML ="""+'"'+t_word3+"""";
      return false;}
    if( idElement == 4  &&  document.getElementById('div_id4').innerHTML == """+'"'+h_word4+""""){
      document.getElementById('div_id4').innerHTML ="""+'"'+t_word4+"""";
      return false;}
    if( idElement == 5  &&  document.getElementById('div_id5').innerHTML == """+'"'+h_word5+""""){
      document.getElementById('div_id5').innerHTML ="""+'"'+t_word5+"""";
      return false;}
    if( idElement == 6  &&  document.getElementById('div_id6').innerHTML == """+'"'+h_word6+""""){
      document.getElementById('div_id6').innerHTML ="""+'"'+t_word6+"""";
      return false;}
    if( idElement == 7  &&  document.getElementById('div_id7').innerHTML == """+'"'+h_word7+""""){
      document.getElementById('div_id7').innerHTML ="""+'"'+t_word7+"""";
      return false;}
 }//End Switch_Heb_Translit""")

####################################
#Lexicon numbers
####################################
l_word1 = "456"		
l_word2 = "324"
l_word3 = "456"
l_word4 = "567"
l_word5 = "234"
l_word6 = "234"
l_word7 = "567"
####################################
#Eng Words
####################################
e_word1 ="in~SUMMIT"
e_word2 ="he~did~FATTEN"
e_word3 ="Elohiym"
e_word4 ="AT";
e_word5 ="the~SKY"
e_word6 ="and~AT"
e_word7 ="the~LAND"

def w_Eng_AHL_func(chapterVerse, l_word1, l_word2, l_word3, l_word4, l_word5, l_word6, l_word7, e_word1, e_word2, e_word3, e_word4, e_word5, e_word6, e_word7):
	write_file.write("function "+EngAHL_L1_B+chapterVerse+"""(idElement){
//Bereshit 1:1
       //English-->AHL
    if( idElement == 1  &&  document.getElementById('div_id1_b').innerHTML == """+'"'+e_word1+""""){
      document.getElementById('div_id1_b').innerHTML ='"""+l_word1+"""';
      return false;}
    if( idElement == 2  &&  document.getElementById('div_id2_b').innerHTML == """+'"'+e_word2+""""){
      document.getElementById('div_id2_b').innerHTML ='"""+l_word2+"""';
      return false;}
    if( idElement == 3  &&  document.getElementById('div_id3_b').innerHTML == """+'"'+e_word3+""""){
      document.getElementById('div_id3_b').innerHTML ='"""+l_word3+"""';
      return false;}
    if( idElement == 4  &&  document.getElementById('div_id4_b').innerHTML == """+'"'+e_word4+""""){
      document.getElementById('div_id4_b').innerHTML ='"""+l_word4+"""';
      return false;}
    if( idElement == 5  &&  document.getElementById('div_id5_b').innerHTML == """+'"'+e_word5+""""){
      document.getElementById('div_id5_b').innerHTML ='"""+l_word5+"""';
      return false;}
    if( idElement == 6  &&  document.getElementById('div_id6_b').innerHTML == """+'"'+e_word6+""""){
      document.getElementById('div_id6_b').innerHTML ='"""+l_word6+"""';
      return false;}
    if( idElement == 7  &&  document.getElementById('div_id7_b').innerHTML == """+'"'+e_word7+""""){
      document.getElementById('div_id7_b').innerHTML ='"""+l_word7+"""';
      return false;}

    //AHL --> Eng
    if( idElement == 1  &&  document.getElementById('div_id1_b').innerHTML == """+'"'+l_word1+""""){
      document.getElementById('div_id1_b').innerHTML ="""+'"'+e_word1+"""";
      return false;}
    if( idElement == 2  &&  document.getElementById('div_id2_b').innerHTML == """+'"'+l_word2+""""){
      document.getElementById('div_id2_b').innerHTML ="""+'"'+e_word2+"""";
      return false;}
    if( idElement == 3  &&  document.getElementById('div_id3_b').innerHTML == """+'"'+l_word3+""""){
      document.getElementById('div_id3_b').innerHTML ="""+'"'+e_word3+"""";
      return false;}
    if( idElement == 4  &&  document.getElementById('div_id4_b').innerHTML == """+'"'+l_word4+""""){
      document.getElementById('div_id4_b').innerHTML ="""+'"'+e_word4+"""";
      return false;}
    if( idElement == 5  &&  document.getElementById('div_id5_b').innerHTML == """+'"'+l_word5+""""){
      document.getElementById('div_id5_b').innerHTML ="""+'"'+e_word5+"""";
      return false;}
    if( idElement == 6  &&  document.getElementById('div_id6_b').innerHTML == """+'"'+l_word6+""""){
      document.getElementById('div_id6_b').innerHTML ="""+'"'+e_word6+"""";
      return false;}
    if( idElement == 7  &&  document.getElementById('div_id7_b').innerHTML == """+'"'+l_word7+""""){
      document.getElementById('div_id7_b').innerHTML ="""+'"'+e_word7+"""";
      return false;}
 }//End Switch_Heb_Translit""")

def im_tiredOfThisShit():
	write_file.write(""" function changeChapterLang(idElement){
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
 }//endchangeChapterLang""")


####################################
#Execute the code
####################################
w_Heb_Translit_func(chapterVerse, t_word1, t_word2, t_word3, t_word4, t_word5, t_word6, t_word7, h_word1, h_word2, h_word3, h_word4, h_word5, h_word6, h_word7)

write_file.write("\n\n")

w_Eng_AHL_func(chapterVerse, l_word1, l_word2, l_word3, l_word4, l_word5, l_word6, l_word7, e_word1, e_word2, e_word3, e_word4, e_word5, e_word6, e_word7)

write_file.write("\n\n")

im_tiredOfThisShit()

write_file.close

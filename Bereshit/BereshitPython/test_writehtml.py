# -*- coding: utf-8 -*-

write_file = open("/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/pyOut.html","w")

def remColon_underscore( chapterVerse ):
	return chapterVerse.replace(":","_")
def remUnderscore_colon( chapterVerse ):
	return chapterVerse.replace("_",":")

######################################
# divs that are used in css
######################################
dynamicButton  = "change_verse_state"
eight_w_verses = "Heb_Transliteration"
eight_w_verses2= "English_AHL"
#####################################
#Functions that will be called in JS
#####################################
HebEng_L1 	= "Switch_Heb_Translit_"
EngAHL_L1_B = "EngAHL_L1B"

def w_header():
	write_file.write("""<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
<HEAD>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<TITLE>
		בְּרֵאשִׁית
	</TITLE>
</HEAD>
<BODY>
	<div class="""+'"'+dynamicButton+"""" style="width:100%; float:right;">
		<div onclick="javascript:changeChapterLang(1); return false;">עברית</div>
		<div onclick="javascript:changeChapterLang(2); return false;">Transliteration</div>
	</div>

	<H1 ALIGN="CENTER">בְּרֵאשִׁית</H1>""")

def w_HebEng_L1( chapterVerse, word1, word2, word3, word4, word5, word6, word7):
	write_file.write("""	<div class="""+'"'+eight_w_verses+""""  style="width:100%; float:right;">
		<div <strong>{בְּרֵאשִׁית}</strong> </div>
		<div id="div_id1" 
			onclick="javascript:"""+HebEng_L1+chapterVerse+"""(1); return false;">"""+word1+"""</div>
		<div id="div_id2"
			onclick="javascript:"""+HebEng_L1+chapterVerse+"""(2); return false;">"""+word2+"""</div>
		<div id="div_id3"
			onclick="javascript:"""+HebEng_L1+chapterVerse+"""(3); return false;">"""+word3+"""</div>
		<div id="div_id4"
			onclick="javascript:"""+HebEng_L1+chapterVerse+"""(4); return false;">"""+word4+"""</div>
		<div id="div_id5"
			onclick="javascript:"""+HebEng_L1+chapterVerse+"""(5); return false;">"""+word5+"""</div>
		<div id="div_id6" 
			onclick="javascript:"""+HebEng_L1+chapterVerse+"""(6); return false;">"""+word6+"""</div>
		<div id="div_id7"
			onclick="javascript:"""+HebEng_L1+chapterVerse+"""(7); return false;">"""+word7+"""</div>
	</div>""")

def w_EngAHL_L1_B( chapterVerse, chapterVerseColon, word1, word2, word3, word4, word5, word6, word7):
	write_file.write("""	<div class="""+'"'+eight_w_verses2+"""" style="width:100%; float:right;">
		<div><strong>"""+chapterVerseColon+"""</strong></div>
		<div id="div_id1_b" style="text-align:right;"
			onclick="javascript:"""+EngAHL_L1_B+chapterVerse+"""(1); return false;">"""+word1+"""</div>
		<div id="div_id2_b"
			onclick="javascript:"""+EngAHL_L1_B+chapterVerse+"""(2); return false;">"""+word2+"""</div>
		<div id="div_id3_b"
			onclick="javascript:"""+EngAHL_L1_B+chapterVerse+"""(3); return false;">"""+word3+"""</div>
		<div id="div_id4_b"
			onclick="javascript:"""+EngAHL_L1_B+chapterVerse+"""(4); return false;">"""+word4+"""</div>
		<div id="div_id5_b"
			onclick="javascript:"""+EngAHL_L1_B+chapterVerse+"""(5); return false;">"""+word5+"""</div>
		<div id="div_id6_b" 
			onclick="javascript:"""+EngAHL_L1_B+chapterVerse+"""(6); return false;">"""+word6+"""</div>
		<div id="div_id7_b"
			onclick="javascript:"""+EngAHL_L1_B+chapterVerse+"""(7); return false;">"""+word7+"""</div>
	</div>""")

def w_tail():
	write_file.write("""	<A NAME="32"> </A>

	</BODY>
</HTML>""")


##################################################
#Code that actually writes the code
##################################################

w_header()

write_file.write("\n\n")

chapterVerse = "1:1"
word1 = "בְּרֵאשִׁית"
word2 = "בָּרָא"
word3 = "אֱלֹהִים"
word4 = "אֵת"
word5 = "הַשָּׁמַיִם"
word6 = "וְאֵת"
word7 = "הָאָרֶץ"

#This is to mark functions according to ch:vs --> ch_vs
chapterVerse = remColon_underscore( chapterVerse )

w_HebEng_L1( chapterVerse, word1, word2, word3, word4, word5, word6, word7)

write_file.write("\n\n")
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

#This is for the ch verse indicator i.e. 1:7
chapterVerseColon = remUnderscore_colon( chapterVerse )

w_EngAHL_L1_B( chapterVerse, chapterVerseColon, e_word1, e_word2, e_word3, e_word4, e_word5, e_word6, e_word7)

write_file.write("\n\n")

w_tail()


write_file.close




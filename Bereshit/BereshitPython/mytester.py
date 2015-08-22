# -*- coding: utf-8 -*-

write_file = open("/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/output.txt","w")

#thoughts
#numWords%4 will give the true number of words, I then need fig out hmany 8w lines that gives me

#Questions    can i use ':' in a function? I need to figure this out

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
	<div class="changeLanguage" style="width:100%; float:right;">
		<div onclick="javascript:changeChapterLang(1); return false;">עברית</div>
		<div onclick="javascript:changeChapterLang(2); return false;">Transliteration</div>
	</div>

	<H1 ALIGN="CENTER">בְּרֵאשִׁית</H1>""")

chapterVerse = "1:1"
word1 = "בְּרֵאשִׁית"
word2 = "בָּרָא"
word3 = "אֱלֹהִים"
word4 = "אֵת"
word5 = "הַשָּׁמַיִם"
word6 = "וְאֵת"
word7 = "הָאָרֶץ"


def remColon_underscore( chapterVerse ):
	return chapterVerse.replace(":","_")
def remUnderscore_colon( chapterVerse ):
	return chapterVerse.replace("_",":")

chapterVerse = remColon_underscore( chapterVerse )


def w_HebEng_L1( chapterVerse, word1, word2, word3, word4, word5, word6, word7):
	write_file.write("""	<div class="eight_w_verses" style="width:100%; float:right;">
		<div <strong>{בְּרֵאשִׁית}</strong> </div>
		<div id="div_id1" 
			onclick="javascript:Switch_Heb_Translit_"""+chapterVerse+"""(1); return false;">"""+word1+"""</div>
		<div id="div_id2"
			onclick="javascript:Switch_Heb_Translit_"""+chapterVerse+"""(2); return false;">"""+word2+"""</div>
		<div id="div_id3"
			onclick="javascript:Switch_Heb_Translit_"""+chapterVerse+"""(3); return false;">"""+word3+"""</div>
		<div id="div_id4"
			onclick="javascript:Switch_Heb_Translit_"""+chapterVerse+"""(4); return false;">"""+word4+"""</div>
		<div id="div_id5"
			onclick="javascript:Switch_Heb_Translit_"""+chapterVerse+"""(5); return false;">"""+word5+"""</div>
		<div id="div_id6" 
			onclick="javascript:Switch_Heb_Translit_"""+chapterVerse+"""(6); return false;">"""+word6+"""</div>
		<div id="div_id7"
			onclick="javascript:Switch_Heb_Translit_"""+chapterVerse+"""(7); return false;">"""+word7+"""</div>
	</div>""")

word1 = "בְּרֵאשִׁית"
word2 = "בָּרָא"
word3 = "אֱלֹהִים"
word4 = "אֵת"
word5 = "הַשָּׁמַיִם"
word6 = "וְאֵת"
word7 = "הָאָרֶץ"

def remUnderscore_colon( chapterVerse ):
	return chapterVerse.replace("_",":")

chapterVerse2 = remUnderscore_colon( chapterVerse )

def w_EngAHL_L1_B( chapterVerse, word1, word2, word3, word4, word5, word6, word7):
	write_file.write("""	<div class="English_n_AHL" style="width:100%; float:right;">
		<div><strong>"""+chapterVerse2+"""</strong></div>
		<div id="div_id1_b" style="text-align:right;"
			onclick="javascript:Switch_Eng_AHL_"""+chapterVerse+"""(1); return false;">"""+word1+"""</div>
		<div id="div_id2_b"
			onclick="javascript:Switch_Eng_AHL_"""+chapterVerse+"""(2); return false;">"""+word2+"""</div>
		<div id="div_id3_b"
			onclick="javascript:Switch_Eng_AHL_"""+chapterVerse+"""(3); return false;">"""+word3+"""</div>
		<div id="div_id4_b"
			onclick="javascript:Switch_Eng_AHL_"""+chapterVerse+"""(4); return false;">"""+word4+"""</div>
		<div id="div_id5_b"
			onclick="javascript:Switch_Eng_AHL_"""+chapterVerse+"""(5); return false;">"""+word5+"""</div>
		<div id="div_id6_b" 
			onclick="javascript:Switch_Eng_AHL_"""+chapterVerse+"""(6); return false;">"""+word6+"""</div>
		<div id="div_id7_b"
			onclick="javascript:Switch_Eng_AHL_"""+chapterVerse+"""(7); return false;">"""+word7+"""</div>
	</div>""")

def w_tail():
	write_file.write("""	<A NAME="32"> </A>

	</BODY>
</HTML>""")



w_header()

write_file.write("\n\n")

w_HebEng_L1( chapterVerse, word1, word2, word3, word4, word5, word6, word7)

write_file.write("\n\n")

w_EngAHL_L1_B( chapterVerse, word1, word2, word3, word4, word5, word6, word7)

write_file.write("\n\n")

w_tail()


write_file.close




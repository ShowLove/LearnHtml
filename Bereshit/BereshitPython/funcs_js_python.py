# -*- coding: utf-8 -*-
######################################
# 
######################################

######################################
# Arguments
######################################
#div order
index = "1"
chapter_verse = "1_7"
line = "1"

orig_word = "bê'rey'shit"
replacement_word = "בְּרֵאשִׁית"

write_file = open("/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/test_writejs_header_Out.js","w")

######################################
#switch_Heb_Translit function calls
######################################
def switch_func_comment():
	write_file.write("""//functionName_cahpter_verse_line""" + "\n")

def switch_Heb_Translit_header(chapter_verse, line):
	write_file.write("""function Switch_Heb_Translit_"""+chapter_verse+"_"+line+"""(idElement){"""+"\n")

def dwr_comment_HT():
	write_file.write("\n"+"""	//1_Transliteration-->Heb 2_Heb_Transliteration""" + "\n")

def dynamic_word_replace( orig_word, replacement_word, index, chapter_verse):
	write_file.write("""    if( idElement == 1  &&  document.getElementById('divNum_"""+index+"_"+chapter_verse+"""').innerHTML == """+'"'+orig_word+""""){
      document.getElementById('divNum_"""+index+"_"+chapter_verse+"_"+line+"""').innerHTML ='"""+replacement_word+"""';""" + "\n")

def end_switch_Heb_Translit(chapter_verse, line):
	write_file.write("\n"+"""} //End of Switch_Heb_Translit_"""+chapter_verse+"_"+line+"""function\n\n""")

######################################
# switch_Eng_AHL function calls
######################################

# I already wrote switch function comment function <-- GOES HERE

def switch_Eng_AHL_header(chapter_verse, line):
	write_file.write("""function switch_Eng_AHL_"""+chapter_verse+"_"+line+"""(idElement){"""+"\n")

def dwr_comment_EA():
	write_file.write("\n"+"""	//1_AHL-->ENG 2_ENG_AHL""" + "\n")

# I alread wrote dynamic_word_replace  <-- GOES HERE

def end_switch_Eng_AHL(chapter_verse, line):
	write_file.write("\n"+"""} //End of switch_Eng_AHL_"""+chapter_verse+"_"+line+"""function\n\n""")

######################################
# changeChapterLang function calls
######################################
def changeChapterLang_comment():
	write_file.write("""//Change entire text to either Heb_or_Transliteration or Eng_or_AHL""" + "\n")

def changeChapterLang_header():
	write_file.write("""function changeChapterLang(idElement){
  //switch between Heb and Transliteration or Eng and AHL"""+"\n\n")

def changeChapterLang_condition1():  
    write_file.write("""	//Change all text to either Hebrew or Transliteration
    if( idElement == 1){"""+"\n")

#####################
# Heb <--> Translit..
# Eng <--> AHL
####################
#first 3 parameters are ID NUM
def change_word( index, chapter_verse, line, replacement_word ):
	write_file.write("""      document.getElementById('divNum_"""+index+"_"+chapter_verse+"_"+line+"""').innerHTML ="""+'"'+replacement_word+"""";"""+"\n")

def changeChapterLang_condition1n2_end():  
    write_file.write("""	return false;}"""+"\n\n")

def changeChapterLang_condition2():  
    write_file.write("""	//Change all text to either English or AHL
    if( idElement == 2){"""+"\n")

 # GOES HERE --> changeword(..) <-- GOES HERE

def changeChapterLang_condition1n2_end():  
    write_file.write("""	return false;}"""+"\n")

def changeChapterLang_end():
 	write_file.write("\n" + "}//endchangeChapterLang""" + "\n\n")

######################################
# execute code
######################################

# changeChapterLang
changeChapterLang_comment()
changeChapterLang_header()
changeChapterLang_condition1()
change_word( index, chapter_verse, line, replacement_word )
change_word( index, chapter_verse, line, replacement_word )
change_word( index, chapter_verse, line, replacement_word )
changeChapterLang_condition1n2_end()
changeChapterLang_condition2()
change_word( index, chapter_verse, line, replacement_word )
change_word( index, chapter_verse, line, replacement_word )
change_word( index, chapter_verse, line, replacement_word )
changeChapterLang_condition1n2_end()
changeChapterLang_end()
#switch_Heb_Translit
switch_func_comment()
switch_Heb_Translit_header(chapter_verse, line)
dwr_comment_HT()
dynamic_word_replace( orig_word, replacement_word, index, chapter_verse)
dynamic_word_replace( orig_word, replacement_word, index, chapter_verse)
end_switch_Heb_Translit(chapter_verse, line)
#switch_Eng_AHL
switch_func_comment()
switch_Eng_AHL_header(chapter_verse, line)
dwr_comment_EA()
dynamic_word_replace( orig_word, replacement_word, index, chapter_verse)
dynamic_word_replace( orig_word, replacement_word, index, chapter_verse)
end_switch_Eng_AHL(chapter_verse, line)




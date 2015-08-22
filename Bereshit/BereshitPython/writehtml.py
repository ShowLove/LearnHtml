# -*- coding: utf-8 -*-

#function that writes the header info for the html file
	write_file.write(''+"\n")
def writeheader( ):
	write_file.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">'+"\n")
	write_file.write('<HTML>'+"\n")
	write_file.write('<link type="text/css" rel="stylesheet" href="stylesheet.css"/>'+"\n")
	write_file.write('<HEAD>'+"\n")
	write_file.write('	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">'+"\n")
	write_file.write('	<TITLE>'+"\n")
	write_file.write('		בְּרֵאשִׁית'+"\n")
	write_file.write('	</TITLE>'+"\n")
	write_file.write('</HEAD>'+"\n")
	write_file.write('<BODY>'+"\n")
	write_file.write('	<div class="changeLanguage" style="width:100%; float:right;">'+"\n")
	write_file.write('		<div onclick="javascript:changeChapterLang(1); return false;">עברית</div>'+"\n")
	write_file.write('		<div onclick="javascript:changeChapterLang(2); return false;">English</div>'+"\n")
	write_file.write('	</div>'+"\n")
	write_file.write('	<H1 ALIGN="CENTER">בְּרֵאשִׁית</H1>'+"\n")
	write_file.write(''+"\n\n")

def write_verse_shell( ):
	write_file.write('	<div class="eight_w_verses" style="width:100%; float:right;">'+"\n")

def write_ch_v_div( ):
	write_file.write('			<div class="chapterverse"> <strong>{בְּרֵאשִׁית}</strong> </div>'+"\n")

def write_verse_div( engw, num, hebrew )


##########################################################################

#open the file
input_file = open( "/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/chapter1.txt", "r")
#read file into a list of lines
lines_list = input_file.read().splitlines()
input_file.close()
write_file = open("/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/output.txt","w")

#write the header
writeheader()

# Writing a VARIABLE to file in for loop
for var_list in lines_list:
	#list of words in verse
	word_list = var_list.split()
	num_words = len(word_list) - 1 #in verse

	#for index, word in enumerate(word_list):
		#write_file.write(word+"("+str(index)+")")
		#manipulate char by char withinin the present line of data

	#exit inner for loop		
	#write_file.write("NumWordsInVerse("+str(num_words)+")"+"\n")

# Close the FILE object in PYTHON
write_file.close














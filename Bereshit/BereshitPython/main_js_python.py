# -*- coding: utf-8 -*-

import main_js_functions

#open the file
input_file = open( "/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/out_main_js.txt", "r")

#read file into a list of lines
lines_list = input_file.read().splitlines()

# Close the File stream handler
input_file.close()

# The OPEN function returns a file object
write_file = open("/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/out_main_js.js","w")


#I need to declare this for first iteration of for loop or to make my code a bit clearer
num_words = 0
chapter_verse = "1_1"
line = 0
L1 = main_js_functions.L1	#HebTransliteration if word%4 = 3 or 4
L2 = main_js_functions.L2	#EngAHL				if word%4 = 1 or 2
language = L1

#write comment, header for changeChapterLanguage
main_js_functions.changeChapterLang_comment(write_file)
main_js_functions.changeChapterLang_header(write_file)
# This loop will iterate condition 1
main_js_functions.changeChapterLang_condition1(write_file)

# At this point there should NOT be bad data
# out_main_js should be formated
# this loop should write L1 of changeChapterLanguage porition of js
for index, var_list in enumerate(lines_list): 
	#tric for splitin a string to a list of words
	word_list = var_list.split()

	num_words = len(word_list) - 1
	num_heb_words = num_words/4
	num_lines = num_heb_words/8
	num_hebWords_on_lastLine = num_heb_words%8

	if num_hebWords_on_lastLine > 0 and num_words > 8:
		num_lines = num_lines + 1

	line = 0
	# Parse a single line at a time
	for index, word in enumerate(word_list):

		#we found a new verse
		if ':' in word:
			chapter_verse = main_js_functions.remColon( word )

		# line number
		if index%8 == 0:
			line = line + 1

		# language
		if index%4 == 3: #Hebrew
			language = L1
			main_js_functions.change_word( write_file, str(index), chapter_verse, str(line), language, word )

		if index%4 == 1: #English
			language = L2
			main_js_functions
			main_js_functions.change_word( write_file, str(index), chapter_verse, str(line), language, word )


	#exit inner for loop		
	#write_file.write("NumWordsInVerse("+str(num_words)+")"+"\n")

#Finished writing condition1 for ChangChapterLang close it 
main_js_functions.changeChapterLang_condition1n2_end( write_file )

# Close the FILE object in PYTHON
write_file.close
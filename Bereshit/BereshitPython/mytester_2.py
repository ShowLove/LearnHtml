# -*- coding: utf-8 -*-

import main_html_functions

#main_html_python.py#
#################################Part 1###############################################
######################################################################################
# This should set up Heb Eng of changeChapterLanguage porition of js
######################################################################################
#open the file
input_file = open( "/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/out_main_js.txt", "r")

#read file into a list of lines
lines_list = input_file.read().splitlines()

# Close the File stream handler
input_file.close()

# The OPEN function returns a file object
write_file = open("/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/out_main_html.html","w")

#Writess the top portion of html code
main_html_functions.header( write_file )

L1 = main_html_functions.L1	#HebTransliteration if word%4 = 3 or 4
L2 = main_html_functions.L2	#EngAHL				if word%4 = 1 or 2

######################################################################################
# this loop should write Heb/Transliteration div wrap And the ENG AHL div wrap 
######################################################################################
for index, var_list in enumerate(lines_list): 
	#tric for splitin a string to a list of words
	word_list = var_list.split()

	line = 0
	language = L1

	##################################################################################
	# 7 words per Div/Line. Each for loop writes functions for an entire verse
	# This For loop should be doing the Hebrew part
	#################################################################################
	for index2, word in enumerate(word_list):

		#Break if we find bad data
		if word.isdigit():
			if int(word) < 8 and index2%4 != 2:	# AHL on 2 bad data would be on 1
				break
		#we found a new verse
		if ':' in word:
			chapter_verse = main_html_functions.remColon( word )

		# write the divs for each word
		if index2%4 == 3 and index2 != 0: #Print divs for hebrew words
			main_html_functions.changeWord( write_file, str(index2), chapter_verse, str(line), language, word)

		# line number: Lines should start at 1
		# We are on a new line
		if index2%32 == 0:
			line = line + 1
			# If !firstLine write end to previous line 
			if index2 != 0:
				main_html_functions.end_lang1_2_divWrapper( write_file )

			#If we have no words left theres no use in writing headers
			#index starts at 0 but len !zero_index
			if (index2+1) < len(word_list):
				main_html_functions.lang1_header( write_file )
				#We want to highlight the first verse
				if index2 == 0:
					main_html_functions.lang1_newVerse( write_file, word_list[0] )


	#exit inner for loop
	#Last line did NOT have exactly 8 words
	if index2%32 != 0:
		main_html_functions.end_lang1_2_divWrapper( write_file )

	line = 0
	language = L2

	##################################################################################
	# 7 words per Div/Line. Each for loop writes functions for an entire verse
	# This For loop should be doing the English part
	#################################################################################
	for index3, word in enumerate(word_list):

		#Break if we find bad data
		if word.isdigit():
			if int(word) < 8 and index3%4 != 2:	# AHL on 2 bad data would be on 1
				break
		#we found a new verse
		if ':' in word:
			chapter_verse = main_html_functions.remColon( word )

		#Print divs for Eng words
		if index3%4 == 1 and index3 != 0: 
			main_html_functions.changeWord( write_file, str(index3), chapter_verse, str(line), language, word)

		# line number: Lines should start at 1
		# We are on a new line
		if index3%32 == 0:
			line = line + 1
			# If !firstLine write end to previous line 
			if index3 != 0:
				main_html_functions.end_lang1_2_divWrapper( write_file )

			#If we have no words left theres no use in writing headers
			#index starts at 0 but len !zero_index
			if (index3+1) < len(word_list):
				main_html_functions.lang2_header( write_file,  )
				#We want to highlight the first verse
				if index3 == 0:
					main_html_functions.lang2_newVerse( write_file, word_list[0] )


	#exit inner for loop
	#Last line did NOT have exactly 8 words
	if index3%32 != 0:
		main_html_functions.end_lang1_2_divWrapper( write_file )


# Close the FILE object in PYTHON
write_file.close

main_html_functions.w_tail( write_file )
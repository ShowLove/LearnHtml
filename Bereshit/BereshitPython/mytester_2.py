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
prev_newL_Index = 0
temp = 0
hebTrans = True
engLine_End = False

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

		#Switch b/w hebTrans<-->engAHL every new line####################################
		if hebTrans == True:

			language = L1

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
					#If on a newL that's !firstL then switch hebTrans<-->engAHL
					hebTrans = False			#NEW
					temp = index2
					index2 = prev_newL_Index   	#NEW  is this correct?
					prev_newL_Index = temp		#Save this for next time we are on a newL
					engLine_End = False			#Let nxt if know were at beginning of eng line

				#If we have no words left theres no use in writing headers
				#index starts at 0 but len !zero_index
				#Only do this if we are on a hebrew line
				if hebTrans == True:
					if (index2+1) < len(word_list):
						main_html_functions.lang1_header( write_file )
						#We want to highlight the first verse
						if index2 == 0:
							main_html_functions.lang1_newVerse( write_file, word_list[0] )

		#Switch b/w hebTrans<-->engAHL every new line####################################
		if hebTrans == False:

			language = L2

			#Print divs for Eng words
			if index2%4 == 1 and index2 != 0: 
				main_html_functions.changeWord2( write_file, str(index2), chapter_verse, str(line), language, word)

			# line number: Lines should start at 1
			# We are on a new line
			if index2%32 == 0:

				# If !firstLine write end to previous line 
				if index2 != 0:
					main_html_functions.end_lang1_2_divWrapper( write_file )
					# If we are at end of eng line set booleans
					if engLine_End == True:
						hebTrans = True			#NEW

				# Next time we hit a new line it should be the end of Eng line
				engLine_End = True

				#If we have no words left theres no use in writing headers
				#index starts at 0 but len !zero_index
				#Only do this if we are on an Eng line
				if hebTrans == False:
					if (index2+1) < len(word_list):
						main_html_functions.lang2_header( write_file,  )
						#We want to highlight the first verse
						if index2 == 0:
							main_html_functions.lang2_newVerse( write_file, word_list[0] )


	#exit inner for loop
	#Last line did NOT have exactly 8 words
	if index2%32 != 0:
		main_html_functions.end_lang1_2_divWrapper( write_file )



# Close the FILE object in PYTHON
write_file.close

main_html_functions.w_tail( write_file )
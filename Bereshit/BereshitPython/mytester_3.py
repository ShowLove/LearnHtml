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

	#chunks of 8 list: split from list of words in each line/verse
	#Verse is split into 8w chunks and put in a list
	verse_chunks =[word_list[x:x+32] for x in xrange(0, len(word_list), 32)]

	line = 0
	language = L1
	list_length = len(word_list)

	#Finds last word in verse
	num_lines_in_verse = len(verse_chunks)									#number of chunks								
	num_w_last_chunk = len(verse_chunks[num_lines_in_verse - 1])			#size of chunk
	#print verse_chunks[ num_lines_in_verse - 1][ num_w_last_chunk - 1]

	print verse_chunks[0][0]

	#prints each line completely without if statement: We print 8 words in a line
	for lineIndex in range(num_lines_in_verse):

		for chunksIndex in range( len(verse_chunks[lineIndex]) ):
			# Condition for Hebrew
			if chunksIndex%4 == 3 and chunksIndex != 0: #Print hebrew words
				print verse_chunks[lineIndex][chunksIndex] + ",",

		print "\n\n",

		for chunksIndex in range( len(verse_chunks[lineIndex]) ):
			# Condition for Eng
			if chunksIndex%4 == 1 and chunksIndex != 0: #Print Eng words
				print verse_chunks[lineIndex][chunksIndex] + ",",

		print "\n\n",



# Close the FILE object in PYTHON
write_file.close

main_html_functions.w_tail( write_file )
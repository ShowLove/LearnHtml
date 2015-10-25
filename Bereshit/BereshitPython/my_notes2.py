	##################################################################################
	# 7 word2s per Div/line2. Each for loop writes functions for an entire verse
	# This For loop should be doing the English part
	#################################################################################
	line2 = line2_temp
	language = L2

	#Continue where we left off last time
	for index3 = index3_tmp, word2 in enumerate(word_list2):

		#Break if we find bad data
		if word2.isdigit():
			if int(word2) < 8 and index3%4 != 2:	# AHL on 2 bad data would be on 1
				break
		#we found a new verse
		if ':' in word2:
			chapter_verse = main_html_functions.remColon( word2 )

		#Print divs for Eng word2s
		if index3%4 == 1 and index3 != 0: 
			main_html_functions.changeword2( write_file, str(index3), chapter_verse, str(line2), language, word2)

		# line2 number: line2s should start at 1
		# We are on a new line2
		if index3%32 == 0:
			line2 = line2 + 1
			# If !firstline2 write end to previous line2 
			if index3 != 0:
				main_html_functions.end_lang1_2_divWrapper( write_file )

			#If we have no word2s left theres no use in writing headers
			#index starts at 0 but len !zero_index
			if (index3+1) < len(word_list2):
				main_html_functions.lang2_header( write_file,  )
				#We want to highlight the first verse
				if index3 == 0:
					main_html_functions.lang2_newVerse( write_file, word_list2[0] )

	index3_tmp = index3
	line2_temp = line2

	#exit inner for loop
	#Last line2 did NOT have exactly 8 word2s
	if index3%32 != 0:
		main_html_functions.end_lang1_2_divWrapper( write_file )

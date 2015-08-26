#open the file
input_file = open( "/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/data_chapter1.txt", "r")

#read file into a list of lines
lines_list = input_file.read().splitlines()

# Close the File stream handler
input_file.close()

# The OPEN function returns a file object
write_file = open("/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/out_main_js.txt","w")


##############################################################
# not including C:V and starting on 0 index
# len gives you the actual number not zero based hence the - 1
# num_words  		= total words including Eng AHL Heb and Trans words
# num_heb_words 	= 4 words = ("Eng AHL Heb and Trans") = 1 group, 1 heb word per group
# num_lines     	= total lines - last line //assuming groups is not a multiple of 8
# num_lines      	= real total number of lines after if statment
# num_hebWords_on_lastLine =  self explanitory
# fix_index 		= fixes glitch where new word_list is not a new line
##############################################################

#I need to declare this for first iteration of for loop
num_words = 0

# Writing a VARIABLE to file in for loop
for index, var_list in enumerate(lines_list): 
	#tric for splitin a string to a list of words
	word_list = var_list.split()

	#PART1: fixes glitch where new word_list is not a new line PART2	
	# If next word_list is a glitch, prepare acordingly
	#check this word_List is NOT: out of range, bad data, a verse
	if index < len(lines_list) - 2: # !(out of range) I beleive this is precise
		if not ( index == 0 and lines_list[index+1][0].isdigit() < 8 ) or ( lines_list[index+1][0] == 'The' and lines_list[index+1][1] == 'Mechanical' ) or ( lines_list[index+1][1] == 'Jeff' ):
			if ( ':' not in lines_list[index+1][0] ):
				#numWords contains previous word_list numwords value
				#fix_index+1 because we dont want this word_list to start at zero
				fix_index = num_words + 1;
				fix_index_boolean = True

	#PART2: Make this verse's logic a continuation of the last verse
	if not ( index == 0 and lines_list[index][0].isdigit() < 8 ) or ( lines_list[index][0] == 'The' and lines_list[index][1] == 'Mechanical' ) or ( lines_list[index][1] == 'Jeff' ):
		if ( index == 0 and ':' not in word ):
			#numWords contains previous word_list numwords value
			#fix_index+1 because we dont want this word_list to start at zero
			fix_index = num_words + 1;
			fix_index_boolean = True
			print "\n\n--> !!This is a glitch!! <--"

	num_words = len(word_list) - 1
	num_heb_words = num_words/4
	num_lines = num_heb_words/8
	num_hebWords_on_lastLine = num_heb_words%8

	if num_hebWords_on_lastLine > 0 and num_words > 8:
		num_lines = num_lines + 1

	# Parse a single line at a time
	for index, word in enumerate(word_list):
		#remove bad data
		if len(word_list) > 1:
			#Bad Data: References, Page Title, (c) //small poss that reff could be first 8 AHL
			if ( index == 0 and word.isdigit() < 8 ) or ( word_list[0] == 'The' and word_list[1] == 'Mechanical' ) or ( word_list[1] == 'Jeff' ):
				print "Bad Data"
				break


		#we found a new verse
		if ':' in word:
			print word+ "  "+"num:words, hebrew_words, num_Lines, num_hebWords_on_lastLine -->"+str(num_words)+","+str(num_heb_words)+","+str(num_lines)+","+str(num_hebWords_on_lastLine)+","+"\n"
			write_file.write("\n"+word+"found verse!!\n")

		write_file.write(word+"("+str(index)+")")

	#exit inner for loop		
	write_file.write("NumWordsInVerse("+str(num_words)+")"+"\n")

# Close the FILE object in PYTHON
write_file.close
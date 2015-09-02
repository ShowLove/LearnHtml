def concatenateNext_string_TF( index, lines_list):
	next_wL_index = index + 1
	if next_wL_index < len(lines_list):
		#ThisIs A variable word_list: tric for splitin a string to a list of words
		problem_var = lines_list[next_wL_index]
		problem_words2 = problem_var.split()
		#Check if this is a vere or a glitch where we start in middle of verse
		if ( (problem_words2[0].isdigit() < 8) and (':' not in problem_words2[0]) ):
			return True

	return False

	#DEBUG: condition_String, real_index, lines_list2
def concatenateNext_string( index, lines_list, lines_list2, condition_String, real_index):
	next_wL_index = index + 1
	if next_wL_index < len(lines_list):
		#ThisIs A variable word_list: tric for splitin a string to a list of words
		problem_var = lines_list[next_wL_index]
		problem_words2 = problem_var.split()

		if ( (problem_words2[0].isdigit() < 8) and (':' not in problem_words2[0]) ):
			#DEBUG: print problem_words2[0]+condition_String+"[index:"+real_index+"]" #DEBUG
			#Add a space to the next so that it doesnt join the lastW from this list and firstW from the next
			#Then Join this line and the next
			#Then replace word_list
			lines_list[index+1] = " "+lines_list[index+1]
			lines_list[index:index+2] = [''.join(lines_list[index:index+2])]
			word_list = lines_list[index].split()
			print "w1inConcatFunc("+word_list[0]+","+word_list[-1]+")"

	return word_list

def remColon( chapterVerse ):
	return chapterVerse.replace(":"," ")

def verseInt( chap_verse_string ):
	currentVerse = word_list[0]
	currentVerse = remColon( currentVerse )
	currV_nums = currentVerse.split()
	currentVerse = currV_nums[1]
	currentV_int = int(currentVerse)
	return currentV_int

#open the file
input_file = open( "/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/data_chapter1.txt", "r")

#read file into a list of lines
#lines_list --> what we are itterating
lines_list = input_file.read().splitlines()
#lines_list2 --> what we are modifying
lines_list2 = input_file.read().splitlines()

# Close the File stream handler
input_file.close()

# The OPEN function returns a file object
write_file = open("/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/out_main_js.txt","w")

#index_buffer = 0

# Writing a VARIABLE to file in for loop
for index, var_list in enumerate(lines_list):

	#DEBUG
	old_word_list = lines_list[index].split()
	print "w1@currOldIndexLL("+old_word_list[0]+")"

	#gltich: A string that does not beging where verse begins i.e genesis 1:7

	#tric for splitin a string to a list of words
	#This will be used if nothing was a glitch
	#word_list = var_list.split()  <--- how I used to do it
	word_list = lines_list[index].split()

	#find the current verse to compare it later
	if ':' in word_list[0]:
		currentV_int = verseInt( word_list[0] )
		#print "This_is_the_verse-->" + str(currentV_int)


	#get number of words in this verse
	num_word_lists = len(lines_list)

	#If current and next string is a glitch just join current with previous
	if ( (word_list[0].isdigit() < 8) and (':' not in word_list[0]) ) and concatenateNext_string_TF( index, lines_list):
		word_list = concatenateNext_string( index - 1, lines_list, lines_list2, "[cur&nextGlitch]", str(index) )
		#Debug Info
		new_word_list = lines_list[index].split()
		print "Cur&NexGlitch-w1@curNewIndex("+new_word_list[0]+")"+"w1@main_W_List("+word_list[0]+")"
	#Catches if NEXT string is a glitch 
	elif concatenateNext_string_TF( index, lines_list):
		word_list = concatenateNext_string( index, lines_list, lines_list2, "[nextGlitch]", str(index) )
		#Debug Info
		new_word_list = lines_list[index].split()
		print "NextGlitch-w1@curNewIndex("+new_word_list[0]+")"+"w1@main_W_List("+word_list[0]+")"
	#If current string is a glitch join it to previous
	elif ( (word_list[0].isdigit() < 8) and (':' not in word_list[0]) ):
		word_list = concatenateNext_string( index - 1, lines_list, lines_list2, "[curGlitch]", str(index) )
		#Debug Info
		new_word_list = lines_list[index].split()
		print "CurrGlitch-w1@curNewIndex("+new_word_list[0]+")"+"w1@main_W_List("+word_list[0]+")"

	#print "EndIndex("+str(index)+")index_buffer("+str(index_buffer)+")"

	#not including C:V and starting on 0 index
	num_words = len(word_list) - 1

	for index2, word in enumerate(word_list):
		if len(word_list) > 1:
			#Bad Data: References, Page Title, (c) 
			if ( index2 == 0 and word.isdigit() ) or ( word_list[0] == 'The' and word_list[1] == 'Mechanical' ) or ( word_list[1] == 'Jeff' ):
				print "Bad Data"
				break

		#DEBUG: we found a new verse. It's printing the index of the outer for loop not this one
		if ':' in word:
			print word+ "  " + word_list[1]+"("+str(index)+")"+"\n"

		write_file.write(word+"("+str(index2)+")")

	#exit inner for loop		
	write_file.write("NumWordsInVerse("+str(num_words)+")"+"\n")

# Close the FILE object in PYTHON
write_file.close
#open the file
input_file = open( "/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/data_chapter1.txt", "r")

#read file into a list of lines
lines_list = input_file.read().splitlines()

# Close the File stream handler
input_file.close()

# The OPEN function returns a file object
write_file = open("/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/out_main_js.txt","w")

# Writing a VARIABLE to file in for loop
for index, var_list in enumerate(lines_list):

	#tric for splitin a string to a list of words
	#word_list = var_list.split()

	#get number of words in this verse
	num_word_lists = len(lines_list)

	problem_var = lines_list[index]
	problem_words = problem_var.split()

	#Catches glitch word list, else we print chap:verse word[1]
	if len(problem_words) > 1:
		if ( (problem_words[0].isdigit() < 8) and (':' not in problem_words[0]) ):
			print "Glitch: "+problem_words[0]+"\n"

	#Catches if next sentence is a glitch
	next_wL_index = index + 1
	if next_wL_index < len(lines_list):
		problem_var = lines_list[next_wL_index]
		problem_words2 = problem_var.split()

		if len(problem_words) > 1:
			if ( (problem_words2[0].isdigit() < 8) and (':' not in problem_words2[0]) ):
				print "Next_willB_Glitch:"+problem_words2[0]
				lines_list[index+1] = " "+lines_list[index+1]
				lines_list[index:index+2] = [''.join(lines_list[index:index+2])]
				#lines_list[index] = problem_words + problem_words2

	word_list = lines_list[index].split()

	#not including C:V and starting on 0 index
	num_words = len(word_list) - 1

	for index, word in enumerate(word_list):
		if len(word_list) > 1:
			#Bad Data: References, Page Title, (c)
			if ( index == 0 and word.isdigit() ) or ( word_list[0] == 'The' and word_list[1] == 'Mechanical' ) or ( word_list[1] == 'Jeff' ):
				print "Bad Data"
				break

		#we found a new verse
		if ':' in word:
			print word+ "  " + word_list[1] + "\n"

		write_file.write(word+"("+str(index)+")")

	#exit inner for loop		
	write_file.write("NumWordsInVerse("+str(num_words)+")"+"\n")

# Close the FILE object in PYTHON
write_file.close
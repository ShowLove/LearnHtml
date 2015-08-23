
#open the file
input_file = open( "/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/chapter1.txt", "r")

#read file into a list of lines
lines_list = input_file.read().splitlines()

# Close the File stream handler
input_file.close()

# The OPEN function returns a file object
write_file = open("/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/output.txt","w")

# Writing a VARIABLE to file in for loop
for var_list in lines_list:
	#tric for splitin a string to a list of words
	word_list = var_list.split()
	#get number of words in this verse

	#not including C:V and starting on 0 index
	num_words = len(word_list) - 1

	for index, word in enumerate(word_list):
		if len(word_list) > 1:
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
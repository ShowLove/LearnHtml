
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
		write_file.write(word+"("+str(index)+")")
		#manipulate char by char withinin the present line of data

	#exit inner for loop		
	write_file.write("NumWordsInVerse("+str(num_words)+")"+"\n")

# Close the FILE object in PYTHON
write_file.close

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
	#tric for splitin a string to a list of chars
	char_list = list(var_list)

	for c in char_list:
		write_file.write("-"+c)
		#manipulate char by char withinin the present line of data



	#exit inner for loop		
	write_file.write("\n")

# Close the FILE object in PYTHON
write_file.close
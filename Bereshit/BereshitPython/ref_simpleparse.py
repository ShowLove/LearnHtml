
#open the file
input_file = open( "/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/chapter1.txt", "r")

#read file into a list of lines
lines_list = input_file.read().splitlines()

# Close the File stream handler
input_file.close()

# The OPEN function returns a file object
write_file = open("/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/output.txt","w")

# Writing a VARIABLE to file in for loop
for var in lines_list:
	write_file.write("!!!---"+var+"\n")

# Close the FILE object in PYTHON
write_file.close
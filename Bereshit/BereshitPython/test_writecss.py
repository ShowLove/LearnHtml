# -*- coding: utf-8 -*-

write_file = open("/Users/carlosgarzon/Desktop/Projects/LearnHtml/Bereshit/BereshitPython/pyOut.css","w")

######################################
# divs that are used in css
######################################
dynamicButton  = "change_verse_state"
eight_w_verses = "Heb_Transliteration"
eight_w_verses2= "English_AHL"

def w_body( dynamicButton, eight_w_verses, eight_w_verses2 ):
	write_file.write("""	div."""+dynamicButton+""" div { display:inline-block;
		float:right; width:30%; font-size:100%;font-family:David; padding:5px;
		height:20; border-color:black; border-style: solid; 
		border-width: 20px; border-radius: 5px; margin:auto;}

	/* each word takes 14% of the space */
	div."""+eight_w_verses+""" div { display:inline-block;
		float:right; width:10%; text-align:right; font-size:100%;font-family:David; padding:5px;}

	/* each word takes 14% of the space */
	div."""+eight_w_verses2+""" div { display:inline-block;
		float:right; width:10%; text-align:right; font-size:100%;font-family:David; padding:5px;}""")

#call the function
w_body( dynamicButton, eight_w_verses, eight_w_verses2 )

write_file.close




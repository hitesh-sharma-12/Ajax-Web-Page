<?php
	/*this program divided into three pages 1st html = which specifies what to display and takes input from user 2nd = javaspript in which the work on userinput have been 
	done i.e it takes the user input from html and return the expected output to html 3rd = php as here we can see that header change to xml that means that this file 
	is taken as a xml file i.e input and output process are takes in the form of xml and execution done in php form. so, we can say that the statement that are echo are taken as xml statements(statements
	means it is taken as the content of xml file like the way that the statement original xml document contains) and the other funcition works on the basis of php
	like while using if statement wether if condition execute and else so the content of the xml depends on if function(i.e php function ) on the basis of condition.
	1.so why to use php coz php can generate xml code(2nd point is the reason) 2. why to use xml coz anytime we sent something from php to javascript we require xml tags
	conclusion: communication can be done between javascript and xml but xml donot have advance features(coz it is user defined) that's why php comes to work and we
	create xml file by using php to enhance php properties.and this is what ajax(asynch. javascr. and xml) means.now html and its codes can be see by user(frontend)
	javascript also and is used to process input(so they are presentin user system) and php/xml are present in server so we can't access this code, we just can get
	data from it by giving it a valid request and that request is sqnd by javascript*/
	
	header('Content-Type: text/xml');
	echo '<?xml version = "1.0" encoding = "UTF-8" standalone = "yes" ?>';//this is a house keeping work standalone use as to verify valid xml content
	
	echo '<response>';//here echo dont works as print, it works as the xml statement i.e all the echoing statement are taken as xml statements
	$food_array = array('apple', 'mango', 'dragon fruit', 'guava', 'banana');
	$food =  $_GET['food']; // this is the input given by javascript which gets input by html
	
	if(in_array($food, $food_array)){//in_array function checks wether the user given input is present in array as element or not if yes then it return true otherwise it reutrn false 
	//parameter 1st =  value have to searched in array 2nd = the array in which the value have to be sarched
	
	echo 'We do have '.$food.'!';
	}else if($food == '')
		echo 'Please enter your order!';
	else
		echo 'Sorry we don\'t sell '.$food.'!';
	
	echo '</response>';
	
	//here we can see there are three conditional statement from which one is true.so , we have one tag(response) and one statement 
	
	?>
	
	
	
	
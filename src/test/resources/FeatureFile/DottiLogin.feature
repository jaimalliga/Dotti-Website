Feature: To validate sigIn functionality of dotti page
Background:
Given User should lounch the browser and load the Dotti page URL
When User should go to the Drop Down SigIn
And Click the sigIn button
And print the title of dotti signin page
And print the current url dotti signin page

@sanity
Scenario: Validate the sigIn page invalid email and invalid passWord
And User should type the Invalid email id in dotti page
							# One dimention Map							
							|invalid1|jaijo@gmail.com|
							|invalid2|geeja@gmail.com|
							|invalid3|jaijohn@gmail.com|
And User should type the Invalid password in dotti page
							# Two dimention Map
							|invPass1|invPass2|invPass3|invPass4|
							|112345|123456|134567|145678|
							|212345|223456|234567|245678|
							|312345|323456|334567|345678|
And User shhould click the SIGN IN button
Then User Should navigate to incorrect credential page

@regression
Scenario: Validate the sigIn page valid email and invalid passWord
And User should type the valid Email id in dotti page
							# 1 dimentional list ----list<String>
							|jaimalliga@gmail.com|jai@gmail.com|raj@gmail.com|jaijohn@gmail.com|
And User should type the Invalid Password in dotti page
							# 2 diementional list -------list<list<String>>
							|12345|23456|34567|45678|
							|54321|65432|76543|87654|
And User shhould click the SIGN IN button
Then User Should navigate to incorrect credential page verify url

@smoke
Scenario Outline: Validate the singin page invalid Email and valid Password bundle of data
And User should type the invalid Email id in dotti page"<email>"
And User should type the valid Password in dotti page"<pass>"
And User shhould click the SIGN IN button
Then User Should check url and navigate to incorrect credential page

Examples: 
					|email|pass|
					|kannan@gmail.com|abcdef|
					|dhana@gmail.com|abcdef|
					|bala@ymail.com|abcdef|

#@regression
#Scenario Outline: Validate the singin page valid Email and valid Password bundle of data
#And User should type the valid Email id in dotti page"<email>"
#And User should type the valid Password in dotti page"<pass>"
#And User shhould click the SIGN IN button
#Then User Should check url and navigate to  page
#
#Examples: 
#					|email|pass|
#					|jaigoshickjohn@gmail.com|jaikumar|
			
					
					 
					
					
					
					
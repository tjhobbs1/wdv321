// JavaScript Document
/*
	This file will:
	
	- Create a Javascript object including an array
	- Convert the Javascript object into a JSON object
	- Store the JSON object into local storage
	
	Goal: Provide an example of how to create a JSON object in Javascript
	Goal: Provide an example of how to consume a JSON object in Javascript

	Use the following data for your JSON object

		student_id = 332443
		student_gpa = 3.6
		student_courses = ["WDV101","WDV131","WDV105"]

*/

let student = {
	student_id : 332443,
	student_gpa : 3.6,
	student_courses : [
		"WDV1010", "WDV131", "WDV105"
	]
}

student = JSON.stringify(student);


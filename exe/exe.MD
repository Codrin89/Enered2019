->Write a function to check whether an `input` is a string or not. 
----------
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false
----------

Write a function to check whether a string is blank or not. 
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false

Write a function to split a string and convert it into an array of words.
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]

Write a function to extract a specified number of characters from a string.
console.log(truncate_string("Robin Singh",4));
"Robi"

Write a JavaScript function to convert a string in abbreviated form.
he editor
console.log(abbrev_name("Robin Singh"));
"Robin S.

Write a JavaScript function to hide email addresses to protect from unauthorized user
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"

Write a JavaScript function to parameterize a string.
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"

Write a JavaScript function to capitalize the first letter of a string.
console.log(capitalize('js string exercises'));
"Js string exercises"

 Write a JavaScript function to capitalize the first letter of each word in a string.
 console.log(capitalize_Words('js string exercises'));
"Js String Exercises"

Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
console.log(swapcase('AaBbc'));
"aAbBC"

Write a JavaScript function to concatenates a given string n times
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
"Ha!Ha!"
"Ha!Ha!Ha!"

Write a JavaScript function to insert a string within a string at a particular position
console.log(insert('We are doing some exercises.','JavaScript ',18));
"We are doing some JavaScript exercises.

Write a JavaScript function to chop a string into chunks of a given length. 
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
["w3", "re", "so", "ur", "ce"]
["w3r", "eso", "urc", "e"]

Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.
console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
"1st"
"8th"
"301st"
"402nd"


Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
Output :
"The quick brown fox jumps over lazy dog"
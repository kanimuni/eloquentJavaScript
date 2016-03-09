//--------------------------------------------------
/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

var paint7Triangle = function() {
	var sevenHash = "#######";
	for (var i =6; i >= 0; i--) {
		console.log( sevenHash.slice(i) );
	}
};

//version that draws a triangle any size
var paint7Triangle = function(number) {
	var hashSign = "";
	for (var i =1; i <= number; i++) {
		hashSign +="#"
		console.log(hashSign);
	}
};

paint7Triangle();
//--------------------------------------------------
/*
FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, you’re now allowed to feel good about yourself.)
*/

var fizzBuzz = function(number) {
  for (var i=0; i <= number; i++) {
    if ( (i % 3 === 0) && (i % 5 === 0) )
    	console.log("i = " + i + " ,FIZZBUZZ");
    else if (i % 3 === 0)
    	console.log("i = " + i + " ,FIZZ");
    else if (i % 5 === 0)
    	console.log("i = " + i + " ,BUZZ");
	}
};

var fizzBuzz = function(number) {
  for (var i=0; i <= number; i++) {
    ( (i % 3 === 0) && (i % 5 === 0) ) ? console.log(i + " FIZZBUZZ") : console.log("#");
    (i % 3 === 0) ? console.log(i + "FIZZ") : console.log("#") ;
    (i % 5 === 0) ? console.log(i + "BUZZ") : console.log("#") ;
	}
};
//--------------------------------------------------
/*
Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/


var createChessBoard = function(number) {
var oddLine = "";
var evenLine = "";
for (var x = 1; x < number+1; x++) {
		if (x % 2 === 0) {
			oddLine +="#";
		} else {
			oddLine +=" ";
		}
	}
for (var y = 0; y < number; y++) {
		if (y % 2 === 0) {
			evenLine +="#";
		} else {
			evenLine +=" ";
		}
	}
for (var i=1; i < number+1; i++) {
	if( (i % 1 === 0) && (i % 2 === 0 ) ) {
		console.log(evenLine);
	} else {
		console.log(oddLine);
	}
}
};
//--------------------------------------------------

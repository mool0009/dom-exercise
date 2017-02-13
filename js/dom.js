/*global console*/

//Task 1

//Access HTML element with id tag-line.

var tagline = document.getElementById("tag-line");

//Access all headings that belong to div with the class name bg-main-content.

var headings = document.querySelectorAll(".bg-main-content h2");
console.log(headings);

//Create the variable collect and assign it with content of tag-line.

var collect = tagline.innerHTML + "\n-----------------\n";

//Loop through the array of headings and append the content of each heading to variable collect
for (var i = 0; i < headings.length; i += 1) {
	collect += headings[i].innerHTML + "\n";
}

//After the loop, use alert to print collect
alert(collect);


//Task 2

//Access 13th div with class name box that belongs to div with the class name bg-main-content. You can name the variable when_to_launch.

var bgcontent = document.querySelector(".bg-main-content");
var when_to_launch = bgcontent.querySelectorAll(".box")[12];
console.log(when_to_launch);

//Use property children to "scoop" in array all HTML elements that belong to that div.

var boxarray = when_to_launch.children;

//Create the variable collect and assign it with content of heading that belongs to gotten array.


//Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.

var collect =boxarray[0].innerHTML + "\n-----------------\n";
	
for (var j = 1; j < boxarray.length; j += 1) {
	collect += "\n" + boxarray[j].innerHTML + "\n";
}

console.log(collect);

//After the loop, use alert to print collect

alert(collect);



// ASSALAM O ALAIKUM!
// Attention Required
// Saylani Web and Mobile Development course - Batch3! 
// Assignment 16- Week16
// Submit: https://forms.gle/QaEoFphTuvAwKD6X6
// Please solve the following problem, please don't copy and paste any solution! 
// 1- Write a js program to check whether a character is uppercase or lowercase alphabet.
function caseCheck(alpha){
    if(alpha === alpha.toLowerCase()){
        return 'Lower case'
    }else{
        return 'Upper case'
    }
}
console.log(caseCheck('A'));
// 2- Write a js program to input Week number and print week day.
function weekDay(num){
   var week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    if(num <7 && num >=0){
        return week[num];
    }else{
        return 'number is less or greater'
    }
}
console.log(weekDay(0));
// 3- Write a js program to input month number and print number of days in that month.
function month(num){
    var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    if(num <12 && num >=0){
        return months[num];
    }else{
        return 'number is less or greater'
    }
}
console.log(month(0));
// 4- Write a js program to count total number of notes in given amount.
function numberOfNotes(num){
    var notes = '';
    if(num>=5000){
        notes+= 'five thousand: ' + Math.floor(num/5000);
        num = num%5000;
    }if(num>= 1000){
        notes+= ', one thousand: ' + Math.floor(num/1000);
        num = num%1000;

    }if(num>=500){
        notes+= ', five hundred: ' + Math.floor(num/500);
        num = num%500;

    }if(num>=100){
        notes+= ', one hundred: ' +Math.floor(num/100);
        num = num%100;

    }if(num>=50){
        notes+= ', fifty: ' + Math.floor(num/50);
        num = num%50;

    }if(num>=20){
        notes+= ', twenty: ' + Math.floor(num/20);
        num = num%20;

    }if(num>=10){
        notes+= ', ten: ' +Math.floor(num/10);
        num = num%10;

    }if(num>=1){
        notes+= ', and one rupee coins: '+ num;
    }
return notes
}


console.log(numberOfNotes(6978));
// 5- Write a js program to input angles of a triangle and check whether triangle is valid or not.
function triangle(angle1, angle2, angle3){
    if(angle1 + angle2 + angle3 == 180){
        return 'Triangle is valid'
    }else{
        return 'Triangle is not valid'
    }
}
console.log(triangle(30, 70, 80))
// 6-. Write a js program to input all sides of a triangle and check whether triangle is valid or not.

// 7- Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
function triangleSides(side1, side2, side3){
    if(side1 == side2 & side2 == side3){
        return 'Triangle is equilateral'
    }
    else if(side1 == side2 || side1 == side3 || side2 == side3){
        return 'Triangle is isosceles'
    }
   
    else{
        return 'Triangle is scalene'
    }
}
console.log(triangleSides(70, 70, 70));
// 8- Write a js program to find all roots of a quadratic equation.
// 9- Write a js program to calculate profit or loss.
// 10- Write a js program to search all occurrences of a character in given string.
// 11- Write a js program to count occurrences of a character in given string.
// 12- Write a js program to find highest frequency character in a string.
// 13- Write a js program to find lowest frequency character in a string.
// 14- Write a js program to count frequency of each character in a string.
// 15- Write a js program to remove first occurrence of a character from string.
// 16- Write a js program to remove last occurrence of a character from string.
// 17- Write a js program to remove all occurrences of a character from string.
// 18- Write a js program to remove all repeated characters from a given string.
// 19- Write a js program to replace first occurrence of a character with another in a string.
// 20- Write a js program to replace last occurrence of a character with another in a string.
// 21- Write a js program to replace all occurrences of a character with another in a string.
// 22- Write a js program to find first occurrence of a word in a given string.
// 23- Write a js program to find last occurrence of a word in a given string.
// 24- Write a js program to search all occurrences of a word in given string.
// 25- Write a js program to count occurrences of a word in a given string.
// 26- Write a js program to remove first occurrence of a word from string.
// 27- Write a js program to remove last occurrence of a word in given string.
// 28- Write a js program to remove all occurrence of a word in given string.
// 29- Write a js program to trim leading white space characters from given string.
// 30- Write a js program to trim trailing white space characters from given string.
// 31- Write a js program to trim both leading and trailing white space characters from given string.
// 32- Write a js program to remove all extra blank spaces from given string.
// 33- Write a js program to count frequency of each element in an array
// 34- Write a js program to print all unique elements in the array.
// 35- Write a js program to count total number of duplicate elements in an array.
// 36- Write a js program to delete all duplicate elements from an array.
// 37- Write a js program to merge two array to third array.
// 38- Write a js program to find reverse of an array.
// 39- Write a js program to put even and odd elements of array in two separate array.
// 40- Write a js program to search an element in an array.
// 41- Write a js program to sort array elements in ascending or descending order.
// 42- Write a js program to sort even and odd elements of array separately.
// 43- Write a js program to left rotate an array.
// 44- Write a js program to right rotate an array.
// 43- Write a js program to find sum of all natural numbers between 1 to n.
// 44- Write a js program to find sum of all even numbers between 1 to n.
// 45- Write a js program to find sum of all odd numbers between 1 to n.
// 46- Write a js program to print multiplication table of any number.
// 47- Write a js program to count number of digits in a number.
// 48- Write a js program to find first and last digit of a number.
// 49- Write a js program to find sum of first and last digit of a number.
// 50. Write a js program to swap first and last digits of a number.
// 51. Write a js program to calculate sum of digits of a number.
// 52. Write a js program to calculate product of digits of a number.
// Happy Coding!
// Naveed
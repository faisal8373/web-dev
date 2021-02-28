//1. Write a js program to find maximum between two numbers.
 

var num1 = 5;
var num2 = 7;
if(num1 > num2){
    console.log(num1, ' is greater than ', num2);
}
else{
    console.log(num2, ' is greater than ', num1);

}

// 2. Write a js program to find maximum between three numbers.
var number1 = 5;
var number2 = 7;
var number3 = 10;
if(number1 > number2 && number1 > number3){
    console.log(number1, 'is meximum between three numbers');
}else if(number2 > number1 && number2 > number3){
    console.log(number2, 'is meximum between three numbers');

}else{
    console.log(number3, 'is meximum between three numbers');

}

// 3. Write a js program to check whether a number is negative, positive or zero.
var number = 1;
if(number < 0){
    console.log(number, ' is negative');
}else if(number === 0){
    console.log(number, ' is zero');
}else{
    console.log(number, ' is positive');
}
// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.
var divisible = 42;
if(divisible % 5 === 0 && divisible % 11 ===0){
    console.log(divisible, ' is divisible by 5 and 11');
}else{
    console.log(divisible, ' is not divisible by either 5 or 11');
}
// 5. Write a js program to check whether a number is even or odd.
var even = 5;
if(even % 2 ===0){
    console.log(even, ' is even number');
}else{
    console.log(even, ' is odd number');
}
// 6. Write a js program to check whether a year is leap year or not.
var year = 2020;
if(year % 4 ===0){
    console.log(year, ' is leap');
}else{
    console.log(year, ' is not leap');
}
// 7. Write a js program to check whether a character is alphabet or not.
var char = 'a';
var alph = 'abcdefghijklmnopqrstuvxwyz';
var flag = false;
for(i=0; i< alph.length; i++){
if(char == alph[i]){
flag = true;
break;
}
}
if(flag){
    console.log(char + ' is aplhabet');
}
else{
    console.log(char + ' is not alphabet')
}
// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.
var a = 'e';
var vowel = 'aeiou';
var fla = false;
for(i=0; i< vowel.length; i++){
if(a == vowel[i]){
fla = true;
break;
}
}
if(fla){
    console.log(a + ' is vowel');
}
else{
    console.log(a + ' is not vowel')
}

// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.



// Strings Handling
// 1. Write a js program to find length of a string.
var string = 'name';
console.log('length is ', string.length);


// 2. Write a js program to copy one string to another string.


// 3. Write a js program to concatenate two strings.
var string1 = 'first';
var string2 = 'name';
console.log(string1 + ' ' + string2);

// 4. Write a js program to compare two strings.

console.log(string1 == string2);

// 5. Write a js program to convert lowercase string to uppercase.
var uppercase = 'faisal';
console.log(uppercase.toUpperCase());
// 6. Write a js program to convert uppercase string to lowercase.
var lowercase = 'FAISAL';
console.log(lowercase.toLowerCase());

// 7. Write a js program to toggle case of each character of a string.
var 

// 8. Write a js program to find total number of alphabets, digits or special character in a string.
var leng = 'anyNumberof*//12characters';
console.log(leng.length);
// 9. Write a js program to count total number of vowels and consonants in a string.

function isVowel(a){
    var vowel = 'aeiou';

for(var i=0; i< vowel.length; i++){
if(a == vowel[i]){
return true;

}


}
return false;
}
var ls = 'newstringtocountvowels';
var countVowel = 0;
var countConsonent = 0;
for(i=0; i< ls.length; i++){
    if(isVowel(ls[i])){
    countVowel++;
    }else{
        countConsonent++;
    }
}
console.log('vowels are: ', countVowel, ' and consonents are: ', countConsonent);

// 10. Write a js program to count total number of words in a string.
// 11. Write a js program to find reverse of a string.
// 12. Write a js program to check whether a string is palindrome or not.
// 13. Write a js program to reverse order of words in a given string
// 14. Write a js program to find first occurrence of a character in a given string.
// 15. Write a js program to find last occurrence of a character in a given string.
// Array Handling
// 1-Write a js program to read and print elements of array.
// 2. Write a js program to print all negative elements in an array.
// 3. Write a js program to find sum of all array elements.
// 4. Write a js program to find maximum and minimum element in an array.
// 5. Write a js program to find second largest element in an array.
// 6. Write a js program to count total number of even and odd elements in an array.
// 7. Write a js program to count total number of negative elements in an array.
// 8. Write a js program to copy all elements from an array to another array.
// 9. Write a js program to insert an element in an array.
// 10. Write a js program to delete an element from an array at specified position.
// Math Methods
// 1-Write a js program to round the number, without using the math.round method! 
// 2-Write a js program to ceil the number without using math.ceil method!
// 3-Write a js program to floor the number without using the math.floor method!
// Loops
// 1. Write a js program to print all natural numbers from 1 to n. - using for loop
// 2. Write a js program to print all natural numbers in reverse (from n to 1). - using for loop
// 3. Write a js program to print all alphabets from a to z. - using for loop
// 4. Write a js program to print all even numbers between 1 to 100. - using forloop
// 5. Write a js program to print all odd number between 1 to 100
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
function countWords(sting){
    sting = sting.split(' ');
    return sting.length;
}
console.log(countWords('Write a js program to find reverse of a string'))

// 11. Write a js program to find reverse of a string.
function reverseString(sting){
    newSting = '';
    for (let index = sting.length-1; index >= 0; index--){
        newSting += sting[index];
    }
      return newSting
}
console.log(reverseString('check'));
// 12. Write a js program to check whether a string is palindrome or not.
function palindrome(sting){
    palin = reverseString(sting);
    if(palin === sting){
        console.log('string is palindrome');
    }
    else{
        console.log('string is not palindrome');
    }
}
palindrome('gag')
// 13. Write a js program to reverse order of words in a given string
function reverseOrder(sting){
    sting = sting.split(' ');
    
    var reverse = '';
    for (let index =sting.length-1 ; index >= 0; index--){
        reverse += sting[index] + ' ';
    }  
    return reverse;
}
console.log(reverseOrder('Write a js program to find first occurrence of a character in a given string'));
       

// 14. Write a js program to find first occurrence of a character in a given string.
function firstOccur(char, sting){
    return sting.indexOf(char);
}
console.log(firstOccur('s', 'faisal'));
// 15. Write a js program to find last occurrence of a character in a given string.
function lastOccur(char, sting){
    return sting.lastIndexOf(char);
}
console.log(lastOccur('a', 'faisal'));

// Array Handling
// 1-Write a js program to read and print elements of array.
function arrRead(arr){
  
    arr.forEach(element => {
        console.log(element);
    });
}
arrRead([1,2,3,4,'name', 'age']);
// 2. Write a js program to print all negative elements in an array.
function negative(arr){
    arr.forEach(element => {
        if(element <0){
            console.log(element);
        }        
    });
}
negative([1,2,3,-1,-2,-3]);
// 3. Write a js program to find sum of all array elements.
function sumArray(arr){
    total = 0;
    arr.forEach(element => {
        total+=element;
    });
    return total;
}
console.log(sumArray([1,2,3,4,5,6,7,8,9]));
// 4. Write a js program to find maximum and minimum element in an array.
function maxMin(arr){
    // var max = arr[0];
    // var min = arr[0];
    // for (let index = 0; index < arr.length; index++) {
    //   if(arr[index+1] > arr[index] && arr[index+1] > max){
    //       max = arr[index+1]
    //   }
    //   if(arr[index+1] < arr[index] && arr[index+1] < min){
    //       min = arr[index+1]
    //   }
      
    // }
    arr = arr.sort();
    var max = arr[arr.length-1];
    var min = arr[0];

    return [max, min];
}
var max = maxMin([2,5,6,3,4,8,9,7,5,6,8])[0];
var min = maxMin([2,5,6,3,4,8,9,7,5,6,8])[1];
console.log('Maximum', max, ' Minimum', min);
// 5. Write a js program to find second largest element in an array.
function secondLargest(arr){
    arr = arr.sort()
    return arr[arr.length-2];
}
console.log('Second Largest', secondLargest([2,5,6,3,4,8,9,7,5,6,8]))
// 6. Write a js program to count total number of even and odd elements in an array.
function evenOdd(arr){
    var even = 0;
    var odd = 0;
    arr.forEach(element => {
        if(element%2 == 0){
            even++;
        }
        else{
            odd++
        }
    });
    return [even, odd]
}
var even = evenOdd([2,5,6,3,4,8,9,7,5,6,8])[0];
var odd = evenOdd([2,5,6,3,4,8,9,7,5,6,8])[1];
console.log('Even', even, 'Odd', odd);
// 7. Write a js program to count total number of negative elements in an array.
function negCount(arr){
    var count = 0;
    
    arr.forEach(element => {
        if(element >= 0){
            count++;
        }
        
    });
    return count
}

console.log('Negative Count', negCount([1,-2,1,-3,5,-6,8,-9]));
// 8. Write a js program to copy all elements from an array to another array.
function copyArr(arr){
    var copy = [];
    for (let index = 0; index < arr.length; index++) {
        copy[index] = arr[index];
        
    }
    return copy
}
console.log('copy', copyArr([2,5,6,3,4,8,9,7,5,6,8]))
// 9. Write a js program to insert an element in an array.
function insertArr(arr, element){
    arr.push(element);
    arr.unshift(element);
    return arr
}
console.log('insert', insertArr([2,5,6,3,4,8,9,7,5,6,8], 10))
// 10. Write a js program to delete an element from an array at specified position.
function insertIndex(ar, index){
    ar.splice(index, 0, 20);
    
    return ar
}
console.log(insertIndex([2,5,6,3,4,8,9,7,5,6,8], 1))
// Math Methods
// 1-Write a js program to round the number, without using the math.round method! 
function round(num){
    var number = parseInt(num);
    if(num - number >= .5){
        number++;
    }
    return number
}
console.log('round', round(2.4));
// 2-Write a js program to ceil the number without using math.ceil method!
function ceil(num){
    var number = parseInt(num);
    if(num - number > 0){
        number++;
    }
    return number
}
console.log('ceil', ceil(2.3))
// 3-Write a js program to floor the number without using the math.floor method!
function floor(num){
    
    
    return parseInt(num)
}
console.log('floor', floor(5.9))
// Loops
// 1. Write a js program to print all natural numbers from 1 to n. - using for loop
function loop(n){
    for (let index = 1; index <= n; index++) {
        console.log(index);
        
    }
}
loop(5);
// 2. Write a js program to print all natural numbers in reverse (from n to 1). - using for loop
function loopReverse(n){
    for (let index = n; index > 0; index--) {
        console.log(index);
        
    }
}
loopReverse(5);
// 3. Write a js program to print all alphabets from a to z. - using for loop
function printAlpha(){
    var alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    alpha.forEach(element => {
        console.log(element);
    });
}
printAlpha();
// 4. Write a js program to print all even numbers between 1 to 100. - using forloop
function evenNum(){
    for (let index = 2; index <= 100; index+=2) {
        console.log(index);
        
    }
}
evenNum();
// 5. Write a js program to print all odd number between 1 to 100
function oddNum(){
    for (let index = 1; index <= 100; index+=2) {
        console.log(index);
        
    }
}
oddNum();
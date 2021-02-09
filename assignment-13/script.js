function howManySeconds(){
    var hours = document.getElementById('hours').value;
    if(hours.length == 0){
    document.getElementById('seconds').innerHTML = 'Please enter hours'

    }
    console.log(hours);
    document.getElementById('seconds').innerHTML = hours*60*60
}
function calcAge(){
    var age = document.getElementById('age').value;
    age = parseInt(age);
    if(age<0){
        age *= -1
    }
    document.getElementById('days').innerHTML = age*365;
}

function invertArray(){
    var arr = document.getElementById('arra').value;
    arr = arr.split(',');
    for (let index = 0; index < arr.length; index++) {
      arr[index] *=-1;      
    }
    document.getElementById('inverted').innerHTML = arr;
}
function comp(){
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    if(first.length == second.length){
        document.getElementById('result').innerHTML = true;
    }
    else{
        document.getElementById('result').innerHTML = false;

    }
}
function parseArray(){
    var ar = document.getElementById('data').value;
    ar = ar.split(',');
    for (let index = 0; index < ar.length; index++) {
        ar[index] = ar[index].toString();
        
    }
    
    document.getElementById('strings').innerHTML = ar.toString();

}
function leepYear(){
    var year = document.getElementById('year').value;
    if(parseInt(year)%4 === 0){
        document.getElementById('leep').innerHTML = true;
    }
    else{
        document.getElementById('leep').innerHTML = false;

    }
}
function endCorona(){
    var avgRecover = document.getElementById('avgRecovered').value;
    var newCases = document.getElementById('newCases').value;
    var currentCases = document.getElementById('currentCases').value;
    avgRecover = parseInt(avgRecover);
    newCases = parseInt(newCases);
    currentCases = parseInt(currentCases);
    var days = 0;
    while(currentCases + newCases >= avgRecover){
        currentCases = currentCases+newCases-avgRecover;
        days++;
    }
    if(currentCases > 0){
    document.getElementById('daysLeft').innerHTML = days+1;
}else{
    document.getElementById('daysLeft').innerHTML = days;

}

}
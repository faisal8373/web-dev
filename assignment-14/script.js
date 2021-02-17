function cardHide(){
    var number = document.getElementById('number').value;
    if(validate(number)){
    var hidden = '';
    for(i = 0; i < number.length; i++){
        if(number.length - (i + 1) > 3){
            hidden += '*';

        }
        else{
            hidden += number[i]
        }
    }
document.getElementById('showNumber').innerHTML = hidden;
    }
    else{
document.getElementById('showNumber').innerHTML = 'Enter a value';

    }
}
// console.log(cardHide('1234564897'));

function potatos(){
    var word = document.getElementById('potato').value;
    if(validate(word)){
    var sting = 'potato'
    var index = word.length;
    var p = [];
    var count = 0;
    for(i = 0; i < word.length; i++){
        if(word[i] === 'p'){
            p.push(i);
        }
    }
    p.forEach(element => {
        for(index = 0; index< sting.length; index++){
            if((word[element+index] === sting[index])){
               if(index === 5){
                   count++;
               }
            }
            
            // console.log(word[element+index], '   ', sting[index]);
    }
    // console.log('end of loop')
    });
    document.getElementById('numberPotatos').innerHTML = count;
}
else{
    document.getElementById('numberPotatos').innerHTML = 'Enter a value';

}
}
// console.log(potatos('otatopotatootato'));

function doubleChar(){
    var data = document.getElementById('double').value;
    if(validate(data)){
    var double = ''
    for(index = 0; index < data.length; index++){
        double+= data[index]+data[index];
    }
    document.getElementById('doubleChars').innerHTML = double;
}
else{
    document.getElementById('doubleChars').innerHTML = 'Enter a value';
}
}
// console.log(doubleChar('string'));

function grossSalary(){
    var basicSalary = document.getElementById('basicSalary').value;
    if(validate(basicSalary)){
    basicSalary = parseInt(basicSalary);
    var gross, hra, da = 0;
    if(basicSalary <= 10000){
        hra = 10000*.2;
        da = 10000*.8;
    }
    else if(basicSalary <= 20000){
        hra = 10000*.25;
        da = 10000*.9;
    }
    if(basicSalary > 20000){
        hra = 10000*.3;
        da = 10000*.95;
    }
    gross = basicSalary + hra + da;
    document.getElementById('grossSalary').innerHTML = gross;
}
else{
    document.getElementById('grossSalary').innerHTML = 'Enter a value';

}
}
// console.log(grossSalary(10000));

function bill(){
    var units = document.getElementById('units').value;
    if(validate(units)){
    var charges = 0;
    units = parseInt(units);
    if(units <=50){
        charges = units*.5;
        
    }
    else if(units > 50 && units <= 150){
        charges = 50*.5;
        charges += (units-50)*.75;
    }
    else if(units >150 && units <=250){
        charges = (50*.5) + (100*.75) + ((units - 150) *1.2);
    }
    else if(units>250){
        charges = (50*.5) + (100*.75) + (100*1.2)+ ((units - 250) *1.5);
    }
    charges += charges*.2;
    document.getElementById('charges').innerHTML = charges;
}else{
    document.getElementById('charges').innerHTML = 'Enter a value';

}
}
// console.log(bill(25))

function multiple(){
    
    var total = 0;
    for(i = 0; i <= 1000; i++){
        if(i%3 ===0 || i%5 ===0){
            total+=i;
        }
    }
    document.getElementById('multiple').innerText = total;
}
// console.log(multiple());

function countRepetitions(){
    var list = document.getElementById('data').value;
    if(validate(list)){
  list = list.split(' ');
    var obj = {};
    for(i = 0; i<list.length; i++){
        if(!obj.hasOwnProperty(list[i])){
            obj[list[i]] = 1;
        }
        else{
            obj[list[i]] +=1;
        }
    }
    var arr = ''
    for(key in obj){
        arr += key + ': ' + obj[key] + ', ';
       
    }
document.getElementById('obj').innerHTML = arr;
}
else{
document.getElementById('obj').innerHTML = 'Enter a value';

}
}
// console.log(countRepetitions(['cow', 'cow', 'cat', 'dog', 'cat']));


function charCount(letter, chars){
    var chars = document.getElementById('word').value;
    if(validate(chars)){
    chars = chars.split(' ');
    var letter = chars[0];
    chars = chars[1];
    var count = 0;
    for(i = 0; i< chars.length; i++){
        if(letter === chars[i]){
            count++;
        }
    }
    document.getElementById('letterCount').innerHTML = count;
}
else{
    document.getElementById('letterCount').innerHTML =  'Enter a value';
}
}

// console.log(charCount('a', 'edabidta'));

function validate(value){
    if(value === '' || value === null){
        return false;
    }else{
        return true;
    }
}
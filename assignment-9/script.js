// var input = document.getElementById('history-value').innerHTML;

function clickEvent(num){
	var output = document.getElementById('output-value').innerHTML;
	num = parseInt(num)
	document.getElementById('history-value').innerHTML = typeof(output) + ' adn num ' + typeof(num)

	if(parseInt(output) === parseInt(num) === 0){
		document.getElementById('output-value').innerHTML = output
	}
	else{
		output += num;
	
	document.getElementById('output-value').innerHTML = output;
	
}}

function clearEvent(){
	document.getElementById('output-value').innerHTML =  ""
	document.getElementById('history-value').innerHTML = ""
}

// function operatorEvent(operator){
// 	document.getElementById('history-value').innerHTML = document.getElementById('output-value').innerHTML;
// 	document.getElementById('output-value').innerHTML = "";
	
// }
function calculation(){
	var value = document.getElementById('output-value').innerHTML;
	value = value.replace(/0/, '');
	var result = eval(value);
	document.getElementById('history-value').innerHTML = result;
}
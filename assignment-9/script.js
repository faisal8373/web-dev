// var input = document.getElementById('history-value').innerHTML;

function clickEvent(num){
	var output = document.getElementById('output-value').innerHTML;
	
	if(parseInt(output) === num === 0){
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
	var result = eval(value);
	document.getElementById('history-value').innerHTML = result;
}
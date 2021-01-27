// alert('how are you')

function addTask(){
    var title = document.getElementById('title').value;
    var desc = document.getElementById('desc').value;
    var date = document.getElementById('due').value;
    
    clearFields();
    displayData(title, desc, date)
    
}
function displayData(title, desc='', date){
    if(title == '' || date == ''){
        return alert('Please enter title and date')
    }
   
    var table = document.getElementById('taskList');
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3);
       
    cell1.appendChild(document.createTextNode(title));
    cell2.appendChild(document.createTextNode(desc));
    cell3.appendChild(document.createTextNode(date));
    cell4.appendChild(createEditButton());
    cell4.innerHTML += '     ';
    cell4.appendChild(createDeleteButton());

}
function clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('desc').value = '';
    document.getElementById('due').value = '';
    
}
function createEditButton(){
    var button = document.createElement('input');

        // SET INPUT ATTRIBUTE 'type' AND 'value'.
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Edit');
        button.setAttribute('class', 'btn');

        // ADD THE BUTTON's 'onclick' EVENT.
        button.setAttribute('onclick', 'editTask(this)');
        return button
}
function createDeleteButton(){
    var button = document.createElement('input');

        // SET INPUT ATTRIBUTE 'type' AND 'value'.
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Delete');
        button.setAttribute('class', 'btn');
        // ADD THE BUTTON's 'onclick' EVENT.
        button.setAttribute('onclick', 'delRow(this)');
        return button
}
var editRow = '';
function editTask(row){
    var updateBtn = document.getElementById('update');
    updateBtn.setAttribute('class', 'visibl btn');
    editRow = row.parentNode.parentNode.rowIndex
   var tit = document.getElementById('taskList').rows[editRow].cells[0];
   var dec = document.getElementById('taskList').rows[editRow].cells[1];
   var dte = document.getElementById('taskList').rows[editRow].cells[2];
   
   document.getElementById('title').value = tit.innerHTML;
   document.getElementById('desc').value =  dec.innerHTML;
   document.getElementById('due').value = dte.innerHTML;
   
    // document.getElementById('title').value = tit;

}
function delRow(row){
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById("taskList").deleteRow(i);
  }
  function update(){

    var titl = document.getElementById('title').value;
    var des = document.getElementById('desc').value;
    var dae = document.getElementById('due').value;
    if(titl == '' || dae == ''){
        return alert('Please enter title and date')
    }
    document.getElementById('taskList').rows[editRow].cells[0].innerHTML = titl;
    document.getElementById('taskList').rows[editRow].cells[1].innerHTML = des;
    document.getElementById('taskList').rows[editRow].cells[2].innerHTML = dae;
    
    var updateBtn = document.getElementById('update');
    updateBtn.setAttribute('class', 'hide btn');
    clearFields();

  }

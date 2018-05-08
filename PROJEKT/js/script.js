function addTask() {
	var taskName = document.getElementById("taskNameInput");
	if (taskName.value.length > 0) {
		table = document.getElementById("tasksTable");
		var row = table.insertRow(table.rows.length);
		row.id = 'task' + Date.now();
		var cell1 = row.insertCell(0);
		cell1.innerHTML = taskName.value;
		var cell2 = row.insertCell(1);
		cell2.innerHTML = '<input type="checkbox"> Wykonane</td>';
		cell3 = row.insertCell(2);
		cell3.innerHTML = '<input type="submit" class="btn-rmv" value="Usuń" id="' + row.id +'dbtn">';
		taskName.value = '';
		var button = document.getElementById(row.id+"dbtn");
		button.addEventListener("click", removeTask);
		UpdateDate();
	}
}

function removeTask() {
	var table = document.getElementById("tasksTable");
	for (var i =0; i < table.rows.length; i++)
	{
		if (table.rows[i].id==this.id.slice(0, -4))
			table.deleteRow(i);
	}
}

function UpdateDate()
{
	var dateH = document.getElementById("dateH");
	var d = new Date();
	var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
	dateH.innerHTML = d.getDate() + ' ' + months[d.getMonth()] + ' ' +d.getFullYear();
}

var addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener("click", addTask);
var taskNameInput = document.getElementById('taskNameInput');
taskNameInput.addEventListener("keydown", function (event) {
	if (event.keyCode === 13) {
		addTask();
	}
});

// 
for (var i =1; i<5; i++)
{
	var button = document.getElementById('task'+i+"dbtn");
		button.addEventListener("click", removeTask);
}
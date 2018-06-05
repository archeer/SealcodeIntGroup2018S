function addTask() {
	var taskName = document.getElementById("taskNameInput");
	if (taskName.value.length > 0) {
		axios.post('http://vps487563.ovh.net:55555/api/v1/to_do/tasks', {
			user: 'mikgor',
			title: taskName.value,
			description: '-'
				})
				.then(function (response) {
						taskName.value='';
						UpdateTasks();
				})
				.catch(function (error) {
						alert("Nie udało się");
	 			});
		}
}

function removeTask() {
	var table = document.getElementById("tasksTable");
	for (var i =0; i < table.rows.length; i++)
	{
		if (table.rows[i].id==this.id.slice(0, -4))
		{
			axios.delete('http://vps487563.ovh.net:55555/api/v1/to_do/tasks/'+this.id.slice(0, -4))
					.then(function (response) {
							UpdateTasks();
					})
					.catch(function (error) {
							alert("Nie udało się");
		 			});
		}
	}
}

function checkboxChanged(obj) {
	axios.put('http://vps487563.ovh.net:55555/api/v1/to_do/tasks/'+obj.id, {
		done: obj.checked
			})
			.then(function (response) {
					UpdateTasks();
			})
			.catch(function (error) {
					alert("Nie udało się");
			});
}

function UpdateTasks()
{
	axios.get('http://vps487563.ovh.net:55555/api/v1/to_do/mikgor/tasks')
			.then(function (response) {
				var table = document.getElementById("tasksTable");
				table.innerHTML='';
				for (var i=response.data.length-1; i>0; i--)
					{
						var row = table.insertRow(table.rows.length);
						row.id = response.data[i]._id;
						var cell1 = row.insertCell(0);
						cell1.innerHTML = response.data[i].title;
						var cell2 = row.insertCell(1);
						var checkedstate=response.data[i].done?" checked":"";
						cell2.innerHTML = '<input type="checkbox" onchange="checkboxChanged(this)" id="'+row.id+'"'+checkedstate+'> Wykonane</td>';
						cell3 = row.insertCell(2);
						cell3.innerHTML = '<input type="submit" class="btn-rmv" value="Usuń" id="' + row.id +'dbtn">';
						var button = document.getElementById(row.id+"dbtn");
						button.addEventListener("click", removeTask);
					}
			})
			.catch(function (error) {
					alert("Nie udało się");
			});
}

var addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener("click", addTask);
var taskNameInput = document.getElementById('taskNameInput');
taskNameInput.addEventListener("keydown", function (event) {
	if (event.keyCode === 13) {
		addTask();
	}
});

var dateH = document.getElementById("dateH");
var d = new Date();
var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
dateH.innerHTML = d.getDate() + ' ' + months[d.getMonth()] + ' ' +d.getFullYear();
UpdateTasks();

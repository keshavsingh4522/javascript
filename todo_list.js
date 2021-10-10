var tasks = [];

var i = 0;
function loadData() {
    Object.keys(localStorage).forEach(function (id){
        tasks.push( JSON.parse(localStorage.getItem(id)) );
    })
    printTaskList(tasks);
}

var idGlobal = tasks[i-1] ? tasks[i-1].id+1: 0; //Set next number than the bigger id

function saveData() {
    localStorage.clear();
    for (i = 0 ; i < tasks.length; i++) {
        localStorage.setItem(i, JSON.stringify(tasks[i]));
    }
}

function handleEnter(event) {
    if (event.code === 'Enter') {
        newTask();
    }
}

function newTask() {
    var input = document.getElementById('input');
    if (input.value.trim().length > 0) {
        tasks.push({ id:idGlobal++, title: input.value, checked: false, priority: 'medium' });        
        printTaskList(tasks);
    }
    input.value = '';
}

function findTask() {
    var input = document.getElementById('input');
    var tasksFiltered = [];
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].title.toLowerCase().indexOf(input.value.toLowerCase()) !== -1) {
            tasksFiltered.push(tasks[i]);
        };
    };
    printTaskList(tasksFiltered);
}

function filterPriority() {
    var priorityValue = document.getElementById("priorityFilter").value;
    var tasksFiltered = [];
    if (priorityValue === "nothing"){
        tasksFiltered = tasks;
    }else{
        for (var i = 0; i < tasks.length; i++) {
            if(tasks[i].priority === priorityValue){
                tasksFiltered.push(tasks[i]);
            };
        };
    };
    printTaskList(tasksFiltered);
}

function printTaskList(taskListToPrint) {
    var taskList = document.getElementById('task-list');
    var html = "";

    if (tasks.length === 0) {
        html = '<p class="alertText">Nothing to do? Start to add!!<p/>';
    } else if (taskListToPrint.length === 0) {
        html = '<p class="alertText">No match ...<p/>';
    } else {
        for (var i = 0; i < taskListToPrint.length; i++) {
            
            var id = taskListToPrint[i].id;
            var index = i;

            //Search the correct index in tasks
            if (tasks.length != taskListToPrint.length){
                for (var j=0; j < tasks.length; j++) {
                    if (tasks[j].id === id) {
                        index = j;
                        break;
                    }
                }
            }
            var liClass = tasks[index].checked === true ? 'task checked' : 'task';
            html = html + '<li class="' + liClass + '" id="task-' + index + '">';
            html += printCheckbox(index);
            html += tasks[index].title;
            html += printPriority(index);
            html += printDeleteBotton(index);
            html += '</li>';
            saveData()
        }
    }

    taskList.innerHTML = html;
}

//CheckBox

function printCheckbox(index) {
    var checked = tasks[index].checked == true ? 'checked' : ''
    return '<input type="checkbox" onchange="checkTask(' + index + ')" ' + checked + ' >'
}

function checkTask(index) {
    tasks[index].checked = tasks[index].checked === true ? false : true
    //tasks[i].checked = !tasks[i].checked
    printTaskList(tasks);
}

//Priority Botton

function printPriority(index) {
    var html = '<select class="priority" onchange="setPriority(event, ' + index + ')">'
    html += '<option value="low" ' + (tasks[index].priority === 'low' ? 'selected' : '') + '>Low</option>'
    html += '<option value="medium" ' + (tasks[index].priority === 'medium' ? 'selected' : '') + '>Medium</option>'
    html += '<option value="high" ' + (tasks[index].priority === 'high' ? 'selected' : '') + '>High</option>'
    return html + '</select>'
}

function setPriority(event, index) {
    tasks[index].priority = event.target.value;
    saveData();
}

//Delete botton

function printDeleteBotton(index) {
    return '<input type="button" onclick="deleteTask(' + index + ')" class="delete" value="x"/>'
}

function deleteTask(index) {
    tasks.splice(index, 1);
    document.getElementById('task-' + index).remove();
    saveData();
}

async function displayTaskByProject() {
    
    let response = await fetch('dataController?project_id',{ 
        method: "GET",

    });

    let tasks = await response.json();
    // console.log(tasks);

    let containerTodo = document.getElementById('container-task-todo');
    let containerInProgress = document.getElementById('container-task-in-progress');
    let containerDone = document.getElementById('container-task-done');
    // console.log(containerDone);
    

    tasks.forEach(task => {
        console.log(task);
        const toDoBox = document.createElement('div');
        const inProgressBox = document.createElement('div');
        const doneBox = document.createElement('div');

        const { id_project, projectId, project_desc, 
                project_idUser, project_title, statut, 
                task_desc, task_id, task_idUser, task_title } = task;

        if ( statut == "todo") {
            
            const taskBox = document.createElement('div');
            taskBox.classList.add('task-box-todo');
            containerTodo.appendChild(taskBox);

            taskBox.innerHTML = `<h2>${task_title}</h2>
                                 <h2>${task_desc}</h2>`
        } 

        
        if ( statut == "in_progress") {
            
            const taskBox = document.createElement('div');
            taskBox.classList.add('task-box-in-progress');
            containerInProgress.appendChild(taskBox);

            taskBox.innerHTML = `<h2>${task_title}</h2>
                                 <h2>${task_desc}</h2>`
        } 

        if ( statut == "done") {
            
            const taskBox = document.createElement('div');
            taskBox.classList.add('task-box-done');
            containerDone.appendChild(taskBox);

            taskBox.innerHTML = `<h2>${task_title}</h2>
                                 <h2>${task_desc}</h2>`
        } 
        
        






        
    });



}

displayTaskByProject();


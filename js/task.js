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
                project_idUser, project_title, status, 
                task_desc, task_id, task_idUser, task_title } = task;

        if ( status == "todo") {
            
            const taskBox = document.createElement('div');
            taskBox.classList.add('task-box-todo');
            containerTodo.appendChild(taskBox);

            taskBox.innerHTML = `<div class="task">
                                    <p>${task_title}</p>
                                    <p>${task_desc}</p>
                                    <div class="btn-flex">
                                        <form class="formState" action="" method="post">
                                            <input type="hidden" name="In-Progress" value="${task_id}">
                                            <button type="submit" class="task-state-btn" name="submit">In Progress</button>
                                        </form>
                                        <form action="" method="post">
                                            <input type="hidden" name="done">
                                            <button type="submit" class="task-state-btn" name="submit">Done</button>
                                        </form>
                                    </div>
                                 </div>`
        } 

        
        if ( status == "in_progress") {
            
            const taskBox = document.createElement('div');
            taskBox.classList.add('task-box-in-progress');
            containerInProgress.appendChild(taskBox);

            taskBox.innerHTML = `<div class="task">
                                    <p>${task_title}</p>
                                    <p>${task_desc}</p>
                                    <div class="btn-flex">
                                        <form class="formState" action="" method="post">
                                            <input type="hidden" name="todo" value="${task_id}">
                                            <button type="submit" class="task-state-btn" name="submit">To do</button>
                                        </form>
                                        <form action="" method="post">
                                            <input type="hidden" name="done">
                                            <button type="submit" class="task-state-btn" name="submit">Done</button>
                                        </form>
                                    </div>
                                 </div>`
        } 

        if ( status == "done") {
            
            const taskBox = document.createElement('div');
            taskBox.classList.add('task-box-done');
            containerDone.appendChild(taskBox);

            taskBox.innerHTML = `<div class="task">
                                    <p>${task_title}</p>
                                    <p>${task_desc}</p>
                                    <div class="btn-flex">
                                        <form class="formState" action="" method="post">
                                            <input type="hidden" name="In-Progress" value="${task_id}">
                                            <button type="submit" class="task-state-btn" name="submit">to do</button>
                                        </form>
                                        <form action="" method="post">
                                            <input type="hidden" name="done">
                                            <button type="submit" class="task-state-btn" name="submit">In Progress</button>
                                        </form>
                                    </div>
                                 </div>`
        } 

        
    });

}

let form = document.getElementById('formAddTask');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
        const formData = new FormData(form);
        envoyerDonnees(formData)
        // const containerTask = document.getElementById('display-task')
        // containerTask.innerHTML = "";
        // displayUserProject();
        displayTaskByProject();
});


async function envoyerDonnees(formData) {
    try {
      const response = await fetch('task.php', {
        method: 'POST',
        body: formData
      });

    //   console.log(response)
  
      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi des données');
      }
  
      const responseData = await response.text();
    } catch (error) {
      console.error('Erreur :', error);
    }
}


displayTaskByProject();


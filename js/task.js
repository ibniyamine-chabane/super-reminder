
  async function displayTaskByProject() {
    
    let response = await fetch('dataController?project_id',{ 
        method: "GET",

    });

    let tasks = await response.json();
    let inProgressTarget = document.getElementById('container-task-in-progress');
    let doneTarget = document.getElementById('container-task-done');
    let todoTarget = document.getElementById('container-task-todo')
    let taskBoxTodo = ""
    let taskBoxInProgress = ""
    let taskBoxDone = ""
    tasks.forEach(task => {
      

        const { id_project, projectId, project_desc, 
                project_idUser, project_title, status, 
                task_desc, task_id, task_idUser, task_title } = task;

        if ( status == "todo") {
            
            // let taskBox = document.createElement('div');
            // taskBox.classList.add('task-box-todo');
            // containerTodo.appendChild(taskBox);

            taskBoxTodo = taskBoxTodo + `
                                          <div class="task">
                                            <p>${task_title}</p>
                                            <p>${task_desc}</p>
                                            <div class="btn-flex">
                                              <form class="formState" id="inprogress_${task_id}" action="" method="post">
                                                <input type="hidden" name="task_id" value="${task_id}">
                                                <input type="hidden" name="in-Progress" value="in_progress">
                                                <button class="task-state-btn" id="inProgress" name="submit">In Progress</button>
                                              </form>
                                              <form class="formState" id="done_${task_id}" action="" method="post">
                                                <input type="hidden" name="task_id" value="${task_id}">
                                                <input type="hidden" name="done" value="done" >
                                                <button type="submit" class="task-state-btn" id="done${task_id}" name="submit">Done</button>
                                              </form>
                                            </div>
                                          </div>
                                          `

        } 

        
        if ( status == "in_progress") {
            
            // const taskBox = document.createElement('div');
            // taskBox.classList.add('task-box-in-progress');
            // containerInProgress.appendChild(taskBox);

            taskBoxInProgress = taskBoxInProgress + `
                                                      <div class="task">
                                                        <p>${task_title}</p>
                                                        <p>${task_desc}</p>
                                                        <div class="btn-flex">
                                                          <form class="formState" id="todo_${task_id}" action="" method="post">
                                                              <input type="hidden" name="task_id" value="${task_id}">
                                                              <input type="hidden" name="todo" value="todo">
                                                              <button class="task-state-btn" id="todo" name="submit">To do</button>
                                                          </form>
                                                          <form class="formState" id="done_${task_id}" action="" method="post">
                                                              <input type="hidden" name="task_id" value="${task_id}">
                                                              <input type="hidden" name="done" value="done">
                                                              <button type="submit" class="task-state-btn" id="done${task_id}" name="submit">Done</button>
                                                          </form>
                                                        </div>
                                                      </div>`
        } 

        if ( status == "done") {
            
            // const taskBox = document.createElement('div');
            // taskBox.classList.add('task-box-done');
            // containerDone.appendChild(taskBox);

            taskBoxDone = taskBoxDone + `
                                  <div class="task">
                                    <p>${task_title}</p>
                                    <p>${task_desc}</p>
                                    <div class="btn-flex">
                                        <form class="formState" id="todo_${task_id}" action="" method="post">
                                            <input type="hidden" name="task_id" value="${task_id}">
                                            <input type="hidden" name="todo" value="todo">
                                            <button class="task-state-btn" id="todo" name="submit" value="">to do</button>
                                        </form>
                                        <form class="formState" id="inprogress_${task_id}" action="" method="post">
                                            <input type="hidden" name="task_id" value="${task_id}">
                                            <input type="hidden" name="in-Progress" value="in_progress">
                                            <button type="submit" class="task-state-btn" id="inProgress${task_id}" name="submit" >In Progress</button>
                                        </form>
                                    </div>
                                 </div>`
        } 
        
        
        
    });
    // let formStates = document.querySelectorAll('.formState');
    // const todo = document.querySelectorAll(`#todo`)
    // formStates.forEach(element => {
    //     console.log(element)
    //     element.addEventListener("submit" , (e) => {
    //       e.preventDefault()
    //     })

      
    // });
    todoTarget.innerHTML = taskBoxTodo
    inProgressTarget.innerHTML = taskBoxInProgress
    doneTarget.innerHTML = taskBoxDone

}

let form = document.getElementById('formAddTask');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
        const formData = new FormData(form);
        await sendData(formData)
        // const containerTask = document.getElementById('display-task')
        let containerTodo = document.getElementById('container-task-todo');
        let containerInProgress = document.getElementById('container-task-in-progress');
        let containerDone = document.getElementById('container-task-done');
        containerTodo.innerHTML = "";
        containerInProgress.innerHTML = "";
        containerDone.innerHTML = "";
        // containerTask.innerHTML = "";
        // displayUserProject();
        await displayTaskByProject();
        const inputTitle = document.getElementById('title')
        const inputDesc = document.getElementById('description')
        inputTitle.value = "";
        inputDesc.value = "";
    });


async function sendData(formData) {
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


/* ---------------- formulaire qui permte de changer l'état des tâches ------------------- */

async function sendDataStatus(formDataState) {
  try {
    const response = await fetch('task.php', {
      method: 'POST',
      body: formDataState
    });
    

    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi des données');
    }

    const responseData = await response.text();
  } catch (error) {
    console.error('Erreur :', error);
  }
}

async function toto() {
await displayTaskByProject();

/* ------------- tentative de d'envoie de formulaire en selectionnat tout les form par sa class --------- */
let formStates = document.querySelectorAll('.formState');
let formStatesChoosen = document.querySelectorAll('.formState');

  formStates.forEach(formStatus => {
    
    formStatus.addEventListener('submit', async (e) =>{
      e.preventDefault();
      console.log("Bouton cliqué , au niveau du preventDefault")
      let formDataState = new FormData(formStatus);
      await sendDataStatus(formDataState);
      await displayTaskByProject();
      console.log(formStatus)
      console.log("fin de l'action")
      
    })
   
  });
  
  
  /* ---------------- tentative d'envoie des formulaire par id avec une boucle for ------------- */

  // let response = await fetch('dataController?project_id',{ 
  //   method: "GET",
  
  // });
  
  // let tasky = await response.json();
  
  // for (let j = 0; j < tasky.length; j++) {
  //   let inProgress = document.getElementById(`inprogress_${tasky[j].task_id}`);
  //   let toDo = document.getElementById(`todo_${tasky[j].task_id}`);
  //   let finish = document.getElementById(`done_${tasky[j].task_id}`);
  //   console.log(finish);
  //   if (inProgress) {
  //       inProgress.addEventListener('click', (e) => {
  //           e.preventDefault();
  //           let formDataInprogress = new FormData(inProgress);
  //           sendDataStatus(formDataInprogress);
  //           displayTaskByProject();
  //         });
  //   } else if (toDo) {
  //       toDo.addEventListener('click', (e) => {
  //       e.preventDefault();
  //       let formDataTodo = new FormData(toDo);
  //       sendDataStatus(formDataTodo);
  //       displayTaskByProject();
  //     });
  //   } else if (finish) {
  //       finish.addEventListener('click', (e) => {
  //       e.preventDefault();
  //       let formDataDone = new FormData(finish);
  //       sendDataStatus(formDataDone);
  //       displayTaskByProject();
  //     });
  //   }

  // }    

  /* --------------------------------------------------------  */ 

    // progress.addEventListener('click', (e) => {
    //     e.preventDefault()
        
    // })        


  // for (let i = 0; i < formStates.length; i++) {
  //     formStates[i].addEventListener('click', async (event) => {
  //         event.preventDefault();
  //         // let formDataState = new FormData(formStates[i]);
  //         // await sendDataStatus(formDataState);
  //        console.log(formStates[i])  
  //       //  console.log(formStates[5])
  //         // let containerTodo = document.getElementById('container-task-todo');
  //         // let containerInProgress = document.getElementById('container-task-in-progress');
  //         // let containerDone = document.getElementById('container-task-done');
  //         // containerTodo.innerHTML = "";
  //         // containerInProgress.innerHTML = "";
  //         // containerDone.innerHTML = "";
  //         await displayTaskByProject();
  //     });

  //     formStatesChoosen[i].addEventListener('click', async (event) => {
  //       event.preventDefault();
  //       let formDataState = new FormData(formStatesChoosen[i])
  //       await sendDataStatus(formDataState)
  //       await displayTaskByProject()
  //     });


  // }

  // for (let i = 0; i < formStates.length; i++) {
  //   const todo = document.getElementById(`todo${formStates[i].task_id}`)
  //   console.log(todo)
    
  // }

}

toto();
// async function main() {
//   toto();
//   await displayTaskByProject();
// }

// main();



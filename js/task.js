
  async function displayTaskByProject() {
    
    let response = await fetch('dataController?project_id',{ 
        method: "GET",

    });

    let tasks = await response.json();
    // console.log(tasks);

    // let containerTodo = document.getElementById('container-task-todo');
    let inProgressTarget = document.getElementById('container-task-in-progress');
    // let containerInProgress = document.getElementById('container-task-in-progress');
    // let containerDone = document.getElementById('container-task-done');
    let doneTarget = document.getElementById('container-task-done');
    // console.log(containerDone);
    let todoTarget = document.getElementById('container-task-todo')
    let taskBoxTodo = ""
    let taskBoxInProgress = ""
    let taskBoxDone = ""
    tasks.forEach(task => {
        // console.log(task);
        // const toDoBox = document.createElement('div');
        // const inProgressBox = document.createElement('div');
        // const doneBox = document.createElement('div');

        const { id_project, projectId, project_desc, 
                project_idUser, project_title, status, 
                task_desc, task_id, task_idUser, task_title } = task;

        if ( status == "todo") {
            
            // let taskBox = document.createElement('div');
            // taskBox.classList.add('task-box-todo');
            // containerTodo.appendChild(taskBox);

            taskBoxTodo = taskBoxTodo + `
                                        <div class="task-box-todo">
                                          <div class="task">
                                            <p>${task_title}</p>
                                            <p>${task_desc}</p>
                                            <div class="btn-flex">
                                              <form class="formState" action="" method="post">
                                                <input type="hidden" name="task_id" value="${task_id}">
                                                <input type="hidden" name="in-Progress" value="in_progress">
                                                <button class="task-state-btn" name="submit">In Progress</button>
                                              </form>
                                              <form class="formState" action="" method="post">
                                                <input type="hidden" name="task_id" value="${task_id}">
                                                <input type="hidden" name="done" value="done" >
                                                <button class="task-state-btn" name="submit">Done</button>
                                              </form>
                                            </div>
                                          </div>
                                        </div>`

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
                                        <form class="formState" action="" method="post">
                                            <input type="hidden" name="task_id" value="${task_id}">
                                            <input type="hidden" name="todo" value="todo">
                                            <button class="task-state-btn" name="submit">To do</button>
                                        </form>
                                        <form class="formState" action="" method="post">
                                            <input type="hidden" name="task_id" value="${task_id}">
                                            <input type="hidden" name="done" value="done">
                                            <button class="task-state-btn" name="submit">Done</button>
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
                                        <form class="formState" action="" method="post">
                                            <input type="hidden" name="task_id" value="${task_id}">
                                            <input type="hidden" name="todo" value="todo">
                                            <button class="task-state-btn" name="submit">to do</button>
                                        </form>
                                        <form class="formState" action="" method="post">
                                            <input type="hidden" name="task_id" value="${task_id}">
                                            <input type="hidden" name="in-Progress" value="in_progress">
                                            <button class="task-state-btn" name="submit">In Progress</button>
                                        </form>
                                    </div>
                                 </div>`
        } 

        
    });
    todoTarget.innerHTML = taskBoxTodo
    inProgressTarget.innerHTML = taskBoxInProgress
    doneTarget.innerHTML = taskBoxDone

}

let form = document.getElementById('formAddTask');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
        const formData = new FormData(form);
        sendData(formData)
        // const containerTask = document.getElementById('display-task')
        let containerTodo = document.getElementById('container-task-todo');
        let containerInProgress = document.getElementById('container-task-in-progress');
        let containerDone = document.getElementById('container-task-done');
        containerTodo.innerHTML = "";
        containerInProgress.innerHTML = "";
        containerDone.innerHTML = "";
        // containerTask.innerHTML = "";
        // displayUserProject();
        displayTaskByProject();
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

displayTaskByProject();

/* ---------------- formulaire qui permte de changer l'état des tâches ------------------- */







// async function senDataStatus(formDataState) {
//     try {
//       const response = await fetch('task.php', {
//         method: 'POST',
//         body: formDataState
//       });

//     //   console.log(response)
  
//       if (!response.ok) {
//         throw new Error('Erreur lors de l\'envoi des données');
//       }
  
//       const responseData = await response.text();
//     } catch (error) {
//       console.error('Erreur :', error);
//     }
// }

// async function toto() {
//   await displayTaskByProject();
//   let formState = document.getElementsByClassName('formState');
//   console.log(formState)
   

//   for (let i = 0; i < formState.length; i++) {
//     formState[i].addEventListener('click', async (event) => {
//         event.preventDefault();
        
//         const formDataState = new FormData(formState[i]);
//         senDataStatus(formDataState)
       
//         let containerTodo = document.getElementById('container-task-todo');
//         let containerInProgress = document.getElementById('container-task-in-progress');
//         let containerDone = document.getElementById('container-task-done');
//         containerTodo.innerHTML = "";
//         containerInProgress.innerHTML = "";
//         containerDone.innerHTML = "";
//         await displayTaskByProject();
    
//         });
//       }

//       async function senDataStatus(formDataState) {
//     try {
//       const response = await fetch('task.php', {
//         method: 'POST',
//         body: formDataState
//       });

//     //   console.log(response)
  
//       if (!response.ok) {
//         throw new Error('Erreur lors de l\'envoi des données');
//       }
  
//       const responseData = await response.text();
//     } catch (error) {
//       console.error('Erreur :', error);
//     }
// }
//     }
//   formState.addEventListener('submit', async (event) => {
//     event.preventDefault();
    
//     const formDataState = new FormData(formState);
//     senDataStatus(formDataState)
   
//     let containerTodo = document.getElementById('container-task-todo');
//     let containerInProgress = document.getElementById('container-task-in-progress');
//     let containerDone = document.getElementById('container-task-done');
//     containerTodo.innerHTML = "";
//     containerInProgress.innerHTML = "";
//     containerDone.innerHTML = "";
//     await displayTaskByProject();

//     });


// toto()

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

const formStates = document.querySelectorAll('.formState');
// console.log(formStates[2])
// console.log(formStates.length)
  // for (let i = 0; i < formStates.length; i++) {
  //   formStates[i].addEventListener('click', async (event) => {
  //       event.preventDefault();
  //       // console.log(i)
  //       const formDataState = new FormData(formStates[i]);
  //       await sendDataStatus(formDataState);
       
  //       let containerTodo = document.getElementById('container-task-todo');
  //       let containerInProgress = document.getElementById('container-task-in-progress');
  //       let containerDone = document.getElementById('container-task-done');
  //       containerTodo.innerHTML = "";
  //       containerInProgress.innerHTML = "";
  //       containerDone.innerHTML = "";
  //       await displayTaskByProject();
  //   });
  // }

  formStates.forEach(formStatus => {
    
    formStatus.addEventListener('click', async (e) =>{
      e.preventDefault();
      const formDataState = new FormData(formStatus);
      await sendDataStatus(formDataState);
      
      let containerTodo = document.getElementById('container-task-todo');
      let containerInProgress = document.getElementById('container-task-in-progress');
      let containerDone = document.getElementById('container-task-done');
      containerTodo.innerHTML = "";
      containerInProgress.innerHTML = "";
      containerDone.innerHTML = "";
      await displayTaskByProject();
      console.log(formStatus)
    })
  });

}

toto();


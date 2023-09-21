
async function displayUserProject(user) {
    
    let response = await fetch('dataController.php?TaskUserLogged',{ 
        method: "GET",

    });

    let projets = await response.json();
    const containerTask = document.getElementById('display-task')

    projets.forEach(projet => {
        console.log(projet.description);
        const taskBox = document.createElement('div');
    taskBox.classList.add('box-card');
    containerTask.appendChild(taskBox);

    const { title, description , id_user , id } = projet;
    taskBox.innerHTML = `<a href="tasks.php?taks_id=${id}"><p>${title}</p>
                            <p id="movie-name">${description}</p>
                         </a>`;
    });

}
displayUserProject(1);
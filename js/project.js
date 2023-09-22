
async function displayUserProject() {
    
    let response = await fetch('dataController.php?TaskUserLogged',{ 
        method: "GET",

    });

    let projets = await response.json();
    const containerTask = document.getElementById('display-task')

    projets.forEach(projet => {
        // console.log(projet.description);
    const taskBox = document.createElement('div');
    taskBox.classList.add('box-card');
    containerTask.appendChild(taskBox);

    const { title, description , id_user , id } = projet;
    taskBox.innerHTML = `<a href="tasks.php?taks_id=${id}"><p>${title}</p>
                            <p id="movie-name">${description}</p>
                         </a>`;
    });

}

let form = document.getElementById('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
        const formData = new FormData(form);
        envoyerDonnees(formData)
        const containerTask = document.getElementById('display-task')
        containerTask.innerHTML = "";
        displayUserProject();
});


async function envoyerDonnees(formData) {
    try {
      const response = await fetch('projects.php', {
        method: 'POST',
        body: formData
      });

      console.log(response)
  
      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi des données');
      }
  
      const responseData = await response.text();
    } catch (error) {
      console.error('Erreur :', error);
    }
}

displayUserProject();
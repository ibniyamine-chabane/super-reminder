async function displayTaskByProject() {
    
    let response = await fetch('dataController?project_id',{ 
        method: "GET",

    });

    let tasks = await response.json();
    console.log(tasks);



}

displayTaskByProject();
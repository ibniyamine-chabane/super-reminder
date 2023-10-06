<?php
session_start();
if (!$_SESSION) {
    header("Location: index.php");
}

require_once("class/project.php");
$project = new Project;

if (isset($_GET['project_id'])) {

    $_SESSION['project_id'] = $_GET['project_id'];
}

if (isset($_POST['title']) && isset($_POST['description']) && !empty($_POST['title']) && !empty($_POST['description']) ) {

    $title = htmlspecialchars($_POST['title']);
    $description = htmlspecialchars(($_POST['description']));
    $project->addTask($title, $description);

  } else {
    $message = "Veuillez remplir tous les champs";
  }
  
if (isset($_POST['in-Progress']) && isset($_POST['task_id']) && !empty($_POST['in-Progress']) && !empty($_POST['task_id'])) {
  
    $status = htmlspecialchars($_POST['in-Progress']);
    $task_id = htmlspecialchars($_POST['task_id']);
    $project->changeTaskStatus($status, $task_id);
  
} else if (isset($_POST['todo']) && isset($_POST['task_id']) && !empty($_POST['todo']) && !empty($_POST['task_id'])) {
  
    $status = htmlspecialchars($_POST['todo']);
    $task_id = htmlspecialchars($_POST['task_id']);
    $project->changeTaskStatus($status, $task_id);

}  else if (isset($_POST['done']) && isset($_POST['task_id']) && !empty($_POST['done']) && !empty($_POST['task_id'])) {
  
    $status = htmlspecialchars($_POST['done']);
    $task_id = htmlspecialchars($_POST['task_id']);
    $project->changeTaskStatus($status, $task_id);
}  


?>
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&display=swap" rel="stylesheet">
    <script defer src="js/script.js"></script>
    <script defer src="js/task.js"></script>
    <title>Tâches</title>
</head>
<body>
    <?php require_once("header.php"); ?>
<main>
    <section>       
        <form action="" class="form" id="formAddTask" method="post">
            <div class="title">ajouter une tache</div>
            <div class="input-container ic1">
                <input id="title" type="text" class="input" name="title" placeholder="">
                <div class="cut"></div>
                <label for="title" class="placeholder">titre</label>
            </div>
            <div class="input-container ic1">
                <textarea id="description" type="text" class="input" name="description" placeholder=""></textarea>
                <div class="cut"></div>
                <label for="description" class="placeholder">description</label>
            </div>
            <input type="submit" name="submit" class="submit" value="add new project">
        </form>
        <div class="box_contain_project_task">
            <h1 id="project_title">Hello</h1>
            <div class="containerTasks" id="containerTasks">
                <div class="marge-box todo">
                    <h2>To do</h2>
                    <div id="container-task-todo" class="container-task-todo"></div>
                </div>
                <div class="marge-box todo">
                     <h2>In progress</h2>
                    <div id="container-task-in-progress" class="container-task-in-progress"></div>
                </div>
                <div class="marge-box todo"> 
                    <h2>Done</h2> 
                    <div id="container-task-done" class="container-task-done"></div>
                </div>  
            </div>
        </div>    
    </section>
</main>
</body>
</html>
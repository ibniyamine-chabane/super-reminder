<?php
session_start();
require_once("class/project.php");
$project = new Project;

$_SESSION['project_id'] = $_GET['project_id'];
// var_dump($_GET);
// if (isset($_GET['project_id'])) {
//     echo json_encode($project->getTaskByProjectID());
//     die();
// }

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
        <form action="" class="form" id="form" method="post">
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
        <div class="containerTasks">
            <div id="container-task-todo"></div>
            <div id="container-task-in-progress"></div>
            <div id="container-task-done"></div>
        </div>
    </section>
</main>
</body>
</html>
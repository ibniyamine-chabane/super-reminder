<?php 
session_start();
require_once("class/user.php");
require_once("class/project.php");

if (isset($_GET["userLogged"])) {
    $user = new User;
    echo json_encode($user->getUserLogged());
}

if (isset($_GET['TaskUserLogged'])) {
    $project = new Project;
    echo json_encode($project->getAllUserProject());
}   

?>

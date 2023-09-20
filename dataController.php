<?php 
session_start();
require_once("class/user.php");

if (isset($_GET["userLogged"])) {
    $user = new User;
    echo json_encode($user->getUserLogged());
}



?>

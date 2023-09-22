<?php

class Project {

    private $login;
    private $database;
    private $messageUpdateLogin;
    private $messageUpdatePw;
    private $message;

    public function __construct() {
        try {
            $this->database = new PDO('mysql:host=localhost;dbname=todolist;charset=utf8;port=3307', 'root', '');
            // $this->database = new PDO('mysql:host=localhost;dbname=moduleconnexionb2;charset=utf8;port=3307', 'root', '');
        } catch(Exception $e) {
            die('Erreur : ' . $e->getMessage());
        }
    }

    public function addProject(string $title, string $description) {
        $request = $this->database->prepare('INSERT INTO project(title, description, id_user) VALUES(?, ?, ?)');
        $request->execute(array($title, $description, $_SESSION['id_user']));        
    }

    public function getAllUserProject() {
        $request = $this->database->prepare('SELECT * FROM project WHERE `id_user` = ?');
        $request->execute(array($_SESSION['id_user']));
        return $userDatabase = $request->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function getMessage() {
        return $this->message;
    }

    public function getMessageUpdateLogin() {
        return $this->messageUpdateLogin;
    }
    public function getMessageUpdatePassword() {
        return $this->messageUpdatePw;
    }
    public function getUserLogged() {
        $request = $this->database->prepare("SELECT * FROM user WHERE `id` = ?");
        $idUserLogged = $_SESSION['id_user'];
        $request->execute(array($idUserLogged));
        return $userData = $request->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getAllUsers() {
        $request = $this->database->prepare("SELECT * FROM user");
        $request->execute(array());
        return $userData = $request->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteUser(int $id) {
        $request = $this->database->prepare("DELETE FROM user WHERE `id` = ?");
        $request->execute(array($_GET['id_u']));
        header("Location: admin.php");
    }


} 

?>
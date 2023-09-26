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

    public function addTask(string $title, string $description) {
        $request = $this->database->prepare('INSERT INTO task(title, description, id_project, id_user, status) VALUES(?, ?, ?, ?, ?)');
        $request->execute(array($title, $description, $_SESSION['project_id'], $_SESSION['id_user'], "todo"));        
    }

    public function getAllUserProject() {
        $request = $this->database->prepare('SELECT project.id, project.title, project.description FROM project WHERE `id_user` = ?');
        $request->execute(array($_SESSION['id_user']));
        return $userDatabase = $request->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function getTaskByProjectID() {
        $request = $this->database->prepare('SELECT project.id as projectId , project.title as project_title , 
                                             project.description as project_desc , project.id_user as project_idUSer , 
                                             task.id as task_id , task.title as task_title , task.description as task_desc , 
                                             task.id_project , task.id_user as task_idUSer , status
                                             FROM project
                                             INNER JOIN task 
                                             ON project.id = task.id_project
                                             WHERE project.id = ?');
        $request->execute(array($_SESSION['project_id']));
        return $data = $request->fetchAll(PDO::FETCH_ASSOC);
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
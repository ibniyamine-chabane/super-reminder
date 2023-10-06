<?php 
session_start();
require_once("class/user.php");
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Bienvenue sur Module de Connexion - Je suis ravis de vous accueillir sur Module de connexion, 
                                      un projet passionnant que j'ai développé dans le cadre de ma formation à La Plateforme_. 
                                      J'ai conçue ce site pour vous offrir une expérience utilisateur exceptionnelle,
                                      tout en mettant en pratique les compétences que j'ai acquis dans le cadre de ma formation. " />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&display=swap" rel="stylesheet">
    <script defer src="js/script.js"></script>
    <title>Accueil - Site to do list fait par Rabaou Ibrahim et Ibni-yamine Chabane</title>
</head>
<body>
    <?php require_once("header.php"); ?>
    <main>
        <section class="home-text-position">
            <article>
                <div class="container-home">
                    <?php if (isset($_SESSION['login'])) : ?>
                        <div>
                            <h2>Bonjour <?= $_SESSION['login'] ?></h2>
                        </div>
                    <?php else: ?>
                        <div>
                            <h2>Bonjour inviter</h2>
                        </div>
                    <?php endif; ?>
                </div>  
                <div>
                    <h3>Bienvenue sur Super reminder</h3>
                    <p>
                       votre compagnon ultime pour la gestion efficace de tâches et de projets !
                       Notre plateforme conviviale vous permet de rester organisé et productif 
                       tout au long de vos projets.
                    </p>
                    <p>
                        Voici les fonctionnalités clés :<br>
                        <strong>Inscription et connexion</strong> : Créez votre compte en quelques clics et connectez-vous facilement pour accéder à vos tâches et projets personnalisés. <br>
                        <strong>Gestion de profil</strong> : Modifiez vos informations personnelles et adaptez votre profil en fonction de vos besoins et préférences.<br>
                        <strong>Gestion des taches</strong> : Créez des tâches à faire, indiquez celles en cours et marquez celles terminées pour une vision claire de vos progrès.<br>
                        Commencez dès maintenant en vous inscrivant ou en vous connectant et découvrez la puissance de la gestion des tâches simplifiée.
                    </p>
                    <div class="home-button-box">
                    <?php if(isset($_SESSION['id_user'])) : ?>
                        <a href="profil.php" class="action-button home-button">Profil</a>
                        <a href="logout.php" class="action-button home-button red">Se déconnecter</a>
                        <a href="projects.php" class="action-button home-button">Projet</a>
                    <?php else: ?>
                        <a href="login.php" class="action-button home-button">Connexion</a>
                        <a href="register.php" class="action-button home-button">Inscription</a>
                    <?php endif; ?>
                    </div>
                </div>
            </article>  
        </section>    
    </main>
    <?php require_once('footer.php'); ?>
</body>
</html>
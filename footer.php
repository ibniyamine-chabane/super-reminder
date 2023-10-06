<footer>
    <div class="navbar align-footer">
        <ul class="links">
            <?php if (isset($_SESSION['id_user']) && $_SESSION['id_user'] == 1) : ?>
                <li><a href="index.php">Accueil</a></li>
                <li><a href="admin.php">Admin</a></li>
                <li><a href="projects.php">Projet</a></li>
            <?php elseif (isset($_SESSION['id_user'])): ?>
                <li><a href="index.php">Accueil</a></li>
                <li><a href="projects.php">Projet</a></li>
            <?php else: ?>
                <li><a href="index.php">Accueil</a></li>
            <?php endif; ?>
        </ul>
    </div>
</footer>
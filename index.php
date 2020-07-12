<?php

// Pour inclure facilement nos classes et dépendances
require 'vendor/autoload.php';

// Equivalent d'une requête en base de données pour trouver la liste
// des articles
$articles = App\Generator::getArticles();

// echo "<pre>";
// var_dump($articles);
// echo "</pre>";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mon site en PHP etc etc.</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'/>
    <script src="https://kit.fontawesome.com/ff1b45b592.js" crossorigin="anonymous"></script>

</head>
<body>
    <div class="container">
        <h1>Les articles !</h1>
        <div class="row">
            <?php foreach ($articles as $article) : ?>
                <div class="col-4">
                    <h2><?= $article['title'] ?></h2>
                    <p><?= $article['introduction'] ?></p>
                    <a href="article.php" class="btn btn-primary">Lire la suite</a>
                    <span class="react-like"></span>
                </div>
            <?php endforeach ?>
        </div>
    </div>

     <!-- Charge React -->
  <!-- Remarque : pour le déploiement, remplacer "development.js"
       par "production.min.js" -->
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js" ></script>
  <script src="static/js/posts.js" type="text/babel"></script>


</body>
</html>

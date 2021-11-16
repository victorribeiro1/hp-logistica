<!DOCTYPE html>
<html lang="pt-br">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="style.css">
   </head>
   <body>
      <div class="menu">
         <a href="./" class="menu__logo">
            <img src="assets/logo.png" alt="">
         </a>

         <ul class="menu__links">
            <li>
               <a href="./" class="menu__links__link">Home</a>
            </li>
            <li>
               <a href="./sobre.html" class="menu__links__link">Sobre Nós</a>
            </li>
            <li>
               <a href="./contato.html" class="menu__links__link">Contato</a>
            </li>
         </ul>

         <a href="http://3.15.228.213/" class="menu__call-to-action">
            <span class="menu__call-to-action__text">Área do cliente</span>
            <span class="menu__call-to-action__line"></span>
         </a>
      </div>

      <div class="admin">
         <img src="assets/noise.jpg" alt="" class="admin__noise">

         <div class="lines">
            <div class="lines__line lines__line--first"></div>
            <div class="lines__line lines__line--tertiary"></div>
            <div class="lines__line lines__line--tertiary"></div>
            <div class="lines__line lines__line--tertiary"></div>
            <div class="lines__line lines__line--secondary"></div>
            <div class="lines__line lines__line--secondary"></div>
            <div class="lines__line lines__line--secondary"></div>
            <div class="lines__line lines__line--last"></div>
         </div>
         <div class="admin__box admin__box--light">
            <div class="admin__box--light__text-box">
            <h1 class="admin__box--light__text-box__title">Área do Administrador</h1>
            <p class="admin__box--light__text-box__text">
               Aqui você tem a autonomia de supervisionar as avaliações feitas pelos usuários do site e editar, ou deletar se achar necessário.
            </p>
         </div>
         </div>
         <div class="admin__box admin__box--dark">
            <h3 class="admin__box--dark__title">Comentários:</h3>
            <div class="admin__box--dark__evaluations">

            <?php
                  $connection = mysqli_connect('localhost', 'root', '', 'hp', 3303);
                  $sql = "SELECT * FROM avaliacoes";
                  $result = mysqli_query($connection, $sql);

                  while ($row = $result->fetch_assoc()) {
                     echo "<div class='admin__box--dark__evaluations__evaluation'>
                     <span class='admin__box--dark__evaluations__evaluation__id'> "; echo $row['id']; echo "</span>
                     <div class='admin__box--dark__evaluations__evaluation__divisor'></div>
                     <span class='admin__box--dark__evaluations__evaluation__writer'>"; echo $row['avaliador']; echo "</span>
                     <div class='admin__box--dark__evaluations__evaluation__divisor'></div>
                     <div class='admin__box--dark__evaluations__evaluation__tools'>
                        <svg class='icon admin__box--dark__evaluations__evaluation__tools__update'>
                           <use xlink:href='../src/medias/svgs/symbol-defs.svg#icon-pencil'></use>
                        </svg>
                        <div class='admin__box--dark__evaluations__evaluation__tools__delete'>
                           <div class='admin__box--dark__evaluations__evaluation__tools__delete__line admin__box--dark__evaluations__evaluation__tools__delete__line--1'></div>
                           <div class='admin__box--dark__evaluations__evaluation__tools__delete__line admin__box--dark__evaluations__evaluation__tools__delete__line--2'></div>
                        </div>
                     </div>
                  </div>";
                  }
               ?>
            </div>
         </div>
      </div>
   </body>
</html>
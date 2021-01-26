<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Wannajob?</title>
      <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900" rel="stylesheet">

      <link rel="stylesheet" href="<?=base_url() ?>static/css/open-iconic-bootstrap.min.css">
      <link rel="stylesheet" href="<?=base_url() ?>static/css/animate.css">

      <link rel="stylesheet" href="<?=base_url() ?>static/css/owl.carousel.min.css">
      <link rel="stylesheet" href="<?=base_url() ?>static/css/owl.theme.default.min.css">
      <link rel="stylesheet" href="<?=base_url() ?>static/css/magnific-popup.css">

      <link rel="stylesheet" href="<?=base_url() ?>static/css/aos.css">

      <link rel="stylesheet" href="<?=base_url() ?>static/css/ionicons.min.css">

      <link rel="stylesheet" href="<?=base_url() ?>static/css/bootstrap-datepicker.css">
      <link rel="stylesheet" href="<?=base_url() ?>static/css/jquery.timepicker.css">

      <link rel="stylesheet" href="<?=base_url() ?>static/css/flaticon.css">
      <link rel="stylesheet" href="<?=base_url() ?>static/css/icomoon.css">
      <link rel="stylesheet" href="<?=base_url() ?>static/css/style.css">

      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet">
      <link href="<?=base_url() ?>static/css/estilo.css" rel="stylesheet">
      <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script type="text/javascript" src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script type="text/javascript"></script>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" type="text/css" rel="stylesheet">
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

      <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-firestore.js"></script>
   </head>
   <body>
      <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-transparent ftco-navbar-light" id="ftco-navbar">
         <div class="container">
            <div class="dropdown dropdown-menu-right">
               <button class="btn btn-sm dropdown-toggle bg-transparent" type="button" id="menu1" data-toggle="dropdown">
               <img id="miFoto" src="" class="rounded-circle img-fluid" style="height: 75px; width: 75px;">
               <span class="caret"></span>
               </button>
               <div class="dropdown-menu">
                  <a class="dropdown-item" href="<?=base_url() ?>index.php/perfilEmpleado">Mi Perfil</a>
                  <a class="dropdown-item" href="<?=base_url() ?>index.php/empleado">Empleos</a>
                  <a class="dropdown-item" href="<?=base_url() ?>index.php/postulaciones">Mis Postulaciones</a>
               </div>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
            </button>
            <div class="collapse navbar-collapse" id="ftco-nav">
               <ul class="navbar-nav ml-auto">
                  <li class="nav-item cta cta-colored"><button onclick="cerrar()" class="btn btn-success">Cerrar sesión</button></li>
               </ul>
            </div>
         </div>
      </nav>
      <div class="container">
            <div class="row">
               <div class="containerchat">
                  <div class="messaging">
                     <div class="inbox_msg">
                        <div class="inbox_people">
                           <div class="headind_srch" style="width: 1102px">
                              <div class="recent_heading">
                                 <h4>Wannajob?</h4>
                              </div>

                           </div>
                           <div class="inbox_chat" id="listaChat">

                           </div>
                        </div>
                        <div class="mesgs">
                           <div class="msg_history" id="mensajesDiv">
                              
                              
                           </div>
                           <div class="type_msg">
                              <div class="input_msg_write">
                                 <input type="text" class="write_msg" id="textomensaje" placeholder="Type a message">
                                 <button class="msg_send_btn" type="button" onclick="enviar()" title="Enviar"></button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <script src="<?=base_url() ?>static/js/jquery.min.js"></script>
  <script src="<?=base_url() ?>static/js/jquery-migrate-3.0.1.min.js"></script>
  <script src="<?=base_url() ?>static/js/popper.min.js"></script>
  <script src="<?=base_url() ?>static/js/bootstrap.min.js"></script>
  <script src="<?=base_url() ?>static/js/jquery.easing.1.3.js"></script>
  <script src="<?=base_url() ?>static/js/jquery.waypoints.min.js"></script>
  <script src="<?=base_url() ?>static/js/jquery.stellar.min.js"></script>
  <script src="<?=base_url() ?>static/js/owl.carousel.min.js"></script>
  <script src="<?=base_url() ?>static/js/jquery.magnific-popup.min.js"></script>
  <script src="<?=base_url() ?>static/js/aos.js"></script>
  <script src="<?=base_url() ?>static/js/jquery.animateNumber.min.js"></script>
  <script src="<?=base_url() ?>static/js/bootstrap-datepicker.js"></script>
  <script src="<?=base_url() ?>static/js/jquery.timepicker.min.js"></script>
  <script src="<?=base_url() ?>static/js/scrollax.min.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
  <script src="<?=base_url() ?>static/js/google-map.js"></script>
  <script src="<?=base_url() ?>static/js/main.js"></script>   
  <script src="<?=base_url() ?>static/js/chat.js"></script>   
   </body>
</html>
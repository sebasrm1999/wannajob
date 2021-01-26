<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Wannajob</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
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

    <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-firestore.js"></script>
  </head>
  <body>
    
	  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
        <div class="dropdown dropdown-menu-right">
          <button class="btn btn-sm dropdown-toggle bg-transparent" type="button" id="menu1" data-toggle="dropdown">
           <img id="miFoto" src="" class="rounded-circle img-fluid" style="height: 75px; width: 75px;">
             <span class="caret"></span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="<?=base_url() ?>index.php/perfilEmpleado">Mi Perfil</a>
            <a class="dropdown-item" href="<?=base_url() ?>index.php/chatEmpleado">Mis Mensajes</a>
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
    <!-- END nav -->
    
    <div class="hero-wrap js-fullheight" style="background-image: url('<?=base_url() ?>static/images/bg_2.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
          <div class="col-xl-10 ftco-animate mb-5 pb-5" data-scrollax=" properties: { translateY: '70%' }">
          <h1 class="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Encuentre el empleo<br><span>de sus sueños</span></h1>
    <div class="ftco-search">
              <!--<div class="row">
                <div class="col-md-12 nav-link-wrap">
                  <a class="nav-link active mr-md-1" aria-selected="true">Encuentre un empleo</a>
                </div>
                <div class="col-md-12 tab-wrap">
                  
                  <div class="tab-content p-4" id="v-pills-tabContent">

                    <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                      <form action="#" class="search-job">
                        <div class="row">
                          <div class="col-md">
                            <div class="form-group">
                              <div class="form-field">
                                <div class="icon"><span class="icon-briefcase"></span></div>
                                <input type="text" class="form-control" placeholder="Vacante">
                              </div>
                            </div>
                          </div>
                          <div class="col-md">
                            <div class="form-group">
                              <div class="form-field">
                                <div class="select-wrap">
                                  <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                  <select name="" id="" class="form-control">
                                    <option value="">Horario</option>
                                    <option value="">Tiempo Completo</option>
                                    <option value="">Medio tiempo</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md">
                            <div class="form-group">
                              <div class="form-field">
                                <div class="icon"><span class="icon-map-marker"></span></div>
                                <input type="text" class="form-control">
                              </div>
                            </div>
                          </div>
                          <div class="col-md">
                            <div class="form-group">
                              <div class="form-field">
                                <input type="submit" value="Buscar" class="form-control btn btn-primary">
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>

                    
                  </div>
                </div>
              </div>-->
            </div>

            </div>
        </div>
      </div>
    </div>

		<section class="ftco-section bg-light">
			<div class="container">
				<div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
          	<span class="subheading">Empleos</span>
            <h2 class="mb-4"><span>Vacantes</span> Recientes</h2>
          </div>
        </div>
				<div id="vacantes" class="row">

				</div>

        <!-- The Modal -->
        <div class="modal fade" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable ">
    <!--Content-->
    <div class="modal-content ">
      <!--Header-->
      <div class="modal-header d-flex justify-content-center  bg-primary">
        <p id="vacante" class="headin" style="color: #fff"></p>
      </div>

      <!--Body-->
      <div class="modal-body" style="color: #000; overflow-y: scroll; height: 300px;">
          
          <p id="horario"><span class="icon-clock-o" style="padding-right: 20px; font-size: 20px;"></span></p>
          <p id="sueldo"> <span class="icon-dollar" style="padding-right: 25px; font-size: 22px;"></span></p>
          <p> <span class="icon-list-alt" style="padding-right: 20px; font-size: 20px;"></span>Requisitos: </p>
            <div style="padding-inline-start: 40px;" id="requisitos">
            </div>
           <p> <span class="icon-handshake-o" style="padding-right: 18px; font-size:15px;"></span> ¿Qué ofrecemos? </p>
           <div style="padding-inline-start: 40px;" id="ofrecemos">
           </div>
            
           <p> <span class="icon-briefcase" style="padding-right: 20px; font-size: 15px;"></span> Funciones a realizar: </p>
           <div style="padding-inline-start: 40px;" id="funciones">
             </div>
            
           <p id="ubicacion"> <span class="icon-map" style="padding-right: 20px; font-size: 18px;"></span></p>

               <div id="mapa_info"   style="height: 200px; width: 350px; align-content: center;  "> </div>
            <script 
                      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHihiG2sLePt8cB8u61qTRg_PRUGnROkA&callback=mapas">
            </script>
            &nbsp;
         

      </div>

      <!--Footer-->
      <div class="modal-footer flex-center">

        <button type="button" class="btn btn-outline-secondary waves-effect" data-dismiss="modal">Cerrar</button>
        <button id="postular" type="button" class="btn btn-primary">Postularse</button>
      </div>
      </div>
    </div>
    <!--/.Content-->
  </div>
</div>


				<div class="row mt-5">
          <div class="col text-center">
            <div class="block-27">
              <ul>
                <li><a href="#">&lt;</a></li>
                <li class="active"><span>1</span></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&gt;</a></li>
              </ul>
            </div>
          </div>
        </div>
			</div>
		</section>

    <footer class="ftco-footer ftco-bg-dark ftco-section">
      <div class="container">
        <div class="row mb-5">
        	<div class="col-md">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Acerca de Señora Software</h2>
              <p>Somos una empresa enfocada al desarrollo de Software, especializados en aplicaciones móviles y páginas web, y lo más importante apra nosotros es la satisfacción de nuestros clientes.</p>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Empresas</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="py-2 d-block">Inicio</a></li>
                <li><a href="#" class="py-2 d-block">Registrarse</a></li>
                <li><a href="#" class="py-2 d-block">Iniciar sesión</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-4">
              <h2 class="ftco-heading-2">Trabajadores</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="py-2 d-block">Inicio</a></li>
                <li><a href="#" class="py-2 d-block">Registrarse</a></li>
                <li><a href="#" class="py-2 d-block">Iniciar sesión</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
            	<h2 class="ftco-heading-2">¿Quiere contactarnos?</h2>
            	<div class="block-23 mb-3">
	              <ul>
	                <li><span class="icon icon-map-marker"></span><span class="text">Av. Pie de la Cuesta 2501, Nacional, 76148, Santiago de Querétaro, Querétaro, México.</span></li>
	                <li><a href="#"><span class="icon icon-phone"></span><span class="text">+52 461 109 9218</span></a></li>
	                <li><a href="#"><span class="icon icon-envelope"></span><span class="text">senorasacv@gmail.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">

            <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
          </div>
        </div>
      </div>
    </footer>
    
  

  <!-- loader -->
  <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>


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
  <script src="<?=base_url() ?>static/js/main.js"></script>
  <script src="<?=base_url() ?>static/js/empleado.js"></script>
    
  </body>
</html>
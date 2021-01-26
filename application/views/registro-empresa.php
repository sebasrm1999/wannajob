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

    <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-firestore.js"></script>
  </head>
  <body>

    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div class="container">
        <a class="navbar-brand" href="<?=base_url() ?>index.php"><span class="icon icon-chevron-left mr-2"></span>Wannajob?</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="oi oi-menu"></span> Menu
        </button>
      </div>
    </nav>
    <!-- END nav -->

    <div class="hero-wrap js-fullheight" style="background-image: url('<?=base_url() ?>static/images/bg_2.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
          <div class="col-xl-10 ftco-animate mb-5 pb-5" data-scrollax=" properties: { translateY: '70%' }">
            <h1 class="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Regístrese<br><span>Como candidato o empresa</span></h1>
            
          </div>
        </div>
      </div>
    </div>

		<section class="ftco-section bg-light">
			<div class="container">
				<div class="ftco-search">
              <div class="row">
                <div class="col-md-12 nav-link-wrap">
                  <div class="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active mr-md-1" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Soy un candidato</a>

                    <a class="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Soy una empresa</a>

                  </div>
                </div>
                <div class="col-md-12 tab-wrap">
                  
                  <div class="tab-content p-4" id="v-pills-tabContent">

                    <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                      <div class="col-md-12 mb-5">
          
                         <div action="#" class="p-5 bg-white">

                          <div class="form-row">
                            <div class="form-group col-md-6">  
                              <label class="font-weight-bold" for="nombre-empleado">Nombre</label>
                                <input type="text" id="nombre-empleado" class="form-control" required>
                                <div id="nombre-error"></div>
                            </div>
                            
                            <div class="form-group col-md-6">
                              
                              <label class="font-weight-bold" for="logo-empleado">Imagen o Logotipo</label>
                                <input type="file" id="logo-empleado" class="form-control" accept="image/png, image/jpeg">
                            </div>
                          </div>

                          <div class="form-row">
                            <div class="form-group col-md-6">  
                              <label class="font-weight-bold" for="pais-empleado">País</label>
                              <div class="col-md-12 mb-3 mb-md-0">
                                <input type="text" id="pais-empleado" class="form-control">
                              </div>
                              <div id="pais-error"></div>
                            </div>
                            
                            <div class="form-group col-md-6">
                              <label class="font-weight-bold" for="estado-empleado">Estado</label>
                              <div class="col-md-12 mb-3 mb-md-0">
                                <input type="text" id="estado-empleado" class="form-control">
                              </div>
                              <div id="estado-error"></div>
                            </div>
                          </div>

                          <div class="form-row">
                            <div class="form-group col-md-6">  
                              <label class="font-weight-bold" for="ciudad-empleado">Ciudad</label>
                              <div class="col-md-12 mb-3 mb-md-0">
                                <input type="text" id="ciudad-empleado" class="form-control">
                              </div>
                              <div id="ciudad-error"></div>
                            </div>
                            
                            <div class="form-group col-md-6">
                              <label class="font-weight-bold" for="cp-empleado">Código Postal</label>
                              <div class="col-md-12 mb-3 mb-md-0">
                                <input type="text" id="cp-empleado" class="form-control">
                              </div>
                              <div id="cp-error"></div>
                            </div>
                          </div>

                            <div class="row form-group mb-4">
                              <label class="font-weight-bold" for="email-empleado">Correo electrónico</label>
                              <div class="col-md-12 mb-3 mb-md-0">
                                <input type="text" id="email-empleado" class="form-control">
                              </div>
                              <div id="email-error"></div>
                            </div>

                            <div class="row form-group mb-4">
                              <label class="font-weight-bold" for="password-empleado">Contraseña</label>
                              <div class="col-md-12 mb-3 mb-md-0">
                                <input type="password" id="password-empleado" class="form-control">
                              </div>
                              <div id="password-error"></div>
                            </div>

                            <div class="row form-group mb-4">
                              <label class="font-weight-bold" for="password2-empleado">Confirmar contraseña</label>
                              <div class="col-md-12 mb-3 mb-md-0">
                                <input type="password" id="password2-empleado" class="form-control">
                              </div>
                              <div id="password2-error"></div>
                            </div>

                            <div class="row justify-content-center">
                              <div class="justify-content-center">
                              <button class="btn btn-primary btn-lg" onclick="repetidoEmpleado()">Registrarse</button>
                              </div>
                            </div>

                
                          </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
                      <div class="col-md-12 mb-5">
          
           <div action="#" class="p-5 bg-white">

              <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="nombre-empresa">Nombre de su empresa</label>
                  <input type="text" id="nombre-empresa" class="form-control" placeholder="eg. Professional UI/UX Designer">
                  <div id="nombre-empresa-error"></div>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12"><label class="font-weight-bold" for="empresa-desc">¿De qué trata su empresa?</label></div>
                <div class="col-md-12 mb-3 mb-md-0">
                  <textarea name="empresa-desc" id="desc-empresa" class="form-control" id="" cols="30" rows="5"></textarea>
                </div>
                <div id="desc-error"></div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">  
                  <label class="font-weight-bold" for="logo-empresa">Imagen o Logotipo</label>
                  <input type="file" id="logo-empresa" class="form-control" accept="image/png, image/jpeg">
                </div>
                
                <div class="form-group col-md-6">
                  <label class="font-weight-bold" for="telefono-empresa">Teléfono</label>
                  <div class="col-md-12 mb-3 mb-md-0">
                    <input type="text" id="telefono-empresa" class="form-control">
                  </div>
                  <div id="telefono-error"></div>
                </div>
              </div>

              <div class="row form-group mb-4">
                <label class="font-weight-bold" for="email-empresa">Correo electrónico</label>
                <div class="col-md-12 mb-3 mb-md-0">
                  <input type="text" id="email-empresa" class="form-control">
                </div>
                <div id="email-empresa-error"></div>
              </div>

              <div class="row form-group mb-4">
                <label class="font-weight-bold" for="password-empresa">Contraseña</label>
                <div class="col-md-12 mb-3 mb-md-0">
                  <input type="password" id="password-empresa" class="form-control">
                </div>
                <div id="password-empresa-error"></div>
              </div>

              <div class="row form-group mb-4">
                <label class="font-weight-bold" for="password2-empresa">Confirmar contraseña</label>
                <div class="col-md-12 mb-3 mb-md-0">
                  <input type="password" id="password2-empresa" class="form-control">
                </div>
                <div id="password2-empresa-error"></div>
              </div>

              <div class="row justify-content-center">
                <div class="justify-content-center">
                <button class="btn btn-primary btn-lg" onclick="repetidoEmpresa()">Registrarse</button>
                </div>
              </div>

  
            </div>
          </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
			</div>
		</section>

    <!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header bg-info">
      <h4 class="modal-title text-white">Cuenta cancelada</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        
      </div>
      <div class="modal-body">
        <p>¿Desea restaurar su cuenta? (Deberá iniciar sesión con su anterior contraseña).</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-info" id="restaurar">Confirmar</button>
      </div>
    </div>

  </div>
</div>

<!-- Modal -->
<div id="alertaModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header bg-info">
      <h4 id="info-modal-titulo" class="modal-title text-white">Cuenta cancelada</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        
      </div>
      <div class="modal-body">
        <p id="info-modal-cuerpo">¿Desea restaurar su cuenta? (Deberá iniciar sesión con su anterior contraseña).</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
      </div>
    </div>

  </div>
</div>


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
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js" integrity="sha512-VZ6m0F78+yo3sbu48gElK4irv2dzPoep8oo9LEjxviigcnnnNvnTOJRSrIhuFk68FMLOpiNz+T77nNY89rnWDg==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.js" integrity="sha512-VGxuOMLdTe8EmBucQ5vYNoYDTGijqUsStF6eM7P3vA/cM1pqOwSBv/uxw94PhhJJn795NlOeKBkECQZ1gIzp6A==" crossorigin="anonymous"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
  <script src="<?=base_url() ?>static/js/google-map.js"></script>
  <script src="<?=base_url() ?>static/js/main.js"></script>
  <script src="<?=base_url() ?>static/js/registro.js"></script>
    
  </body>
</html>
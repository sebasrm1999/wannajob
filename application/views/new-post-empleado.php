<!DOCTYPE html>
<html lang="en">
  <head>
    <title>WannaJob</title>
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js" integrity="sha512-VZ6m0F78+yo3sbu48gElK4irv2dzPoep8oo9LEjxviigcnnnNvnTOJRSrIhuFk68FMLOpiNz+T77nNY89rnWDg==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.js" integrity="sha512-VGxuOMLdTe8EmBucQ5vYNoYDTGijqUsStF6eM7P3vA/cM1pqOwSBv/uxw94PhhJJn795NlOeKBkECQZ1gIzp6A==" crossorigin="anonymous"></script>
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
            <a class="dropdown-item" href="<?=base_url() ?>index.php/empleado">Empleos</a>
            <a class="dropdown-item" href="<?=base_url() ?>index.php/chatEmpleado">Mis Mensajes</a>
            <a class="dropdown-item" href="#">Mis Postulaciones</a>
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
    
    <div class="ftco-section bg-light">
      <div class="container mt-2">
        <div class="row">
            <!-- INFO -->
            <div class="container">
              <div class="container">
                <div class="container">
                    <div class="col-lg-12 order-lg-12">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a href="" data-target="#profile" data-toggle="tab" class="nav-link active">Perfil</a>
                            </li>
                            <li class="nav-item">
                              <a href="" data-target="#cv" data-toggle="tab" class="nav-link">Ver CV</a>
                            </li>
                            <li class="nav-item">
                                <a href="" data-target="#edit" data-toggle="tab" class="nav-link">Editar Información Personal</a>
                            </li>
                            <li class="nav-item">
                                <a href="" data-target="#ecv" data-toggle="tab" class="nav-link">Genera tu CV</a>
                            </li>

                        </ul>
                        <div class="tab-content py-4">
                            <div class="tab-pane active" id="profile" align='center'>
                                <h1 id="nombre" class="mb-3"></h5>
                                    <div class="col-lg-4 order-lg-1 text-center">
                                        <img id="logo" style='border-radius: 1000px 1000px 1000px / 1000px 1000px;' src="//placehold.it/150" class="mx-auto img-fluid img-circle d-block" alt="avatar">
                                        <label class="custom-file">
                                        <input id="editar-logo" type="file">
                                        </label>
                                        <button type="button" class="btn btn-success" onclick="cambiarFoto()">Cambiar foto</button>
                                    </div>
                                <div class="row">
                                    <div class="col-md-12" align='center'>
                                        <h2>Información</h6>
                                        <p id="email" style="color: black;"><i class="material-icons" style="justify-content: center; font-size: 15px;">email</i>
                                            
                                        </p>
                                        <p id="pais" style="color: black;"><i class="material-icons" style="justify-content: center; font-size: 15px;">location_city</i>
                                            México
                                        </p>
                                        <p id="estado" style="color: black;"><i class="material-icons" style="justify-content: center; font-size: 15px;">location_searching</i>
                                            Querétaro
                                        </p>
                                        <p id="ciudad" style="color: black;"><i class="material-icons" style="justify-content: center; font-size: 15px;">location_on</i>
                                            Querétaro
                                        </p>
                                        <button class="btn btn-danger btn-lg" data-toggle="modal" data-target="#myModal">Eliminar Cuenta</button>
                                    </div>
                                </div>
                                <!--/row-->
                            </div>
                            <div class="tab-pane" id="edit">
                                <div role="form">
                                    <div class="form-group row">
                                        <label class="col-lg-12 col-form-label form-control-label" style="color: black;">Nombre</label>
                                        <div class="col-lg-12">
                                            <input id="editar-nombre" class="form-control" type="text" value="Jane">
                                        </div>
                                        <div id="nombre-error"></div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-lg-12 col-form-label form-control-label" style="color: black;">Correo</label>
                                        <div class="col-lg-12">
                                            <input id="editar-email" class="form-control" type="email" value="email@gmail.com">
                                        </div>
                                        <div id="email-error"></div>
                                    </div>
                                    <div class="form-group row">
                                      <label class="col-lg-12 col-form-label form-control-label" style="color: black;">Contraseña</label>
                                      <div class="col-lg-12">
                                          <input id="editar-password" class="form-control" type="password" value="">
                                      </div>
                                      <div id="password-error"></div>
                                    </div>
                                    <div class="form-group row">
                                      <label class="col-lg-12 col-form-label form-control-label" style="color: black;">Confirmar contraseña</label>
                                      <div class="col-lg-12">
                                          <input id="editar-password2" class="form-control" type="password" value="">
                                      </div>
                                      <div id="password2-error"></div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-lg-12 col-form-label form-control-label"></label>
                                        <div class="col-lg-3">
                                            <input id="editar-pais" class="form-control" type="text" value="" placeholder="País">
                                            <div id="pais-error"></div>
                                        </div>
                                        <div class="col-lg-3">
                                            <input id="editar-estado" class="form-control" type="text" value="" placeholder="Estado">
                                            <div id="estado-error"></div>
                                        </div>
                                        <div class="col-lg-3">
                                          <input id="editar-ciudad" class="form-control" type="text" value="" placeholder="Ciudad">
                                          <div id="ciudad-error"></div>
                                      </div>
                                      <div class="col-lg-3">
                                          <input id="editar-cp" class="form-control" type="text" value="" placeholder="Código Postal">
                                          <div id="cp-error"></div>
                                      </div>
                                    </div>
                                    <div class="form-group row">
                                      <label class="col-lg-12 col-form-label form-control-label"></label>
                                        <div class="col-md-12">
                                        <button class="btn btn-primary btn-lg" onclick="repetido()">Guardar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="ecv">
                                <div class="form" role="form">
                                <div class="form-group row">
                                      <label class="col-lg-12 col-form-label form-control-label" style="color: black;">Dirección</label>
                                      <div class="col-lg-9">
                                          <input id="direccionAdd" class="form-control" type="text">
                                      </div>
                                      <div class="col-lg-3">
                                      <button class="btn btn-primary btn-lg" onclick="agregarDireccion()">Agregar</button>
                                      </div>
                                    </div>
                                    <div class="form-group row">
                                      <label class="col-lg-12 col-form-label form-control-label" style="color: black;">Telefono</label>
                                      <div class="col-lg-9">
                                          <input id="telefonoAdd" class="form-control" onkeypress="return solonumeros(event)" maxlength="10" pattern="{10}" type="text">
                                      </div>
                                      <div class="col-lg-3">
                                      <button class="btn btn-primary btn-lg" onclick="agregarTelefono()">Agregar</button>
                                      </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-lg-12 col-form-label form-control-label" style="color: black;">Escolaridad</label>
                                        <div class="col-lg-9">
                                            <input id="escolaridadAdd" class="form-control" type="text">
                                        </div>
                                        <div class="col-lg-3">
                                        <button class="btn btn-primary btn-lg" onclick="agregarEscolaridad()">Agregar</button>
                                          </div>
                                    </div>
                                    <div class="form-group row">
                                      <label class="col-lg-12 col-form-label form-control-label" style="color: black;">Experiencia</label>
                                      <div class="col-lg-9">
                                          <input id="experienciaAdd" class="form-control" type="text">
                                      </div>
                                      <div class="col-lg-3">
                                      <button class="btn btn-primary btn-lg" onclick="agregarExperiencia()">Agregar</button>
                                      </div>
                                    </div>
                                    <div class="form-group row">
                                      <label class="col-lg-12 col-form-label form-control-label" style="color: black;">Habilidades</label>
                                      <div class="col-lg-9">
                                          <input id="habilidadesAdd" class="form-control" type="text">
                                      </div>
                                      <div class="col-lg-3">
                                      <button class="btn btn-primary btn-lg" onclick="agregarHabilidades()">Agregar</button>
                                      </div>
                                    </div>
                                    <div class="form-group row">
                                      <label class="col-lg-12 col-form-label form-control-label" style="color: black;">Intereses</label>
                                      <div class="col-lg-9">
                                          <input id="interesesAdd" class="form-control"  type="text">
                                      </div>
                                      <div class="col-lg-3">
                                      <button class="btn btn-primary btn-lg" onclick="agregarIntereses()">Agregar</button>
                                      </div>
                                    </div>
                                    <div class="form-group row">
                                      <label class="col-lg-12 col-form-label form-control-label" style="color: black;">Logros</label>
                                      <div class="col-lg-9">
                                          <input id="logrosAdd" class="form-control" type="text">
                                      </div>
                                      <div class="col-lg-3">
                                      <button class="btn btn-primary btn-lg" onclick="agregarLogros()">Agregar</button>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="cv">
                              <h2 class="mb-3">Curriculum <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                Vista para empresas
                              </button></h5>
                              <div class="row">
                                  <div class="col-md-12">
                                      <h6 style="color: black; font-weight: bold;">Nombre</h6>
                                      <p id="nombrecv" style="color: black;">
                                      </p>
                                      <h6 style="color: black; font-weight: bold;">Correo</h6>
                                      <p id="emailcv" style="color: black;">
                                      </p>
                                      <h6 style="color: black; font-weight: bold;">Teléfono</h6>
                                      <div id="telefonocv"></div>
                                      <h6 style="color: black; font-weight: bold;">Dirección</h6>
                                      <div id="direccioncv"></div>
                                      <h6 style="color: black; font-weight: bold;">Escolaridad</h6>
                                      <div id='escolaridadcv'></div>
                                      <h6 style="color: black; font-weight: bold;">Experiencia</h6>
                                      <div id="experienciacv"></div>
                                      <h6 style="color: black; font-weight: bold;">Habilidades</h6>
                                      <div id="habilidadescv"></div>
                                      <h6 style="color: black; font-weight: bold;">Intereses</h6>
                                      <div id="interesescv"></div>
                                      <h6 style="color: black; font-weight: bold;">Logros</h6>
                                      <div id="logroscv"></div>
                                  </div>
                              </div>
                              <!--/row-->

                              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="modaltitulo"></h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                    <div class="container">
                                      <div class="row">
                                        <div class='col-md-6'>
                                          <p style="color: black; font-size: 15"><strong>1.- Datos personales</strong></p>
                                          <div id='direccionemp'></div>
                                          <div id='telefonoemp'></div>
                                          <div id='correoemp'></div>
                                          <p style="color: black;"><strong>2.- Escolaridad</strong></p>
                                          <div id='escolaridademp'></div>
                                        </div>
                                        <div class='col-md-6'>
                                        <p style="color: black;"><strong>3.- Experiencia profesional</strong></p>
                                        <div id='experienciaemp'></div>
                                        <p style="color: black;"><strong>4.- Intereses</strong></p>
                                        <div id='interesesemp'></div>
                                        <p style="color: black;"><strong>5.- Logros</strong></p>
                                        <div id='logrosemp'></div>
                                        <p style="color: black; "><strong>6.- Habilidades</strong></p>
                                        <div id='habilidadesemp'></div>
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
            </div>

            </div>
            <!-- END INFO-->
          </div>
        </div>
      </div>
  

      <!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header bg-info">
      <h4 class="modal-title text-white">¿Eliminar la cuenta?</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        
      </div>
      <div class="modal-body">
        <p>¿Está seguro de que desea eliminar la cuenta? (Se puede restablecer en un futuro).</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-info" onclick="baja()">Confirmar</button>
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
      <h4 id="info-modal-titulo" class="modal-title text-white"></h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        
      </div>
      <div class="modal-body">
        <p id="info-modal-cuerpo"></p>
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
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
  <script src="<?=base_url() ?>static/js/google-map.js"></script>
  <script src="<?=base_url() ?>static/js/main.js"></script>
  <script src="<?=base_url() ?>static/js/perfilEmpleado.js"></script>    
  </body>
</html>
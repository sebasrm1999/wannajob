<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Wannajob?</title>
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

    <script src="<?=base_url() ?>static/highcharts/highcharts.js"> </script>
    <script src="<?=base_url() ?>static/highcharts/modules/exporting.js"> </script>
    <script src="<?=base_url() ?>static/highcharts/modules/export-data.js"> </script>
    <script src="<?=base_url() ?>static/highcharts/modules/accessibility.js"></script>
    <script src="<?=base_url() ?>static/highcharts/modules/series-label.js"></script>
    <script src="<?=base_url() ?>static/highcharts/modules/annotations.js"></script>
    <script src="<?=base_url() ?>static/highcharts/modules/streamgraph.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-firestore.js"></script>
  <script src="<?=base_url() ?>static/js/empleos.js"></script>
  <script src="<?=base_url() ?>static/js/mapa.js"></script>


    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

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
            <a class="dropdown-item" href="<?=base_url() ?>index.php/perfilEmpresa">Mi Perfil</a>
            <a class="dropdown-item" href="<?=base_url() ?>index.php/chatEmpresa">Mis Mensajes</a>
            <a class="dropdown-item" href="<?=base_url() ?>index.php/empresa">Solicitudes</a>
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
      
    </div>
    
    <script>
      $(document).ready(function(){
        
    $("#botonocultamuestra").click(function(){
        $("#form-empleo").each(function() {
            displaying = $(this).css("display");
                if(displaying == "block") {
                    $(this).fadeOut(function() { 
		                $("#titulo").html("Empleos que has publicado");
                    $(this).css("display","none");
                    $("#empleos").css("display","block");        
                });
                } else {
                    $(this).fadeIn(function() {
                    $("#titulo").html("Nuevo empleo");
                    $("#botonocultamuestra").css("visibility","hidden");
                    $(this).css("display","block");
                    $("#empleos").css("display","none");
                    });
                }
            });
        });
      
      $("#cancelar").click(function(){
        $("#titulo").html("Empleos que has publicado");
        $("#form-empleo").css("display","none");
        $("#empleos").css("display","block");  
        $("#botonocultamuestra").css("visibility","visible");

      });
});
    </script>
  

		<section class="ftco-section bg-light">
			<div class="container">
				<div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <h2 class="mb-4" id="titulo">Empleos que has publicado</h2>
         <button style="color: #fff;" class="btn btn-success justify-content-center" id="botonocultamuestra" onclick="registro_empleo()">Agregar nuevo empleo</button>
 
      </div>
    </div>
       
        <div id="form-empleo" class="collapse ">
            <form style="padding-inline-start: 3cm; padding-inline-end: 3cm;">
              <div class="form-row">
                <div class="form-group col-md-6">  
                  <label for="inputZip">Vacante:</label>
                  <input type="text" class="form-control" id="nom_empleo" onkeypress="return sololetras(event)" placeholder="Ejm. Mesero" required>
                </div>
                
                <div class="form-group col-md-6">
                  
                  <label for="inputZip">Tiempo de trabajo:</label>
                  <input type="text" class="form-control" id="horario_empleo" onkeypress="return numlet(event)"  placeholder="Ejm. tiempo completo" required>
                </div>
              </div>  
            <label for="inputZip">Pago:</label>
            <div class="form-row">
              <div class="form-group col-md-6">
                <input type="text" class="form-control" id="Pagode_empleo" onkeypress="return solonumeros(event)" placeholder="Ejm. 1000 - 2000" required>
              </div>
              <div class="form-group col-md-6">
                <input type="text" class="form-control" id="Pago_empleo" onkeypress="return sololetras(event)" placeholder="semanal/mensual/anual" required>
              </div>
            </div> 
             <label for="inputZip">Requisitos:</label>
              <div class="form-row">
                <div class="form-group col-md-10">  
                  <input type="text" class="form-control" id="addRequisito" onkeypress="return numlet(event)" placeholder="Añadir requisito" minlength="1">
                </div>
                <div class="form-group col-md-2">   
               <button type="button" id="guardar-req" class="btn btn-success py-2 mr-1 float-right">Guardar</button> 
              </div>
            </div>

             <div id="tusRequisitos">
    
            </div>
              
             <label for="inputZip">Funciones a realizar:</label>
             <div class="form-row">
                  <div class="form-group col-md-10">  
                  <input type="text" class="form-control" id="addFuncion" onkeypress="return numlet(event)" placeholder="Añadir funcion" minlength="1">
                </div>
                <div class="form-group col-md-2">   
               <button type="button" id="guardar-fun" class="btn btn-success py-2 mr-1 float-right" data-dismiss="modal" >Guardar</button> 
              </div>
            </div>




             <div id="tusFunciones">
            </div>


            <label for="inputZip">¿Qué ofrecemos?</label>
            <div class="form-row">
                <div class="form-group col-md-10">  
                  <input type="text" class="form-control" id="addOferta" onkeypress="return numlet(event)" placeholder="Añadir oferta" minlength="1">
                </div>
                <div class="form-group col-md-2">   
               <button type="button" id="guardar-oferta" class="btn btn-success py-2 mr-1 float-right " data-dismiss="modal">Guardar</button> 
              </div>
            </div>




             <div id="tusOfertas">
            </div>
            <label for="inputZip">Ubicación</label>
            <div class="form-row">
              <div class="form-group col-md-12">  
                <input type="text" class="form-control" id="ubicacion_empleo" placeholder="Ubicación" required>
              </div>
            </div> 
                <div id="mapa"   style="height: 400px; width: 650px; align-content: center;  "> </div>
            
            &nbsp;
                
            <div class="form-row">
               
        <button type="button" id="cancelar" class="btn btn-secondary py-2 mr-1" data-dismiss="modal" > Cancelar</button>        
          <button type="button" id="guardar_empleo" class="btn btn-success py-2 mr-1" data-dismiss="modal"> Guardar</button> 
            </form>
            </div>   
       </div>

				<div class="row" id="empleos">
        </div>
        <div class="row">
          <button id="estadistica" type="button" class="btn btn-info" onclick="grafica()" data-target="#graficaModal" data-toggle="modal">Estadísticas</button>
        </div>
			</div>
		</section>

  <!-------------edit----------------->
<div class="modal fade " id="edit_empleo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-lg">
    <!--Content-->
    <div class="modal-content ">
      <!--Header-->
      <div class="modal-header d-flex justify-content-center  bg-primary">
        <p class="headin" style="color: #fff" id="titulo_edit"></p>
      </div>

      <!--Body-->
      <div class="modal-body" style="color: #000; overflow-y: scroll; height: 450px;">
          
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">  
              <label for="inputZip">Vacante:</label>
              <input type="text" class="form-control" id="vacante_edit" onkeypress="return sololetras(event)" placeholder="Ejm. Mesero" required>
            </div>
            <div class="form-group col-md-6">
              
              <label for="inputZip">Tiempo de trabajo:</label>
              <input type="text" class="form-control" id="tiempo_edit" onkeypress="return numlet(event)" placeholder="Ejm. tiempo completo" required>
            </div>
          </div>  
        <label for="inputZip">Pago:</label>
        <div class="form-row">
              <div class="form-group col-md-12">
                <input type="text" class="form-control" onkeypress="return numlet(event)" id="Pago_edit" placeholder="semanal/mensual/anual" required>
              </div>
          </div> 
         <label for="inputZip">Requisitos:</label>
           <div class="form-row">
                <div class="form-group col-md-10">  
                  <input type="text" class="form-control" id="edit_Requisito" onkeypress="return numlet(event)" placeholder="Añadir requisito" minlength="1">
                </div>
                <div class="form-group col-md-2">   
               <button type="button" id="setAddRequisito" class="btn btn-success py-2 mr-1 float-right">Guardar</button> 
              </div>
            </div>
             <div id="editRequisitos">
            </div>
          
         <label for="inputZip">Funciones a realizar:</label>
          <div class="form-row">
                <div class="form-group col-md-10">  
                  <input type="text" class="form-control" id="edit_Funcion" onkeypress="return numlet(event)" placeholder="Añadir requisito" minlength="1">
                </div>
                <div class="form-group col-md-2">   
               <button type="button" id="setAddFucion" class="btn btn-success py-2 mr-1 float-right">Guardar</button> 
              </div>
            </div>

             <div id="editFunciones">
            </div>
        <label for="inputZip">¿Qué ofrecemos?</label>
         <div class="form-row">
                <div class="form-group col-md-10">  
                  <input type="text" class="form-control" id="edit_Oferta" onkeypress="return numlet(event)" placeholder="Añadir requisito" minlength="1">
                </div>
                <div class="form-group col-md-2">   
               <button type="button" id="setAddOferta" class="btn btn-success py-2 mr-1 float-right">Guardar</button> 
              </div>
            </div>

             <div id="editview_Oferta">
            </div>
        <label for="inputZip">Ubicación</label>
        <div class="form-row">
          <div class="form-group col-md-12">  
            <input type="text" class="form-control" id="editUbicacion" placeholder="" required>
          </div>
            
          <div id="edit_mapa"   style="height: 300px; width: 550px; align-content: center;  "> </div>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHihiG2sLePt8cB8u61qTRg_PRUGnROkA&callback=editar"></script>
            &nbsp;
        </form>

      </div>

      <!--Footer-->
      <div class="modal-footer flex-center">

        <button type="button" class="btn btn-outline-secondary waves-effect" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" id="guardar_cambios" >Guardar</button>
      </div>
      </div>
    </div>
    <!--/.Content-->
  </div>
</div>

<!--Modal Eliminar-->
<div class="modal fade" id="eliminarModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" >

    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel"> <span class="icon-trash"></span>  Eliminar</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ¿Realmente quieres eliminar este empleo?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn " data-dismiss="modal">Cancelar</button>
        <button type="button" id="eliminar_empleo" class="btn btn-danger">Eliminar</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="graficaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" >

    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">Estadística</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div id="grafica"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>



  <div class="modal fade" id="ModalError">
        <div class="modal-dialog">
          <div class="modal-content">
        
            <!-- Modal body -->
            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal">×</button>
              <span id="errorModal"> </span>
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
  <script src="<?=base_url() ?>static/js/scrollax.min.js"></script>
  <script src="<?=base_url() ?>static/js/google-map.js"></script>
  <script src="<?=base_url() ?>static/js/main.js"></script>
    
  </body>
</html>
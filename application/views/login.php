<!DOCTYPE html>
<html lang="en">
<head>
	<title>Wannajob</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

<!--================================================FIRESTORE==========================================-->	
	<script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-firestore.js"></script>
	<script src="<?=base_url() ?>static/js/login.js"></script>

<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="<?=base_url() ?>static/images/icons/favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="<?=base_url() ?>static/vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="<?=base_url() ?>static/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="<?=base_url() ?>static/fonts/iconic/css/material-design-iconic-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="<?=base_url() ?>static/vendor/animate/animate.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="<?=base_url() ?>static/vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="<?=base_url() ?>static/vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="<?=base_url() ?>static/vendor/select2/select2.min.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="<?=base_url() ?>static/vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="<?=base_url() ?>static/css/util.css">
	<link rel="stylesheet" type="text/css" href="<?=base_url() ?>static/css/main.css">
<!--===============================================================================================-->
</head>
<body>
	
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-t-85 p-b-20">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-70">
						WannaJob?
					</span>
					<span class="login100-form-avatar">
						<img src="<?=base_url() ?>static/images/login.png" alt="AVATAR">
					</span>

					<div class="wrap-input100 validate-input m-t-85 m-b-35">
						<span class="focus-input100" data-placeholder="Usuario:"></span><br>
						<input id="login-usuario" class="input100" type="email" name="username" required>
					</div>

					<div class="wrap-input100 validate-input m-b-50" >
						<span class="focus-input100" data-placeholder="Contraseña:"></span><br>
						<input id="login-password" class="input100" type="password" name="pass" required>
					</div>

					<div class="container-login100-form-btn">
						<button type="button"  class="login100-form-btn" onclick="login()">
							Iniciar sesión
						</button>
					</div>

					<ul class="login-more p-t-190">
						<li class="m-b-8">
							<span class="txt1">
							¿Aún no tienes cuenta? 
							</span>

							<a href="registro-empresa.php" class="txt2">
								Regístrate 
							</a>
						</li>
					</ul>
				</form>
			</div>
		</div>
	</div>

	<div id="dropDownSelect1"></div>


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
  
<!--===============================================================================================-->
	<script src="<?=base_url() ?>static/vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="<?=base_url() ?>static/vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script src="<?=base_url() ?>static/vendor/bootstrap/js/popper.js"></script>
	<script src="<?=base_url() ?>static/vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="<?=base_url() ?>static/vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="<?=base_url() ?>static/vendor/daterangepicker/moment.min.js"></script>
	<script src="<?=base_url() ?>static/vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
	<script src="<?=base_url() ?>static/vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
	<script src="<?=base_url() ?>static/js/main.js"></script>

</body>
</html>
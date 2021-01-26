firebase.initializeApp({
    apiKey: "AIzaSyBzfZApgbhTDSaE3RBDuLzdVCvGecwmrkk",
    authDomain: "pruebas-fa7ee.firebaseapp.com",
    projectId: "pruebas-fa7ee"
  });

var db = firebase.firestore();

var base_url = 'http://dtai.uteq.edu.mx/~ramseb188/wannajob/';

function login(){

    var usuario = document.getElementById('login-usuario').value;
    var password = document.getElementById('login-password').value;


    if(usuario.length > 0 && password.length > 0){
    if(usuario.includes('@')){
        var login = db.collection("Usuario").where('correo', '==', `${usuario}`).where('contrasena','==',`${password}`).where('status','==',1).get().then(
            function(querySnapshot) {
                if(querySnapshot.empty){
                    $("#ModalError").modal("show");
            
	            	$("#errorModal").html("Usuario o contraseña incorrectos "); 
    
                }
                querySnapshot.forEach(function(doc) {
    
                    sessionStorage.setItem("id", doc.id);
                    sessionStorage.setItem("correo", doc.data().correo);
    
                    var tipo = doc.data().tipo;
    
    
                    if(tipo == 1){
                        window.location.replace(`${base_url}index.php/empresa`);

                        sessionStorage.setItem('foto', doc.data().info.foto);
                        sessionStorage.setItem('nombre', doc.data().info.nombre);
                        sessionStorage.setItem('tipo', tipo);
    
                        
                    }else if(tipo == 0){
                        window.location.replace(`${base_url}index.php/empleado`);
                        sessionStorage.setItem('foto', doc.data().info.imagen);
                    sessionStorage.setItem('nombre', doc.data().info.nombre);
                    sessionStorage.setItem('tipo', tipo);
    
                    }
                });
                
            })
            .catch(function(error) {
                alert("Error " + error);
                
            });
    
        }else{
            
            $("#ModalError").modal("show");
            
	      	$("#errorModal").html("Correo inválido");

        }

    }else {
        $("#ModalError").modal("show");
        
          $("#errorModal").html("Ingresar usuario y contraseña ");
    }
    
  
}
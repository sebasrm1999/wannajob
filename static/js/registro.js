// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBzfZApgbhTDSaE3RBDuLzdVCvGecwmrkk",
    authDomain: "pruebas-fa7ee.firebaseapp.com",
    projectId: "pruebas-fa7ee"
  });
  
  var db = firebase.firestore();

  var base_url = 'http://dtai.uteq.edu.mx/~ramseb188/wannajob/';

    var nombreEmpleadoError = document.getElementById('nombre-error');
    var paisError = document.getElementById('pais-error');
    var estadoError = document.getElementById('estado-error');
    var ciudadError = document.getElementById('ciudad-error');
    var cpError = document.getElementById('cp-error');
    var emailEmpleadoError = document.getElementById('email-error');
    var passwordEmpleadoError = document.getElementById('password-error');
    var password2EmpleadoError = document.getElementById('password2-error');

    var nombreEmpresaError = document.getElementById('nombre-empresa-error');
    var descError = document.getElementById('desc-error');
    var telefonoError = document.getElementById('telefono-error');
    var emailEmpresaError = document.getElementById('email-empresa-error');
    var passwordEmpresaError = document.getElementById('password-empresa-error');
    var password2EmpresaError = document.getElementById('password2-empresa-error');

  function registroEmpleado(){
      var nombre = document.getElementById('nombre-empleado').value;
      var foto = document.getElementById('logo-empleado').files[0];
      var foto_uri = document.getElementById('logo-empleado').value;
      var pais = document.getElementById('pais-empleado').value;
      var estado = document.getElementById('estado-empleado').value;
      var ciudad = document.getElementById('ciudad-empleado').value;
      var cp = document.getElementById('cp-empleado').value;
      var email = document.getElementById('email-empleado').value;
      var password = document.getElementById('password-empleado').value;
      var password2 = document.getElementById('password2-empleado').value;

      nombreEmpleadoError.innerHTML = '';
      paisError.innerHTML = '';
      estadoError.innerHTML = '';
      ciudadError.innerHTML = '';
      cpError.innerHTML = '';
      emailEmpleadoError.innerHTML = '';
      passwordEmpleadoError.innerHTML = '';
      password2EmpleadoError.innerHTML = '';

      var formData = new FormData();
        formData.append('matricula', '2018371107');
        formData.append('imagen', foto);

      if(nombre.length > 0 && foto_uri.length > 0  && pais.length > 0 && estado.length > 0 && ciudad.length > 0 && cp.length > 0 && email.length > 0 && password.length > 0 && password2.length > 0){
        if(validateEmail(email)){
            if(password.length >= 8){
                if(password == password2){
                    axios({
                        method: 'post',
                        url: `http://cidtai.uteq.edu.mx/dmm188/ejemplos/subir_imagen`,
                        headers: { 'Content-Type': 'multipart/form-data' },
                        data: formData,
                    }).then(json => {
                        console.log(json.data);
                        if (json.data.response_code === 200) {
                            var info_empleado = {
                                ciudad: ciudad,
                                cp: cp,
                                estado: estado,
                                imagen: `http://cidtai.uteq.edu.mx/dmm188/static/images/subidas_ejemplo/${json.data.response_data}`,
                                nombre: nombre,
                                pais: pais
                            };
                      
                            db.collection("Usuario").add({
                              contrasena: password,
                              correo: email,
                              info: info_empleado,
                              status: 1,
                              tipo: 0
                          })
                          .then(function(docRef) {
                              console.log("Document written with ID: ", docRef.id);
                              window.location.replace(`${base_url}index.php/login`);
                          })
                          .catch(function(error) {
                              console.error("Error adding document: ", error);
                          });
                        }
            
                        else {
                            alert(
                                `Error: ${json.data.response_data}`
                            );
                            console.log(json.data.response_data);
                        }
                    }).catch(e => {
                        alert(
                            `Error ${e}`
                        );
                        console.log(e);
                    });
                } else {
                    password2EmpleadoError.innerHTML = '<p class="text-danger">Las conraseñas no concuerdan</p>';
                }
            } else {
                passwordEmpleadoError.innerHTML = '<p class="text-danger">Ingrese una contraseña mayor a 8 caracteres</p>';    
            }
        } else {
            emailEmpleadoError.innerHTML = '<p class="text-danger">Ingrese un correo válido</p>';
        }
      } else {
        $('#info-modal-titulo').html('Campos vacíos');
        $('#info-modal-cuerpo').html('Debe llenar todos los campos');
          $('#alertaModal').modal('show');
      }
      
  }
  
  function registroEmpresa(){
    var nombre = document.getElementById('nombre-empresa').value;
    var foto = document.getElementById('logo-empresa').files[0];
    var foto_uri = document.getElementById('logo-empresa').value;
    var desc = document.getElementById('desc-empresa').value;
    var telefono = document.getElementById('telefono-empresa').value;
    var email = document.getElementById('email-empresa').value;
    var password = document.getElementById('password-empresa').value;
    var password2 = document.getElementById('password2-empresa').value;

    nombreEmpresaError.innerHTML = '';
      descError.innerHTML = '';
      telefonoError.innerHTML = '';
      emailEmpresaError.innerHTML = '';
      passwordEmpresaError.innerHTML = '';
      password2EmpresaError.innerHTML = '';

      // Buscamos el nombre de la imagen
      var filename = foto_uri.split('/').pop();
      // Inferimos el tipo de la imagen 
      var match = /\.(\w+)$/.exec(filename);
      var type = match ? `image/${match[1]}` : `image`;

      var formData = new FormData();
        formData.append('matricula', '2018371107');
        formData.append('imagen', foto);

      if(nombre.length > 0 && foto_uri.length > 0  && desc.length > 0 && telefono.length > 0 && email.length > 0 && password.length > 0 && password2.length > 0){
        if(validateEmail(email)){
            if(password.length >= 8){
                if(password == password2){
                    axios({
                        method: 'post',
                        url: `http://cidtai.uteq.edu.mx/dmm188/ejemplos/subir_imagen`,
                        headers: { 'Content-Type': 'multipart/form-data' },
                        data: formData,
                    }).then(json => {
                        console.log(json.data);
                        if (json.data.response_code === 200) {
                                var info_empresa = {
                                    descripcion: desc,
                                    foto: `http://cidtai.uteq.edu.mx/dmm188/static/images/subidas_ejemplo/${json.data.response_data}`,
                                    nombre: nombre,
                                    telefono: telefono
                                };
                            
                                db.collection("Usuario").add({
                                  contrasena: password,
                                  correo: email,
                                  info: info_empresa,
                                  status: 1,
                                  tipo: 1
                              })
                              .then(function(docRef) {
                                  console.log("Document written with ID: ", docRef.id);
                                  window.location.replace(`${base_url}index.php/login`);
                              })
                              .catch(function(error) {
                                  console.error("Error adding document: ", error);
                              });
                            }
                
                            else {
                                alert(
                                    `Error: ${json.data.response_data}`
                                );
                                console.log(json.data.response_data);
                            }
                    }).catch(e => {
                        alert(
                            `Error ${e}`
                        );
                        console.log(e);
                    });
                } else {
                    password2EmpresaError.innerHTML = '<p class="text-danger">Las conraseñas no concuerdan</p>';
                }
            } else {
                passwordEmpresaError.innerHTML = '<p class="text-danger">Ingrese una contraseña mayor a 8 caracteres</p>';    
            }
        } else {
            emailEmpresaError.innerHTML = '<p class="text-danger">Ingrese un correo válido</p>';
        }
      } else {
        $('#info-modal-titulo').html('Campos vacíos');
        $('#info-modal-cuerpo').html('Debe llenar todos los campos');
          $('#alertaModal').modal('show');
      }

    
}

function repetidoEmpresa(){
    var email = document.getElementById('email-empresa').value;
    if(email.length > 0){
        db.collection("Usuario").where('correo', '==', `${email}`).get().then(function(querySnapshot){
            if(querySnapshot.empty){
                registroEmpresa();
                //alert('registro');
            }
            querySnapshot.forEach(function(doc){
                const status = (doc.data().status);
                console.log(doc.id);
    
                if(status == 1){     
                    alert('Cuenta ya existente, favor de ingresar otra cuenta de correo electrónico');
                }else if(status == 0){
                    $('#myModal').modal('show');
                    $( "#restaurar" ).click(function() {
                        restaurar(doc.id);
                      });
                }
            });
        })
        .catch(function(error){
            alert(`Error: ${error}`);
        });
    } else {
        console.log('vacio');
        $('#info-modal-titulo').html('Campos vacíos');
        $('#info-modal-cuerpo').html('Debe llenar todos los campos');
          $('#alertaModal').modal('show');
    }
}

function repetidoEmpleado(){
    var email = document.getElementById('email-empleado').value;
    if(email.length > 0){
        db.collection("Usuario").where('correo', '==', `${email}`).get().then(function(querySnapshot){
            if(querySnapshot.empty){
                registroEmpleado();
                //alert('registro');
            }
            querySnapshot.forEach(function(doc){
                const status = (doc.data().status);
                console.log(doc.id);
    
                if(status == 1){     
                    alert('Cuenta ya existente, favor de ingresar otra cuenta de correo electrónico');
                }else if(status == 0){
                    $('#myModal').modal('show');
                    $( "#restaurar" ).click(function() {
                        restaurar(doc.id);
                      });
                }
            });
        })
        .catch(function(error){
            alert(`Error: ${error}`);
        });
    } else {
        console.log('vacio');
        $('#info-modal-titulo').html('Campos vacíos');
        $('#info-modal-cuerpo').html('Debe llenar todos los campos');
          $('#alertaModal').modal('show');
    }
    
}

function restaurar(docID){
    const usuarioCollection = db.collection('Usuario');
    usuarioCollection.doc(`${docID}`).update({
        status : 1
    })
      .then(() => {
        window.location.replace(`${base_url}index.php`);
      })
      .catch((error) => {
          alert(`Error: ${error}`);
          console.log(error);
      });
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
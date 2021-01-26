// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBzfZApgbhTDSaE3RBDuLzdVCvGecwmrkk",
    authDomain: "pruebas-fa7ee.firebaseapp.com",
    projectId: "pruebas-fa7ee"
  });
  
  var db = firebase.firestore();

  var base_url = 'http://dtai.uteq.edu.mx/~ramseb188/wannajob/';

  var nombre = document.getElementById('nombre');
  var desc = document.getElementById('desc');
  var email = document.getElementById('email');
  var telefono = document.getElementById('telefono');
  var logo = document.getElementById('logo');
  var nombreEditar = document.getElementById('editar-nombre');
  var descEditar = document.getElementById('editar-desc');
  var emailEditar = document.getElementById('editar-email');
  var telefonoEditar = document.getElementById('editar-telefono');
  var logoEditar = document.getElementById('editar-logo');
  var passwordEditar = document.getElementById('editar-password');
  var password2Editar = document.getElementById('editar-password2');
  var nuevaPassword = '';
  var viejaFoto = '';

  var nombreError = document.getElementById('nombre-error');
    var descError = document.getElementById('desc-error');
    var telefonoError = document.getElementById('telefono-error');
    var emailError = document.getElementById('email-error');
    var passwordError = document.getElementById('password-error');
    var password2Error = document.getElementById('password2-error');

  function get(){
    var miFoto = document.getElementById('miFoto');
    var foto = sessionStorage.getItem('foto');
    miFoto.src = foto;
    logo.src = foto;
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    var userEmail = sessionStorage.getItem('correo');
    usuarioCollection.doc(`${userID}`)
    .onSnapshot(function(doc){
        email.innerHTML = userEmail;
        nombre.innerHTML = doc.data().info.nombre;
        desc.innerHTML = doc.data().info.descripcion;
        telefono.innerHTML = doc.data().info.telefono;

        nombreEditar.value = doc.data().info.nombre;
        descEditar.value = doc.data().info.descripcion;
        telefonoEditar.value = doc.data().info.telefono;
        emailEditar.value = userEmail;

        nuevaPassword = doc.data().contrasena;
        viejaFoto = doc.data().info.foto;
    });
  }

  window.onload = function(){
    var userTipo = sessionStorage.getItem('tipo');
    if(userTipo == 1 || userTipo == '1'){
      this.get();
    } else {
      sessionStorage.clear();
      window.location.replace(`${base_url}index.php/login`);
    }
  };

  function cambiaContra(){
    nuevaPassword = passwordEditar.value;
    console.log(nuevaPassword);
  }

  function repetido(){
    var userID = sessionStorage.getItem('id');
    if(emailEditar.value.length > 0){
        db.collection("Usuario").where('correo', '==', `${emailEditar.value}`).get().then(function(querySnapshot){
            if(querySnapshot.empty){
                editar();
                //alert('registro');
            }
            querySnapshot.forEach(function(doc){
              if(doc.id == `${userID}`){
                editar();
              } else
              {
                $('#info-modal-titulo').html('Correo ya usado');
              $('#info-modal-cuerpo').html('Favor de ingresar otro correo electrónico');
                $('#alertaModal').modal('show');
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

  function editar(){
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');

    nombreError.innerHTML = '';
      descError.innerHTML = '';
      telefonoError.innerHTML = '';
      emailError.innerHTML = '';
      passwordError.innerHTML = '';
      password2Error.innerHTML = '';

      if(nombreEditar.value.length > 0  && descEditar.value.length > 0 && telefonoEditar.value.length > 0 && emailEditar.value.length > 0){
        if(validateEmail(emailEditar.value)){
            if(nuevaPassword.length >= 8){
                if(passwordEditar.value == password2Editar.value){
                    var info_empresa = {
                      descripcion: descEditar.value,
                      foto: viejaFoto,
                      nombre: nombreEditar.value,
                      telefono: telefonoEditar.value
                  };
                  usuarioCollection.doc(`${userID}`)
                  .update({
                      contrasena: nuevaPassword,
                      correo: emailEditar.value,
                      info: info_empresa
                  })
                  .then(function(docRef) {
                    sessionStorage.setItem("correo", emailEditar.value);
                    sessionStorage.setItem('nombre', nombreEditar.value);
                    $('#info-modal-titulo').html('Datos actualizados!');
                    $('#info-modal-cuerpo').html('Datos actualizados exitosamente');
                      $('#alertaModal').modal('show');
                  })
                  .catch(function(error){
                      alert(error);
                  });
                } else {
                    password2Error.innerHTML = '<p class="text-danger">Las conraseñas no concuerdan</p>';
                }
            } else {
                passwordError.innerHTML = '<p class="text-danger">Ingrese una contraseña mayor a 8 caracteres</p>';    
            }
        } else {
            emailError.innerHTML = '<p class="text-danger">Ingrese un correo válido</p>';
        }
      } else {
        $('#info-modal-titulo').html('Campos vacíos');
        $('#info-modal-cuerpo').html('Debe llenar todos los campos');
          $('#alertaModal').modal('show');
      }
  }

  function cerrar(){
    sessionStorage.clear();
    window.location.replace(`${base_url}index.php`);
  }

  function baja(){
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        status : 0
    })
    .then(function(docRef) {
        console.log('Documento eliminado con éxito');
        sessionStorage.clear();
        window.location.replace(`${base_url}index.php`);
    })
    .catch(function(error){
        alert(error);
    });
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function cambiarFoto(){
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    var imagen = logoEditar.files[0];
    if(logoEditar.value.length > 0){
      var formData = new FormData();
        formData.append('matricula', '2018371107');
        formData.append('imagen', imagen);
        axios({
          method: 'post',
          url: `http://cidtai.uteq.edu.mx/dmm188/ejemplos/subir_imagen`,
          headers: { 'Content-Type': 'multipart/form-data' },
          data: formData,
      }).then(json => {
          if (json.data.response_code === 200) {
            viejaFoto = `http://cidtai.uteq.edu.mx/dmm188/static/images/subidas_ejemplo/${json.data.response_data}`;
            var info_empresa = {
              descripcion: descEditar.value,
              foto: viejaFoto,
              nombre: nombreEditar.value,
              telefono: telefonoEditar.value
          };
          usuarioCollection.doc(`${userID}`)
                  .update({
                      info: info_empresa
                  })
                  .then(function(docRef) {
                    sessionStorage.setItem('foto', viejaFoto);
                    $('#info-modal-titulo').html('Imagen actualizada!');
                    $('#info-modal-cuerpo').html('Imagen actualizada exitosamente');
                      $('#alertaModal').modal('show');
                  })
                  .catch(function(error){
                      alert(error);
                  });
                  window.setTimeout(function(){
                    location.reload();
                  }, 1000);
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
      $('#info-modal-titulo').html('Sin imagen nueva');
      $('#info-modal-cuerpo').html('Inserte una nueva imagen para cambiarla');
        $('#alertaModal').modal('show');
    }
  }
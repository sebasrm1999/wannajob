// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBzfZApgbhTDSaE3RBDuLzdVCvGecwmrkk",
    authDomain: "pruebas-fa7ee.firebaseapp.com",
    projectId: "pruebas-fa7ee"
  });
  
  var db = firebase.firestore();

  var base_url = 'http://dtai.uteq.edu.mx/~ramseb188/wannajob/';

  var nombre = document.getElementById('nombre');
  var pais = document.getElementById('pais');
  var email = document.getElementById('email');
  var estado = document.getElementById('estado');
  var ciudad = document.getElementById('ciudad');
  var logo = document.getElementById('logo');
  var nombreEditar = document.getElementById('editar-nombre');
  var paisEditar = document.getElementById('editar-pais');
  var emailEditar = document.getElementById('editar-email');
  var estadoEditar = document.getElementById('editar-estado');
  var ciudadEditar = document.getElementById('editar-ciudad');
  var cpEditar = document.getElementById('editar-cp');
  var logoEditar = document.getElementById('editar-logo');
  var passwordEditar = document.getElementById('editar-password');
  var password2Editar = document.getElementById('editar-password2');
  var nuevaPassword = '';
  var viejaFoto = '';

  var nombreError = document.getElementById('nombre-error');
    var paisError = document.getElementById('pais-error');
    var estadoError = document.getElementById('estado-error');
    var ciudadError = document.getElementById('ciudad-error');
    var cpError = document.getElementById('cp-error');
    var emailError = document.getElementById('email-error');
    var passwordError = document.getElementById('password-error');
    var password2Error = document.getElementById('password2-error');

    //Mostrar info CV
  var nombrecv = document.getElementById('nombrecv');
  var telefonocv = document.getElementById('telefonocv');
  var emailcv = document.getElementById('emailcv');
  var escolaridadcv = document.getElementById('escolaridadcv');
  var experienciacv = document.getElementById('experienciacv');
  var habilidadescv = document.getElementById('habilidadescv');
  var interesescv = document.getElementById('interesescv');
  var logroscv = document.getElementById('logroscv');
  var direccioncv = document.getElementById('direccioncv');

  //Agregar info CV
  var direccionAdd = document.getElementById('direccionAdd');
  var escolaridadAdd = document.getElementById('escolaridadAdd');
  var experienciaAdd = document.getElementById('experienciaAdd');
  var habilidadesAdd = document.getElementById('habilidadesAdd');
  var interesesAdd = document.getElementById('interesesAdd');
  var logrosAdd = document.getElementById('logrosAdd');
  var telefonoAdd = document.getElementById('telefonoAdd');

  //Modal CV para empresas
  var modaltitulo = document.getElementById('modaltitulo');
  var direccionemp = document.getElementById('direccionemp');
  var telefonoemp = document.getElementById('telefonoemp');
  var correoemp = document.getElementById('correoemp');
  var escolaridademp = document.getElementById('escolaridademp');
  var experienciaemp = document.getElementById('experienciaemp');
  var interesesemp = document.getElementById('interesesemp');
  var logrosemp = document.getElementById('logrosemp');
  var habilidadesemp = document.getElementById('habilidadesemp');

  //Editar CV
  var telefonoEdit = document.getElementById('telefonoEdit');

  var escolaridad = [];
  var experiencia = [];
  var habilidades = [];
  var intereses = [];
  var logros = [];
  var telefono = [];
  var direccion = [];

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
        pais.innerHTML = doc.data().info.pais;
        estado.innerHTML = doc.data().info.estado;
        ciudad.innerHTML = doc.data().info.ciudad;

        nombreEditar.value = doc.data().info.nombre;
        paisEditar.value = doc.data().info.pais;
        estadoEditar.value = doc.data().info.estado;
        ciudadEditar.value = doc.data().info.ciudad;
        cpEditar.value = doc.data().info.cp;
        emailEditar.value = userEmail;

        nuevaPassword = doc.data().contrasena;
        viejaFoto = doc.data().info.imagen;

        habilidadesemp.innerHTML = '';
       logrosemp.innerHTML = '';
       interesesemp.innerHTML = '';
       experienciaemp.innerHTML = ''; 
       escolaridademp.innerHTML = '';
       correoemp.innerHTML = '';
       telefonoemp.innerHTML = '';
       direccionemp.innerHTML = '';
       modaltitulo.innerHTML = ''; 
       telefonocv.innerHTML = '';
       escolaridadcv.innerHTML = '';
       habilidadescv.innerHTML = '';
       interesescv.innerHTML = '';
       logroscv.innerHTML = '';
       direccioncv.innerHTML = '';
       experienciacv.innerHTML = ''; 



       correoemp.innerHTML = `<p style="color: black; font-size: 10;">- Correo: ${doc.data().correo}</p>`
       direccionemp.innerHTML = `<p style="color: black; font-size: 10;">- Direccion: ${doc.data().cv.direccion}</p>`
       telefonoemp.innerHTML = `<p style="color: black; font-size: 10;">- Movil: ${doc.data().cv.telefono}</p>`
       modaltitulo.innerHTML = `<p style="color: black; font-size: 10;"><strong>Curriculum de ${doc.data().info.nombre}</strong></p>`
       doc.data().cv.escolaridad.forEach(doc => {
        escolaridademp.innerHTML += `<p style="color: black; font-size: 10;">- ${doc}</p>`
       })
       doc.data().cv.experiencia.forEach(doc => {
        experienciaemp.innerHTML += `<p style="color: black; font-size: 10;">- ${doc}</p>`
       })
       doc.data().cv.intereses.forEach(doc => {
        interesesemp.innerHTML += `<p style="color: black; font-size: 10;">- ${doc}</p>`
       })
       doc.data().cv.logros.forEach(doc => {
        logrosemp.innerHTML += `<p style="color: black;font-size: 10;">- ${doc}</p>`
       })
       doc.data().cv.habilidades.forEach(doc => {
        habilidadesemp.innerHTML += `<p style="color: black;font-size: 10;">- ${doc}</p>`
       })



       nombrecv.innerHTML = doc.data().info.nombre;
       emailcv.innerHTML = doc.data().correo;
       doc.data().cv.telefono.forEach((hola, index) => {
        telefonocv.innerHTML += 
        `
        <div class="row">
            <div class="col-md-8">
            <input id="telefonocv${index}"class='form-control' onkeypress="return solonumeros(event)" maxlength="10" value='${hola}'>
            </div>
        <div class="col-md-auto">
        <button class="btn btn-warning btn-lg" onclick="editTelefono(${index})">Editar</button>
        </div>
            <div class="col-md-auto">
            <button class="btn btn-danger btn-lg" onclick="eliminarTelefono(${index})">Eliminar</button>
            </div>
        </div><br/>
        `;
        })
       doc.data().cv.escolaridad.forEach((hola, index) => {
        escolaridadcv.innerHTML +=  
        `
        <div class="row">
            <div class="col-md-8">
            <input id="escolaridadcv${index}"class='form-control' type='text' value='${hola}'>
            </div>
        <div class="col-md-auto">
        <button class="btn btn-warning btn-lg" onclick="editEscolaridad(${index})">Editar</button>
        </div>
            <div class="col-md-auto">
            <button class="btn btn-danger btn-lg" onclick="eliminarEscolaridad(${index})">Eliminar</button>
            </div>
        </div><br/>
        `
        ;
        })
       doc.data().cv.experiencia.forEach((hola, index) => {
           experienciacv.innerHTML +=  
           `
           <div class="row">
            <div class="col-md-8">
            <input id="experienciacv${index}"class='form-control' type='text' value='${hola}'>
            </div>
        <div class="col-md-auto">
        <button class="btn btn-warning btn-lg" onclick="editExperiencia(${index})">Editar</button>
        </div>
            <div class="col-md-auto">
            <button class="btn btn-danger btn-lg" onclick="eliminarExperiencia(${index})">Eliminar</button>
            </div>
        </div><br/>
           `
           ;
       })
       doc.data().cv.habilidades.forEach((hola, index) => {
        habilidadescv.innerHTML +=   
        `
        <div class="row">
            <div class="col-md-8">
            <input id="habilidadescv${index}"class='form-control' type='text' value='${hola}'>
            </div>
        <div class="col-md-auto">
        <button class="btn btn-warning btn-lg" onclick="editHabilidades(${index})">Editar</button>
        </div>
            <div class="col-md-auto">
            <button class="btn btn-danger btn-lg" onclick="eliminarHabilidades(${index})">Eliminar</button>
            </div>
        </div><br/>
        `
        ;
        })
        doc.data().cv.intereses.forEach((hola, index) => {
        interesescv.innerHTML +=   
        `
        <div class="row">
        <div class="col-md-8">
        <input id="interesescv${index}"class='form-control' type='text' value='${hola}'>
        </div>
        <div class="col-md-auto">
        <button class="btn btn-warning btn-lg" onclick="editIntereses(${index})">Editar</button>
        </div>
            <div class="col-md-auto">
            <button class="btn btn-danger btn-lg" onclick="eliminarIntereses(${index})">Eliminar</button>
            </div>
        </div><br/>
        `
        ;
        })
        doc.data().cv.logros.forEach((hola, index) => {
        logroscv.innerHTML +=  
        `
        <div class="row">
            <div class="col-md-8">
            <input id="logroscv${index}"class='form-control' type='text' value='${hola}'>
            </div>
        <div class="col-md-auto">
        <button class="btn btn-warning btn-lg" onclick="editLogros(${index})">Editar</button>
        </div>
            <div class="col-md-auto">
            <button class="btn btn-danger btn-lg" onclick="eliminarLogros(${index})">Eliminar</button>
            </div>
        </div><br/>
        `
        ;
        }) 
        doc.data().cv.direccion.forEach((hola, index) => {
        direccioncv.innerHTML +=  
        `
        <div class="row">
            <div class="col-md-8">
            <input id="direccioncv${index}"class='form-control' type='text' value='${hola}'>
            </div>
        <div class="col-md-auto">
        <button class="btn btn-warning btn-lg" onclick="editDireccion(${index})">Editar</button>
        </div>
            <div class="col-md-auto">
            <button class="btn btn-danger btn-lg" onclick="eliminarDireccion(${index})">Eliminar</button>
            </div>
        </div><br/>
        `
        ;
        })


        escolaridad = doc.data().cv.escolaridad;
        experiencia = doc.data().cv.experiencia;
        habilidades = doc.data().cv.habilidades;
        logros = doc.data().cv.logros;
        intereses = doc.data().cv.intereses;
        direccion = doc.data().cv.direccion;
        telefono = doc.data().cv.telefono;
    });
  }

  window.onload = function(){
    var userTipo = sessionStorage.getItem('tipo');
    if(userTipo == 0 || userTipo == '0'){
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
      paisError.innerHTML = '';
      estadoError.innerHTML = '';
      ciudadError.innerHTML = '';
      cpError.innerHTML = '';
      emailError.innerHTML = '';
      passwordError.innerHTML = '';
      password2Error.innerHTML = '';

      if(nombreEditar.value.length > 0  && paisEditar.value.length > 0 && estadoEditar.value.length > 0 && ciudadEditar.value.length > 0 && cpEditar.value.length > 0 && emailEditar.value.length > 0){
        if(validateEmail(emailEditar.value)){
            if(nuevaPassword.length >= 8){
                if(passwordEditar.value == password2Editar.value){
                  var info_empleado = {
                    ciudad: ciudadEditar.value,
                    cp: cpEditar.value,
                    estado: estadoEditar.value,
                    imagen: viejaFoto,
                    nombre: nombreEditar.value,
                    pais: paisEditar.value
                };
                usuarioCollection.doc(`${userID}`)
                .update({
                    contrasena: nuevaPassword,
                    correo: emailEditar.value,
                    info: info_empleado
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

  ///AGREGAR///
  function agregarEscolaridad(){
    escolaridad = [...escolaridad, escolaridadAdd.value];
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro agregado con éxito");
    escolaridadAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function agregarExperiencia(){
    experiencia = [...experiencia, experienciaAdd.value];
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro agregado con éxito");
    experienciaAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function agregarHabilidades(){
    habilidades = [...habilidades, habilidadesAdd.value];
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro agregado con éxito");
    habilidadesAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function agregarLogros(){
    logros = [...logros, logrosAdd.value];
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro agregado con éxito");
    logrosAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function agregarIntereses(){
    intereses = [...intereses, interesesAdd.value];
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro agregado con éxito");
    interesesAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function agregarDireccion(){
    direccion = [direccionAdd.value];
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro actualizado con éxito");
    direccionAdd.value = ''})
    .catch(function(error){
        alert(error);
    });
  }

  function agregarTelefono(){
    telefono = [telefonoAdd.value];
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro actualizado con éxito");
    telefonoAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }


  ///ELIMINAR///
  function eliminarTelefono(index){
    telefono.splice(index,1)
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro eliminado con éxito");
    telefonoAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function eliminarEscolaridad(index){
    escolaridad.splice(index,1)
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {    
    window.alert("Registro eliminado con éxito");
    telefonoAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function eliminarHabilidades(index){
    habilidades.splice(index,1)
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro eliminado con éxito");
    telefonoAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function eliminarLogros(index){
    logros.splice(index,1)
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro eliminado con éxito");
    telefonoAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function eliminarIntereses(index){
    intereses.splice(index,1)
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro eliminado con éxito");
    telefonoAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function eliminarDireccion(index){
    direccion.splice(index,1)
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro eliminado con éxito");
    telefonoAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function eliminarExperiencia(index){
    experiencia.splice(index,1)
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro eliminado con éxito");
    telefonoAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  ///EDITAR///
  function editTelefono(index){
    var x = document.getElementById(`telefonocv${index}`).value;
    telefono = [x];
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro actualizado con éxito");
    telefonoAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function editEscolaridad(index){
    var x = document.getElementById(`escolaridadcv${index}`).value;
    escolaridad[index] = x;
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro actualizado con éxito");
    telefonoAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function editExperiencia(index){
    var x = document.getElementById(`experienciacv${index}`).value;
    experiencia[index] = x;
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro actualizado con éxito");
    telefonoAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function editHabilidades(index){
    var x = document.getElementById(`habilidadescv${index}`).value;
    habilidades[index] = x;
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro actualizado con éxito");
    telefonoAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function editLogros(index){
    var x = document.getElementById(`logroscv${index}`).value;
    logros[index] = x;
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro actualizado con éxito");
    telefonoAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function editIntereses(index){
    var x = document.getElementById(`interesescv${index}`).value;
    intereses[index] = x;
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro actualizado con éxito");
    telefonoAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function editDireccion(index){
    var x = document.getElementById(`direccioncv${index}`).value;
    direccion[index] = x;
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    usuarioCollection.doc(`${userID}`)
    .update({
        cv : {
            escolaridad : escolaridad,
            experiencia : experiencia,
            habilidades : habilidades,
            logros : logros,
            intereses : intereses,
            direccion : direccion,
            telefono : telefono 
        }
    })
    .then(function(docRef) {
    window.alert("Registro actualizado con éxito");
    telefonoAdd.value = '';})
    .catch(function(error){
        alert(error);
    });
  }

  function sololetras(e){

    key=e.keyCode || e.which;

    teclado=String.fromCharCode(key).toLowerCase();

    letras="aábcdeéfghiíjklmnñoópqrstuvwxyz";

    especiales="8-37-38-46-164";

    teclado_especial=false;

    for(var i in especiales){
      if(key==especiales[i]){
        teclado_especial=true;break;
      }
    }

    if(letras.indexOf(teclado)==-1 && !teclado_especial){

      return false;

    }
  }

    function solonumeros(e){

    key=e.keyCode || e.which;

    teclado=String.fromCharCode(key).toLowerCase();

    letras="0123456789-";

    especiales="8-37-38-46-164";

    teclado_especial=false;

    for(var i in especiales){
      if(key==especiales[i]){
        teclado_especial=true;break;
      }
    }

    if(letras.indexOf(teclado)==-1 && !teclado_especial){

      return false;

    }
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
            var info_empleado = {
              ciudad: ciudadEditar.value,
              cp: cpEditar.value,
              estado: estadoEditar.value,
              imagen: viejaFoto,
              nombre: nombreEditar.value,
              pais: paisEditar.value
          };
          usuarioCollection.doc(`${userID}`)
                  .update({
                      info: info_empleado
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

  function cerrar(){
    sessionStorage.clear();
    window.location.replace(`${base_url}index.php`);
  }
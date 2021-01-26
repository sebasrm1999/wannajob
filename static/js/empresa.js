// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBzfZApgbhTDSaE3RBDuLzdVCvGecwmrkk",
    authDomain: "pruebas-fa7ee.firebaseapp.com",
    projectId: "pruebas-fa7ee"
  });
  
  var db = firebase.firestore();

  var base_url = 'http://dtai.uteq.edu.mx/~ramseb188/wannajob/';

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

  function get(){
    var miFoto = document.getElementById('miFoto');
    var foto = sessionStorage.getItem('foto');
    miFoto.src = foto;
      var vacantes = document.getElementById('vacantes');
    const empleosCollection = db.collection('Empleos');
    var userID = sessionStorage.getItem('id');
    var userEmail = sessionStorage.getItem('correo');
    empleosCollection.where('id_empresa','==',`${userID}`)
    .where('status','==',1)
    .onSnapshot(function(querySnapshot){
        //$('#vacantes').html('');
        vacantes.innerHTML = '';
        querySnapshot.forEach(function(doc){
            var conteo = 0;
            empleosCollection.doc(`${doc.id}`).collection('solicitudes').get().
            then(function(conteoSnapshot){
                conteoSnapshot.forEach(function(){
                  conteo += 1;
                });
            })
            .catch(function(error){
              alert(`Error: ${error}`);
            });
            vacantes.innerHTML += `
            <div class="col-md-12">

            <div class="job-post-item bg-white p-4 d-block d-md-flex align-items-center">

              <div class="mb-4 mb-md-0 mr-5">
                <div class="job-post-item-header d-flex align-items-center">
                  <h2 class="mr-3 text-black h3">${doc.data().vacante}</h2>
                  <div class="badge-wrap">
                   <span class="bg-primary text-white badge py-2 px-3">${conteo}</span>
                  </div>
                </div>
                <div class="job-post-item-body d-block d-md-flex">
                  <div class="mr-3"><i class="fas fa-clock" style="padding-right: 5px;"></i>${doc.data().tiempo}</div>
                  <div><span class="icon-my_location"></span> <span>${doc.data().ubicacion}</span></div>
                </div>
              </div>

              <div class="ml-auto d-flex">
                <button class="btn btn-primary py-2 mr-1" onclick="solicitudes('${doc.id}','${doc.data().vacante}')"  data-toggle="modal" data-target="#modal-soli">Revisar solicitud</button>
                <a href="#" class="btn btn-secondary rounded-circle btn-favorite d-flex align-items-center icon">
                	<span class="icon-heart"></span>
                </a>
              </div>
            </div>
          </div>
            `;
        });
    });
  }

  function solicitudes(empleoID, empleoNombre){
    var userID = sessionStorage.getItem('id');
    var solicitudes = document.getElementById('solicitudes');
    var vacante = document.getElementById('vacante');
    const empleosCollection = db.collection('Empleos');
    empleosCollection.doc(`${empleoID}`)
    .get()
    .then(function(doc){
        vacante.innerHTML = doc.data().vacante;
    })
    .catch(function(error){
        alert(`Error: ${error}`);
    });
    const solisCollection = empleosCollection.doc(`${empleoID}`).collection('solicitudes');
    solisCollection
    .onSnapshot(function(querySnapshot){
      console.log(querySnapshot);
      var contador = 0;
        solicitudes.innerHTML = '';
        querySnapshot.forEach(function(doc){
            var activo = '';
            if(contador === 0){
              activo = 'active';
            } else {
              activo = '';
            }
            solicitudes.innerHTML += `
            <div class="carousel-item ${activo}">
                <div class="col d-flex justify-content-center mb-3">
                        <span class="bg-info text-white p-1" style="font-size: 30px;">${doc.data().info_solicitante.nombre}</span>  
                      </div>
                    <img src="${doc.data().info_solicitante.imagen}" class="mx-auto d-block mt-3 rounded-circle" style="height: 200px; width: 200px;" alt="">
                    <div class="row justify-content-center mt-3">
                      <button class="btn btn-light mx-auto text-info" onclick="cv('${doc.data().idsolicitante}')"><i class="fas fa-file-alt" style="padding-right: 5px;"></i>Ver Currículum</button>
                      <button class="btn btn-light mx-auto text-info" onclick="chat('${doc.data().idsolicitante}', '${doc.data().info_solicitante.nombre}', '${empleoID}', '${empleoNombre}')"><i class="fas fa-comments" style="padding-right: 5px;"></i>Enviar Mensaje</button>
                    </div>
                    <div class="row justify-content-center mt-3">
                      <button class="btn btn-danger mx-auto text-white" onclick="borrar('${doc.id}','${empleoID}','${doc.data().idsolicitante}')"><i class="fas fa-trash" style="padding-right: 5px;"></i>Eliminar Solicitud</button>  
                    </div>
                    
                  </div>
            `;
            contador++;
        });
    });
  }

  function cv(userID){
    $('#modal-soli').modal('hide');
    $('#exampleModal').modal('show');
    const usuarioCollection = db.collection('Usuario');
    usuarioCollection.doc(`${userID}`)
    .onSnapshot(function(doc){
      habilidadesemp.innerHTML = '';
       logrosemp.innerHTML = '';
       interesesemp.innerHTML = '';
       experienciaemp.innerHTML = ''; 
       escolaridademp.innerHTML = '';
       correoemp.innerHTML = '';
       telefonoemp.innerHTML = '';
       direccionemp.innerHTML = '';

       correoemp.innerHTML = `<p style="color: black; font-size: 10;">- Correo: ${doc.data().correo}</p>`
       direccionemp.innerHTML = `<p style="color: black; font-size: 10;">- Direccion: ${doc.data().cv.direccion}</p>`
       telefonoemp.innerHTML = `<p style="color: black; font-size: 10;">- Movil: ${doc.data().cv.telefono}</p>`
       modaltitulo.innerHTML = `<p style="color: black; font-size: 10;"><strong>Curriculum de ${doc.data().info.nombre}</strong></p>`
       doc.data().cv.escolaridad.forEach(doc => {
        escolaridademp.innerHTML += `<p style="color: black; font-size: 10;">- ${doc}</p>`
       });
       doc.data().cv.experiencia.forEach(doc => {
        experienciaemp.innerHTML += `<p style="color: black; font-size: 10;">- ${doc}</p>`
       });
       doc.data().cv.intereses.forEach(doc => {
        interesesemp.innerHTML += `<p style="color: black; font-size: 10;">- ${doc}</p>`
       });
       doc.data().cv.logros.forEach(doc => {
        logrosemp.innerHTML += `<p style="color: black;font-size: 10;">- ${doc}</p>`
       });
       doc.data().cv.habilidades.forEach(doc => {
        habilidadesemp.innerHTML += `<p style="color: black;font-size: 10;">- ${doc}</p>`
       });
    });
  }

  function chat(idEmpleado, nombreEmpleado, idEmpleo, nombreEmpleo){
    var userID = sessionStorage.getItem('id');
    var userNombre = sessionStorage.getItem('nombre');
    db.collection('Chat').add({
        id_empleado : idEmpleado,
        nombre_empleado : nombreEmpleado,
        id_empresa : userID,
        nombre_empresa : userNombre,
        id_empleo : idEmpleo,
        nombre_empleo : nombreEmpleo
    }).then(snap => {
        db.collection('Chat').doc(`${snap.id}`).collection('Chat').add({
            mensajes : []
        })
        .then(() => {
          window.location.replace(`${base_url}index.php/chatEmpresa`);
        })
        .catch(error => {
            alert(`Error ${error}`);
            console.log(error);
        });
    })
    .catch(error => {
        alert(`Error ${error}`);
        console.log(error);
    });
}

  function borrar(idSoli, idEmpleo, idUsuario){
    const empleosCollection = db.collection('Empleos');
    const solisCollection = empleosCollection.doc(`${idEmpleo}`).collection('solicitudes');
    const usuarioCollection = db.collection('Usuario');
    const usuSolisCollection = usuarioCollection.doc(`${idUsuario}`).collection('solicitudes');
    solisCollection.doc(`${idSoli}`).delete().then(function(){
        usuSolisCollection.where('idvacante','==',`${idEmpleo}`).get()
        .then(function(querySnapshot){
          querySnapshot.forEach(function(doc){
            doc.ref.delete();
            alert('Solicitud eliminada con éxito');
          });
          
        })
        .catch(function(error){
          alert(`Error : ${error}`);
          console.log(error);
        });
    })
    .catch(function(error){
        alert(`Error : ${error}`);
        console.log(error);
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
      
  }
  function cerrar(){
    sessionStorage.clear();
    window.location.replace(`${base_url}index.php`);
  }
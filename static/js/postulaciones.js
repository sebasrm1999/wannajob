// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBzfZApgbhTDSaE3RBDuLzdVCvGecwmrkk",
    authDomain: "pruebas-fa7ee.firebaseapp.com",
    projectId: "pruebas-fa7ee"
  });
  
  var db = firebase.firestore();

  var base_url = 'http://dtai.uteq.edu.mx/~ramseb188/wannajob/';

  var vacante = document.getElementById('vacante');
  var horario = document.getElementById('horario');
  var sueldo = document.getElementById('sueldo');
  var requisitos = document.getElementById('requisitos');
  var ofrecemos = document.getElementById('ofrecemos');
  var funciones = document.getElementById('funciones');
  var ubicacion = document.getElementById('ubicacion');

  var info_solicitante = '';
  var infovacante = '';

  function get(){
    var miFoto = document.getElementById('miFoto');
    var foto = sessionStorage.getItem('foto');
    miFoto.src = foto;
      var vacantes = document.getElementById('vacantes');
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    var userEmail = sessionStorage.getItem('correo');
    const usuSolisCollection = usuarioCollection.doc(`${userID}`).collection('solicitudes');
    usuSolisCollection.onSnapshot(function(querySnapshot){
        //$('#vacantes').html('');
        vacantes.innerHTML = '';
        querySnapshot.forEach(function(doc){
            /*
            $('#vacantes').append('<div class="col-md-12 ftco-animate"><div class="job-post-item bg-white p-4 d-block d-md-flex align-items-center">' +
            '<div class="mb-4 mb-md-0 mr-5"><div class="job-post-item-header d-flex align-items-center"><h2 class="mr-3 text-black h3">'+doc.data().vacante+'</h2>'+
            '<div class="badge-wrap"><span class="bg-primary text-white badge py-2 px-3">1</span></div></div><div class="job-post-item-body d-block d-md-flex">'+
            '<div class="mr-3"><i class="fas fa-clock" style="padding-right: 5px;"></i>'+doc.data().tiempo+'</div><div><span class="icon-my_location"></span> <span>'+doc.data().ubicacion+
            '</span></div></div></div><div class="ml-auto d-flex"><button class="btn btn-primary py-2 mr-1"  data-toggle="modal" data-target="#modal-soli">Revisar solicitud</button>'+
            '<a href="#" class="btn btn-secondary rounded-circle btn-favorite d-flex align-items-center icon"><span class="icon-heart"></span></a></div></div></div>');
            */
            vacantes.innerHTML += `
            <div class="col-md-12">

            <div class="job-post-item bg-white p-4 d-block d-md-flex align-items-center">

              <div class="mb-4 mb-md-0 mr-5">
                <div class="job-post-item-header d-flex align-items-center">
                  <h2 class="mr-3 text-black h3">${doc.data().infovacante.info.vacante}</h2>
                  <div class="badge-wrap">
                   <span class="bg-primary text-white badge py-2 px-3">${doc.data().infovacante.info.pago}</span>
                  </div>
                </div>
                <div class="job-post-item-body d-block d-md-flex">
                  <div class="mr-3"><i class="fas fa-clock" style="padding-right: 5px;"></i>${doc.data().infovacante.info.tiempo}</div>
                  <div><span class="icon-my_location"></span> <span>${doc.data().infovacante.info.ubicacion}</span></div>
                </div>
              </div>

              <div class="ml-auto d-flex">
                <button class="btn btn-primary py-2 mr-1" onclick="info('${doc.data().idvacante}')"  data-toggle="modal" data-target="#infoModal">Revisar vacante</button>
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

  window.onload = function(){
    var userTipo = sessionStorage.getItem('tipo');
    if(userTipo == 0 || userTipo == '0'){
      this.get();
    } else {
      sessionStorage.clear();
      window.location.replace(`${base_url}index.php/login`);
    }
  };

  function info(docID){
    const empleosCollection = db.collection('Empleos');
    empleosCollection.doc(`${docID}`)
    .onSnapshot(function(doc){
        vacante.innerHTML = doc.data().vacante;
        horario.innerHTML = `<span class="icon-clock-o" style="padding-right: 20px; font-size: 20px;"></span> ${doc.data().tiempo}`;
        sueldo.innerHTML = `<span class="icon-dollar" style="padding-right: 25px; font-size: 22px;"></span> ${doc.data().pago}`;
        requisitos.innerHTML = '';
        doc.data().requisitos.forEach(function(element){
            requisitos.innerHTML += `<p>- ${element}</p>`;
        });
        ofrecemos.innerHTML = '';
        doc.data().beneficios.forEach(function(element){
            requisitos.innerHTML += `<p>- ${element}</p>`;
        });
        funciones.innerHTML = '';
        doc.data().funciones.forEach(function(element){
            requisitos.innerHTML += `<p>- ${element}</p>`;
        });
        ubicacion.innerHTML = `<span class="icon-map" style="padding-right: 20px; font-size: 18px;"></span> ${doc.data().ubicacion}`;
        infovacante = {
            empresa : doc.data().info_empresa,
            info : doc.data()
        };
    });
  }

  function cerrar(){
    sessionStorage.clear();
    window.location.replace(`${base_url}index.php`);
  }
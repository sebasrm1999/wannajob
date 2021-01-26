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
    const empleosCollection = db.collection('Empleos');
    const usuarioCollection = db.collection('Usuario');
    var userID = sessionStorage.getItem('id');
    var userEmail = sessionStorage.getItem('correo');
    usuarioCollection.doc(`${userID}`)
    .onSnapshot(function(doc){
        info_solicitante = doc.data().info;
    });
    empleosCollection
    .where('status','==',1)
    .onSnapshot(function(querySnapshot){
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
                  <h2 class="mr-3 text-black h3">${doc.data().vacante}</h2>
                  <div class="badge-wrap">
                   <span class="bg-primary text-white badge py-2 px-3">${doc.data().pago}</span>
                  </div>
                </div>
                <div class="job-post-item-body d-block d-md-flex">
                  <div class="mr-3"><i class="fas fa-clock" style="padding-right: 5px;"></i>${doc.data().tiempo}</div>
                  <div><span class="icon-my_location"></span> <span>${doc.data().ubicacion}</span></div>
                </div>
              </div>

              <div class="ml-auto d-flex">
                <button class="btn btn-primary py-2 mr-1" onclick="info('${doc.id}')"  data-toggle="modal" data-target="#infoModal">Revisar vacante</button>
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

  function mapas(posMarcador){
    mapa = new google.maps.Map(
      document.getElementById('mapa_info'), {
          zoom:20,
          center: {
          lat: 20.65,
          lng: -100.5
          }
          
    });
  
  const geocoder = new google.maps.Geocoder();
  const address = posMarcador;
            geocoder.geocode(
                {
                  address: address
                },
                (results, status) => {
                  if (status === "OK") {
                    mapa.setCenter(results[0].geometry.location);
                    new google.maps.Marker({
                      map: mapa,
                      position: results[0].geometry.location
                    });
                  } else {
                  }
                }
            );

  }

  function info(docID){
    var posicion = '';
    const empleosCollection = db.collection('Empleos');
    empleosCollection.doc(`${docID}`)
    .onSnapshot(function(doc){
        vacante.innerHTML = doc.data().vacante;
        horario.innerHTML = `<span class="icon-clock-o" style="padding-right: 20px; font-size: 20px;"></span> ${doc.data().tiempo}`;
        sueldo.innerHTML = `<span class="icon-dollar" style="padding-right: 25px; font-size: 22px;"></span> ${doc.data().pago}`;
        posicion = doc.data().ubicacion;
        requisitos.innerHTML = '';
        ofrecemos.innerHTML = '';
        funciones.innerHTML = '';
        doc.data().requisitos.forEach(function(element){
            requisitos.innerHTML += `<p>- ${element}</p>`;
        });
        ofrecemos.innerHTML = '';
        doc.data().beneficios.forEach(function(element){
            ofrecemos.innerHTML += `<p>- ${element}</p>`;
        });
        funciones.innerHTML = '';
        doc.data().funciones.forEach(function(element){
            funciones.innerHTML += `<p>- ${element}</p>`;
        });
        ubicacion.innerHTML = `<span class="icon-map" style="padding-right: 20px; font-size: 18px;"></span> ${doc.data().ubicacion}`;
        infovacante = {
            empresa : doc.data().info_empresa,
            info : doc.data()
        };
        $( "#postular" ).click(function() {
            postular(docID);
          });
    });

    
    setTimeout(function(){mapas(posicion)},1000);

  }

  function postular(empleoID){
    var userID = sessionStorage.getItem('id');
    const empleosCollection = db.collection('Empleos');
    const usuarioCollection = db.collection('Usuario');
    const usuSolisCollection = usuarioCollection.doc(`${userID}`).collection('solicitudes');
    const solisCollection = empleosCollection.doc(`${empleoID}`).collection('solicitudes');
    usuSolisCollection
    .where('idvacante','==',`${empleoID}`)
    .get()
    .then(function(querySnapshot){
        if(querySnapshot.empty){
            usuSolisCollection.add({
                idvacante : empleoID,
                infovacante : infovacante,
                status : 1
            })
            .then(function(docRef){
                solisCollection.add({
                    idsolicitante: userID,
                    info_solicitante : info_solicitante
                })
                .then(function(decRef2){
                    alert('Solicitud realizada!');
                })
                .catch(function(error){
                    alert(`Error: ${error}`);
                });
            })
            .catch(function(error){
                alert(`Error: ${error}`);
            });
        } else {
            alert('Usted ya postuló para este empleo');
        }
    })
    .catch(function(error){
        alert(`Error: ${error}`);
    });
  }

  function cerrar(){
    sessionStorage.clear();
    window.location.replace(`${base_url}index.php`);
  }
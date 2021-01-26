firebase.initializeApp({
    apiKey: "AIzaSyBzfZApgbhTDSaE3RBDuLzdVCvGecwmrkk",
    authDomain: "pruebas-fa7ee.firebaseapp.com",
    projectId: "pruebas-fa7ee"
  });

var db = firebase.firestore();

var base_url = 'http://dtai.uteq.edu.mx/~ramseb188/wannajob/';

function get_empleo(){
  var miFoto = document.getElementById('miFoto');
    var foto = sessionStorage.getItem('foto');
    miFoto.src = foto;
  document.getElementById("empleos").innerHTML += "";
    var id = sessionStorage.getItem("id");
    db.collection('Empleos').where("id_empresa","==",`${id}`).where("status","==",1).onSnapshot(
        querySnapshot => {
              querySnapshot.forEach(doc => {
                      document.getElementById("empleos").innerHTML +='<div class="col-md-12">'
                      +' <div class="job-post-item bg-white p-4 d-block d-md-flex align-items-center">'+'<div class="mb-4 mb-md-0 mr-5">'+
                       ' <div class="job-post-item-header d-flex align-items-center">'+
                          '<h2 class="mr-3 text-black h3">'+`${doc.data().vacante} `+'</h2>'+
                         '<div class="badge-wrap">'+
                           '<span class="bg-primary text-white badge py-2 px-3" id="view_pago">'+`${doc.data().pago} `+'</span>'+
                          '</div>'+
                        '</div>'+
                        '<div class="job-post-item-body d-block d-md-flex">'+
                          '<div class="mr-3"><span class="icon-clock-o"></span> '+`${doc.data().tiempo} `+'.</div>'+
                          '<div><span class="icon-my_location"></span> <span>'+`${doc.data().ubicacion} `+'.</span></div>'+
                        '</div>'+
                      '</div>'+
                      '<div class="ml-auto d-flex">'+
                        '<button type="button" class="btn btn-danger py-2 mr-1" data-toggle="modal" data-target="#eliminarModal" onclick="eliminar('+`'${doc.id}'`+')">Eliminar</button>'+
                       '<button type="button" class="btn btn-primary py-2 mr-1" data-target="#edit_empleo"  data-toggle="modal" onclick="editar('+`'${doc.id}'`+')">Editar</a>'+
                      '</div>'+
                   '</div>'+
                  '</div>';
            })
        });
    
}

window.onload = function(){
  var userTipo = sessionStorage.getItem('tipo');
      if(userTipo == 1 || userTipo == '1'){
        this.get_empleo();
      } else {
        sessionStorage.clear();
        window.location.replace(`${base_url}index.php/login`);
      }
};


function registro_empleo(){
  var requisitos = [];
  var beneficios = [];
  var funciones = [];
  var id = sessionStorage.getItem("id");
  var foto =sessionStorage.getItem("foto");
  var nombre = sessionStorage.getItem("nombre");
  var vacante= document.getElementById('nom_empleo').value;
  var tiempo= document.getElementById('horario_empleo').value;
  var pago = document.getElementById('Pagode_empleo').value + " " + document.getElementById('Pago_empleo').value;
  var ubi = document.getElementById('ubicacion_empleo').value;
  var req = "";

    
    $("#guardar-req").click(function(){
      req = document.getElementById('addRequisito').value;
      if(req.length > 5){
        requisitos.push(req);
        document.getElementById('addRequisito').value ="";
        view_Req();

      }else{
        $("#ModalError").modal("show");
                  
        $("#errorModal").html("Este campo debe tener más caracteres");
      }
    });

    function view_Req(){
      document.getElementById("tusRequisitos").innerHTML = "";
      requisitos.map((req, index) => {
        document.getElementById("tusRequisitos").innerHTML += 
          ` <div class="form-row">
            <div class="form-group col-md-10">  
            <p type="text" class="form-control">${req}</p>
            </div>
            <div class="form-group col-md-2">   
          <button type="button" id="Btn-${index}" value=${index} class="btn btn-danger py-2 mr-1 float-right">Eliminar</button> 
          </div>
        </div>`
      })

      requisitos.map((req,index) => {
        $(`#Btn-${index}`).click(function(){
          requisitos = requisitos.filter((id,i) => i !== index);
          view_Req();
        });
    }) 
  }    

    $("#guardar-fun").click(function(){
      fun = document.getElementById('addFuncion').value;
      if(fun.length > 5){
        funciones.push(fun);
        document.getElementById('addFuncion').value = "";
        view_Fun();
        }else{
          
          $("#ModalError").modal("show");
                  
          $("#errorModal").html("Este campo debe tener más caracteres");
        }
    });

    function view_Fun(){
      document.getElementById("tusFunciones").innerHTML = "";
      funciones.map((fun, index) => {
        document.getElementById("tusFunciones").innerHTML += 
          ` <div class="form-row">
            <div class="form-group col-md-10">  
            <p type="text" class="form-control">${fun}</p>
            </div>
            <div class="form-group col-md-2">   
          <button type="button" id="BtnF-${index}" class="btn btn-danger py-2 mr-1 float-right">Eliminar</button> 
          </div>
        </div>`
      })
      funciones.map((fun,index) => {
        $(`#BtnF-${index}`).click(function(){
          funciones = funciones.filter((id,i) => i !== index);
          view_Fun();
        });
      }) 
    }
    
    $("#guardar-oferta").click(function(){
      ofe = document.getElementById('addOferta').value;
      if(ofe.length > 5){
        beneficios.push(ofe);
        document.getElementById('addOferta').value = "";
        view_oferta();

      }else{   
         $("#ModalError").modal("show");
                  
      $("#errorModal").html("Este campo debe tener más caracteres");

      }
       
    });

    function view_oferta(){
      document.getElementById("tusOfertas").innerHTML = "";
      beneficios.map((oferta, index) => {
        document.getElementById("tusOfertas").innerHTML += 
          ` <div class="form-row">
            <div class="form-group col-md-10">  
            <p type="text" class="form-control">${oferta}</p>
            </div>
            <div class="form-group col-md-2">   
          <button type="button" id="BtnO-${index}" class="btn btn-danger py-2 mr-1 float-right">Eliminar</button> 
          </div>
        </div>`
      })

      beneficios.map((oferta,index) => {
        $(`#BtnO-${index}`).click(function(){
          beneficios = beneficios.filter((id,i) => i !== index);
         view_oferta();
        });
      }) 
    }

    $("#guardar_empleo").click(function(){
      vac= document.getElementById('nom_empleo').value;
      tiem= document.getElementById('horario_empleo').value;
      pag = document.getElementById('Pagode_empleo').value + " " + document.getElementById('Pago_empleo').value;
      ubic = document.getElementById('ubicacion_empleo').value;
      requi = requisitos;
      func = funciones;
      bene = beneficios; 

      console.log(document.getElementById('nom_empleo').value);
      console.log(document.getElementById('horario_empleo').value);
      console.log(document.getElementById('Pagode_empleo').value);
      console.log(document.getElementById('ubicacion_empleo').value);

      if(vac.length > 0 && tiem.length > 0 &&pag.length > 0 && ubic.length > 0){

        if(requi.length > 0 && func.length > 0 && bene.length > 0){
          var agregar= db.collection("Empleos").add({
            id_empresa : id,
            vacante: vac,
            tiempo: tiem,
            pago: pag,
            requisitos: requisitos,
            funciones: funciones,
            beneficios: beneficios,
            ubicacion: ubic,
            info_empresa: {
                nombre: nombre,
                foto: foto
            },
            status: 1});
            window.setTimeout(function(){
              location.reload();
            }, 1000);

            if (agregar.empty) {
                alert(
                    'ERROR:No se pudo insertar'
                )
        }// end if
        

        } else

        $("#ModalError").modal("show");
                  
        $("#errorModal").html("Debes agregar como mínimo un requisito/oferta y función");

      } else
      $("#ModalError").modal("show");
              
      $("#errorModal").html("Favor de llenar todos los campos");

    });
}


function eliminar( idEmpleo ){

  
  $("#eliminar_empleo").click( function (){
    
    var empleo = db.collection("Empleos").doc(`${idEmpleo}`);

      return empleo.update({
            status: 0
      })
      .then(function() {
          console.log("Eliminado");
          location.reload();
      })
      .catch(function(error) {
        
          console.error("Error updating document: ", error);
      });
  });
}

function prueba(positionD){

  mapa = new google.maps.Map(
    document.getElementById('edit_mapa'), {
        zoom:12,
        center: {
        lat: 20.65,
        lng: -100.5
    }
        
});

const geocoder2 = new google.maps.Geocoder();
const address2 = positionD;
var marcador2;

          geocoder2.geocode(
              {
                address: address2
              },
              (results, status) => {
                if (status === "OK") {
                  mapa.setCenter(results[0].geometry.location);
                  marcador2 = new google.maps.Marker({
                    map: mapa,
                    position: results[0].geometry.location
                  });
                } else {
                }
              }
          );

          mapa.addListener("click", function (evento){
            document.getElementById("editUbicacion").disabled = false;
            
            marcador2.setPosition(evento.latLng);  
            window.setTimeout(function(){
              
                mapa.setCenter(evento.latLng); 
                mapa.setZoom(15); 
            },500)

                    geocoder2.geocode({
                        'location': evento.latLng
                        },function(results, status){
                            if(status === google.maps.GeocoderStatus.OK){
                                if(results[1]){
                                      
                                      document.getElementById('editUbicacion').value = results[1].formatted_address;
                                }
                            }
                    });
  })



//AGREGAR
    maps = new google.maps.Map(
      document.getElementById('mapa'), {
          zoom:12,
              center: {
              lat: 20.65,
              lng: -100.5
          }
    });

    if( navigator.geolocation){

      navigator.geolocation.getCurrentPosition(function(position){
          window.setTimeout(function (){
              maps.panTo({
                  lat:position.coords.latitude,
                  lng: position.coords.longitude
              });
          }, 2000);
              
      });

  }

  const geocoder = new google.maps.Geocoder();

  var marcador;

  maps.addListener("click", function (evento){
      document.getElementById("ubicacion_empleo").disabled = false;
      if(marcador == null){
      marcador = new google.maps.Marker({
          position: evento.latLng,
          map:maps,
      });
      
      window.setTimeout(function(){
        
          maps.setCenter(evento.latLng);  
      },500)
      maps.setZoom(20);

              geocoder.geocode({
                  'location': evento.latLng
                  },function(results, status){
                      if(status === google.maps.GeocoderStatus.OK){
                          if(results[1]){
                                
                                 document.getElementById('ubicacion_empleo').value = results[1].formatted_address;
                          }
                      }
              });

      }else{
          marcador.setPosition(evento.latLng);  
          window.setTimeout(function(){
        
          mapa.setCenter(evento.latLng);  
          },500)
          
      maps.setZoom(20);
          geocoder.geocode({
              'location': evento.latLng
              },function(results, status){
                  if(status === google.maps.GeocoderStatus.OK){
                      if(results[1]){
                          
                          document.getElementById('ubicacion_empleo').value = results[1].formatted_address;
                      }
                  }
          });
      }

});
}

function editar(idEmpleo){
  
  var setRequisitos = [];
  var setOferta = [];
  var setFunciones = [];
  var pos = "";
  document.getElementById("vacante_edit").innerHTML = '';
  document.getElementById("editFunciones").innerHTML = '';
  document.getElementById("editRequisitos").innerHTML = '';
  document.getElementById("edit_Oferta").innerHTML = '';
  document.getElementById("editUbicacion").innerHTML = '';

  var docRef = db.collection("Empleos").doc(`${idEmpleo}`);
        docRef.get().then(function(doc) {
          
	      	$("#titulo_edit").html(`${doc.data().vacante}`);
          document.getElementById('vacante_edit').value = doc.data().vacante;
          document.getElementById('tiempo_edit').value = doc.data().tiempo;
          document.getElementById('editUbicacion').value = doc.data().ubicacion;
          document.getElementById('Pago_edit').value = doc.data().pago;
          pos = doc.data().ubicacion,

          setRequisitos =  doc.data().requisitos;        
          view_Req();

          setFunciones =  doc.data().funciones;
          view_Fun();
 
          setOferta =  doc.data().beneficios;
          view_oferta();

}).catch(function(error) {
  console.log("Error getting document:", error);
});

setTimeout(function(){prueba(pos)},1000);

      //Agregar REQUISITO/FUNCION Y OFERTAS
      $("#setAddRequisito").click(function(){
        req = document.getElementById('edit_Requisito').value;
        if(req.length > 5){ 
          setRequisitos.push(req);
          document.getElementById('edit_Requisito').value = "";
          view_Req();

        }else{
          $("#ModalError").modal("show");
                  
          $("#errorModal").html("Este campo debe tener más caracteres");
          }
         
      });

      $("#setAddFucion").click(function(){
        fun = document.getElementById('edit_Funcion').value;
        if(fun.length >5){  setFunciones.push(fun);
          document.getElementById('edit_Funcion').value =""
          view_Fun();

        }else{
          $("#ModalError").modal("show");
                  
          $("#errorModal").html("Este campo debe tener más caracteres");
          }
        
      });

      $("#setAddOferta").click(function(){
        ofer = document.getElementById('edit_Oferta').value;
        if(ofer.length > 5){
          
          setOferta.push(ofer);
          document.getElementById('edit_Oferta').value = ""
          view_oferta();

        }else{
          $("#ModalError").modal("show");
                  
          $("#errorModal").html("Este campo debe tener más caracteres");
          }
      });

      //VISTAS REQUISITO/FUNCION Y OFERTAS

        function view_Req(){
          document.getElementById("editRequisitos").innerHTML = "";
          setRequisitos.map((req, index) => {
            document.getElementById("editRequisitos").innerHTML += 
              ` <div class="form-row">
                <div class="form-group col-md-10">  
                <p type="text" class="form-control">${req}</p>
                </div>
                <div class="form-group col-md-2">   
              <button type="button" id="setBtnR-${index}" value=${index} class="btn btn-danger py-2 mr-1 float-right">Eliminar</button> 
              </div>
            </div>`
          });

          setRequisitos.map((req,index) => {
            $(`#setBtnR-${index}`).click(function(){
              setRequisitos = setRequisitos.filter((id,i) => i !== index);
              view_Req();
            });
        }) 
      }  

      function view_Fun(){
        document.getElementById("editFunciones").innerHTML = "";
        setFunciones.map((fun, index) => {
          document.getElementById("editFunciones").innerHTML += 
            ` <div class="form-row">
              <div class="form-group col-md-10">  
              <p type="text" class="form-control">${fun}</p>
              </div>
              <div class="form-group col-md-2">   
            <button type="button" id="setBtnF-${index}" class="btn btn-danger py-2 mr-1 float-right">Eliminar</button> 
            </div>
          </div>`
        })
        setFunciones.map((fun,index) => {
          $(`#setBtnF-${index}`).click(function(){
            setFunciones = setFunciones.filter((id,i) => i !== index);
            view_Fun();
          });
        }) 
      }

      function view_oferta(){
      
        document.getElementById("editview_Oferta").innerHTML = "";
        setOferta.map((oferta, index) => {
          document.getElementById("editview_Oferta").innerHTML += 
            ` <div class="form-row">
              <div class="form-group col-md-10">  
              <p type="text" class="form-control">${oferta}</p>
              </div>
              <div class="form-group col-md-2">   
            <button type="button" id="setBtnO-${index}" class="btn btn-danger py-2 mr-1 float-right">Eliminar</button> 
            </div>
          </div>`
        })
  
        setOferta.map((oferta,index) => {
          $(`#setBtnO-${index}`).click(function(){
            setOferta = setOferta.filter((id,i) => i !== index);
           view_oferta();
          });
        }) 
      }

  /**MAPA */
  mapa = new google.maps.Map(
    document.getElementById('edit_mapa'), {
        zoom:12
        
});


  /**GUARDAR INFORMACION NUEVA */

  $("#guardar_cambios").click( function (){
    
  vac= document.getElementById('vacante_edit').value;
  tiem =document.getElementById('tiempo_edit').value;
  pag = document.getElementById('Pago_edit').value ;
  ubi = document.getElementById('editUbicacion').value;

        if( vac.length > 0 && tiem.length > 0 && pag.length > 0 && ubi.length > 0){
          if(setRequisitos.length > 0 && setFunciones.length > 0 && setOferta.length > 0){
            var empleo = db.collection("Empleos").doc(`${idEmpleo}`);

            return empleo.update({
              vacante: document.getElementById('vacante_edit').value ,
              tiempo: document.getElementById('tiempo_edit').value ,
              pago: document.getElementById('Pago_edit').value  ,
              requisitos: setRequisitos,
              funciones: setFunciones,
              beneficios: setOferta,
              ubicacion: document.getElementById('editUbicacion').value,
            })
            .then(function() {
                console.log("Editado");
                location.reload();
            })
            .catch(function(error) {
              
                console.error("Error updating document: ", error);
            });

          }else{
            $("#ModalError").modal("show");
                  
          $("#errorModal").html("Debes agregar como mínimo un requisito/oferta y función");
          }
          
        }else{
          $("#ModalError").modal("show");
                  
          $("#errorModal").html("Favor de llenar todos los campos");
         
        }
        
    });

}


/*****************VALIDACIONES ****************/

function sololetras(e){

  key=e.keyCode || e.which;

  teclado=String.fromCharCode(key).toLowerCase();

  letras="aábcdeéfghiíjklmnñoópqrstuvwxyz ";

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

  letras="0123456789- ";

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


function numlet(e){

  key=e.keyCode || e.which;

  teclado=String.fromCharCode(key).toLowerCase();

  letras="aábcdeéfghiíjklmnñoópqrstuvwxyz0123456789- ";

  especiales="8-37-38-46-164 ";

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

async function grafica(){
  var foto = sessionStorage.getItem('foto');
  var id = sessionStorage.getItem("id");
  var datos = [];
  db.collection('Empleos').where("id_empresa","==",`${id}`).where("status","==",1)
  .get()
  .then(async (querySnapshot)=> {
    
    await querySnapshot.forEach(async (doc) => {
      var dato = [];
      var contador = 0;
      dato.push(doc.data().vacante);
      await db.collection('Empleos').doc(`${doc.id}`).collection('solicitudes')
      .get()
      .then((snapshot) => {
        snapshot.forEach((document)=>{
          contador++;
        });
      })
      .catch((e) => {
        alert.alert('Error','Hubo un error inesperado');
        console.log(e);
      });
      await console.log(contador);
      await dato.push(contador);
      await console.log('dato');
      await console.log(dato);
      await datos.push(dato);
    });
    await setTimeout(function(){
      console.log('datos');
      console.log(datos);
      var serie = [datos];
      console.log('Serie');
      console.log(serie);
      Highcharts.chart('grafica', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Solicitudes por empleos'
        },
        subtitle: {
          text: 'Estadística de la cantidad de solicitudes por empleo publicado'
        },
        plotOptions: {
          series: {
            grouping: false,
            borderWidth: 0
          }
        },
        legend: {
          enabled: false
        },
        tooltip: {
          shared: true,
          headerFormat: '<span style="font-size: 15px">{point.point.name}</span><br/>',
          pointFormat: '<span style="color:{point.color}">\u25CF</span>{point.y} solicitudes</b><br/>'
        },
        xAxis: {
          type: 'category',
          max: 4,
          labels: {
            useHTML: true,
            animate: true,
            formatter: function () {
              var value = this.value,
                output;
      
              return `<span><img src="${foto}" style="width: 40px; height: 40px;"/><br></span>`;
            }
          }
        },
        yAxis: [{
          title: {
            text: 'Solicitudes'
          },
          showFirstLabel: false
        }],
        series: [{
          color: 'rgb(158, 159, 163)',
          pointPlacement: -0.2,
          linkedTo: 'main',
          data: datos,
          name: 'Empleos'
        }],
        exporting: {
          allowHTML: true
        }
      });
    }, 1000);
  })
  .catch((error) => {
    alert(`Error: ${error}`);
  });
  
}

function cerrar(){
  sessionStorage.clear();
  window.location.replace(`${base_url}index.php`);
}
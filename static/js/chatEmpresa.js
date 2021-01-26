
  firebase.initializeApp({
    apiKey: "AIzaSyBzfZApgbhTDSaE3RBDuLzdVCvGecwmrkk",
    authDomain: "pruebas-fa7ee.firebaseapp.com",
    projectId: "pruebas-fa7ee"
  });
  
  var db = firebase.firestore();

  var base_url = 'http://dtai.uteq.edu.mx/~ramseb188/wannajob/';

  //Variables chat
  var listaChat = document.getElementById('listaChat');
  const salas = [];
  var mensajes = [];
  var mensajesDiv = document.getElementById('mensajesDiv');
  var textomensaje = document.getElementById('textomensaje');
  var id;
  function get(){
    var miFoto = document.getElementById('miFoto');
    var foto = sessionStorage.getItem('foto');
    miFoto.src = foto;
    const chatCollection = db.collection('Chat');
    var userID = sessionStorage.getItem('id');
    id = userID;
    var userEmail = sessionStorage.getItem('correo');
    chatCollection.where('id_empresa', '==', `${userID}`)
    .onSnapshot(function(doc){
        doc.forEach(mensaje => {
            salas.push({
                id_chat : mensaje.id,
                id_empleado : mensaje.data().id_empleado,
                nombre_empleado : mensaje.data().nombre_empleado,
                id_empresa : mensaje.data().id_empresa,
                nombre_empresa : mensaje.data().nombre_empresa,
                id_empleo : mensaje.data().id_empleo,
                nombre_empleo : mensaje.data().nombre_empleo
            })
        });
        salas.map((hola, index) => {
            listaChat.innerHTML +=
            `
            <div class="chat_list" onclick="mostrarChat(${index})">
            <div class="chat_people">
            <div class="chat_ib">
                <div style="display : none;" id="id_chat${index}">${hola.id_chat}</div>
                <div style="display : none;" id="id_empleado${index}">${hola.id_empleado}</div>
                <div style="display : none;" id="id_empresa${index}">${hola.id_empresa}</div>
                <div style="display : none;" id="id_empleo${index}">${hola.id_empleo}</div>
                <h5 id="h${index}">${hola.nombre_empleado}</h5>
                <p>${hola.nombre_empleo}</p>
                </div>
            </div>
        </div>
            
            `
        })
    })
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
var idchat;
var idchatt;

function mostrarChat(index){
    var id_chat = document.getElementById(`id_chat${index}`).innerHTML;
    idchatt = id_chat;
    var id_empresa = document.getElementById(`id_empresa${index}`).innerHTML;
    db.collection('Chat').doc(id_chat).collection('Chat')
    .onSnapshot(hola => {
        mensajesDiv.scrollTop = mensajesDiv.scrollHeight;
        mensajes = [];
        mensajesDiv.innerHTML = `<div style="display: none"></div>`;
        hola.forEach(hi => {
                idchat = hi.id;
                mensajes = hi.data().mensajes;
            })
            mensajes.map(hola => {
                
                    if(hola.id == id_empresa){
                        mensajesDiv.innerHTML +=
                        `
                        <div class="outgoing_msg">
                        <div class="sent_msg">
                           <p>${hola.mensaje}</p>
                        </div>
                         </div>
                        `
                    }else{
                        mensajesDiv.innerHTML +=
                        `
                        <div class="incoming_msg">
                        <div class="received_msg">
                           <div class="received_withd_msg">
                              <p>${hola.mensaje}</p>
                           </div>
                        </div>
                     </div>
                        `
                    }
                
            })
        })
}

function enviar(){
    var x = document.getElementById('textomensaje').value;
    var msn = {id: `${id}`, mensaje : `${x}` }
    mensajes = [...mensajes, msn]
    db.collection('Chat').doc(`${idchatt}`).collection('Chat').doc(`${idchat}`).update({
        mensajes : mensajes
    });
    textomensaje.value = '';
}

function cerrar(){
    sessionStorage.clear();
    window.location.replace(`${base_url}index.php`);
  }
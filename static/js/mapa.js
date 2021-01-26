function cargaMapa() {
    mapa = new google.maps.Map(
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
                    mapa.panTo({
                        lat:position.coords.latitude,
                        lng: position.coords.longitude
                    });
                }, 2000);
                    
            });

        }

        const geocoder = new google.maps.Geocoder();

        var marcador;

        mapa.addListener("click", function (evento){
            document.getElementById("ubicacion_empleo").disabled = false;
            if(marcador == null){
            marcador = new google.maps.Marker({
                position: evento.latLng,
                map:mapa,
            });
            
            window.setTimeout(function(){
              
                mapa.setCenter(evento.latLng);  
            },500)
            mapa.setZoom(20);

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
                
            mapa.setZoom(20);
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


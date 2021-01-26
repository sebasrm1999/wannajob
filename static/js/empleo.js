$(document).ready(function(){
    $("#botonocultamuestra").click(function(){
        $("#form-empleo").each(function() {
            displaying = $(this).css("display");
                if(displaying == "block") {
                    $(this).fadeOut(function() {
                    $(this).css("display","none");
                    $("#empleos").css("display","block");                   
		            $("#titulo").html("AGREGAR NUEVO EMPLEO");
                });
                } else {
                    $(this).fadeIn(function() {
                    $(this).css("display","block");
                    $("#empleos").css("display","none");
                    });
                }
            });
        });
});
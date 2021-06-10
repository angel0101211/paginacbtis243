$(document).ready(function(){
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#dos").hide(2000)
	});
	
$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#dos").show(3000);
	});

$("#c").fadeOut(5000, function(){
		$("#c").css({'top':300, 'left':200});
		$("#c").fadeIn(5000);
	});


});


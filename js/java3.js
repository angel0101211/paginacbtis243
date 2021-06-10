$(document).ready(function(){
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#ocultar1").hide(2000)
	});
	
$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#ocultar1").show(3000);
	});

	$("#j").fadeOut(5000, function(){
		$("#j").css({'top':300, 'left':200});
		$("#j").fadeIn(5000);
	});

});


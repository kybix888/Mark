document.getElementById("cambiar").addEventListener("click",ejecutarAjax);
console.log("llego aqui0");
	function ejecutarAjax(){
		var ajaxRequest=new XMLHttpRequest();
		ajaxRequest.open("GET","./js/documento.txt",true);
		ajaxRequest.send();
console.log("llego aqui1");
		ajaxRequest.onreadystatechange=function(){console.log("llego aqui2");
			if(ajaxRequest.readyState==4 && ajaxRequest.status==200){//0=no inicializada, 1=petiion establecida, 2=peticion enviada, 3=peticion procesada, 4=peticion finalizada
				document.getElementById("contenido").innerHTML=ajaxRequest.responseText;
				console.log("llego aqui3");
			} 
		};
		
	}
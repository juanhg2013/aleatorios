


var numeros = [];
//Obtenemos el foco
document.getElementById("number").focus();

function agregarItem() {

	document.getElementById("number").focus();

	var val = document.getElementById("number").value;

	for (var i = 0; i < numeros.length ; i++) {
			 	
			if ( val == numeros[i] )
			{
					
			alert("El numero ingresado ya existe");
			return val;
		}
	}	

		//capturo el valor del input text
		val;
		//Insertamos elementos al arreglo
		numeros.push(val);	
		//Mostramos en Pantalla
		document.getElementById("result").innerHTML= numeros.join(" - ");
		//Limpiamos el input text
		document.getElementById("number").value = "";
}


function ordernarItem() {

	numeros.sort(function(a, b){return a - b});
	document.getElementById("result").innerHTML= numeros.join(" - ");
}

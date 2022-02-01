/*
Federico Vivas DIV E
E/S ej5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//declaro variable
	var nombre;
	var edad; 

	//guardar los datos 
	nombre = document.getElementById("txtIdNombre").value
	edad = document.getElementById("txtIdEdad").value

	alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}


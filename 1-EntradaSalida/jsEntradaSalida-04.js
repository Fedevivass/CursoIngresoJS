/* 
Federico Vivas DIV E
E/S ej4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declaramos variable
	var nombreIngresado
	//guardo el dato
	nombreIngresado = prompt("ingrese su nombre");
	//asigno nombre a la caja de texto
	//txtIdNombre.value = nombreIngresado;
	document.getElementById("txtIdNombre").value = nombreIngresado;

	

}


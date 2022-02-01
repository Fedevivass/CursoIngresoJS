/*
Federico Vivas DIV E
E/S ej3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declaramos variable
	var nombreIngresado;
	

	//guardamos el nombre
	nombreIngresado = document.getElementById("txtIdNombre").value;

	//muestra la alerta con el nombre
	alert("Su Nombre es " + nombreIngresado);

}


//txtIdNombre
 
 /* 

 entrada:
 -protmp
 -id
procesos:

salida:
-alert

*/

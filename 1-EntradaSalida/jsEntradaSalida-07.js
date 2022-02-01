/*
Federico Vivas DIV E
E/S EJ7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//declarar variable
	var num1;
	var	num2;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 + num2;

	alert("La suma es: " + resultado);
}

function restar()
{
	//variable
	var nume1;
	var nume2;

	nume1 = document.getElementById("txtIdNumeroUno").value
	nume2 = document.getElementById("txtIdNumeroDos").value

	nume1 = parseInt(nume1);
	nume2 = parseInt(nume2);

	resultado = nume1 - nume2;

	alert("La resta es: " + resultado);
}

function multiplicar()
{ 

	//variable
	var nume1;
	var nume2;
	

	nume1 = document.getElementById("txtIdNumeroUno").value;
	nume2 = document.getElementById("txtIdNumeroDos").value;

	nume1 = parseInt(nume1);
	nume2 = parseInt(nume2);

	resultado = nume1 * nume2;

	alert("La multiplicacion es: " + resultado);
}

function dividir()
{
		//variable
	var nume1;
	var nume2;
	

	nume1 = document.getElementById("txtIdNumeroUno").value;
	nume2 = document.getElementById("txtIdNumeroDos").value;

	nume1 = parseInt(nume1);
	nume2 = parseInt(nume2);

	resultado = nume1 / nume2;

	alert("La division es: " + resultado);
	
}


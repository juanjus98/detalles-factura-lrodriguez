function addRow() {
	//Ajax insertar registro en la tabla table_detalle_factura
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST","add_row.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(null);

	var insertResponse = xmlhttp.responseText;
	console.log(insertResponse);

	var tabla = document.getElementById('dataTable');
	var tbody = tabla.getElementsByTagName('tr')[1].parentNode;
	var clone = tabla.getElementsByTagName('tr')[1].cloneNode(true);
	clone.removeAttribute("style");
	
	/*Eliminar values input*/
	var inputs = clone.getElementsByTagName("input");
	var i;
	for (i = 0; i < inputs.length; i++) {
		inputs[i].value = "";
	}

	console.log(clone);

	tbody.appendChild(clone);
}


function updateRow(elem) {
	var articulo_id = elem.value;
	console.log(articulo_id);
	//agregar ajax para rellenar la infrmación
}

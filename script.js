function addRow() {
	//Ajax insertar registro en la tabla table_detalle_factura
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST","add_row.php", false);
	xmlhttp.send();
	var idDetalle = xmlhttp.responseText;

	//Agregar html
	var tabla = document.getElementById('dataTable');
	var tbody = tabla.getElementsByTagName('tr')[1].parentNode;
	var clone = tabla.getElementsByTagName('tr')[1].cloneNode(true);
	clone.removeAttribute("style");
	clone.setAttribute("data-iddetalle", idDetalle)
	/*Eliminar values input*/
	var inputs = clone.getElementsByTagName("input");
	var i;
	for (i = 0; i < inputs.length; i++) { inputs[i].value = ""; }
	tbody.appendChild(clone);
}


function updateRow(elem) {
	var articulo_id = elem.value;
	var parentTd = elem.parentElement.nodeName;
	
	console.log(articulo_id);
	console.log(parentTd);
	//agregar ajax para rellenar la infrmación
}

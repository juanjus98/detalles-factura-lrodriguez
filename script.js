console.log("Iniciando app!");

function addRow() {
	//Ajax insertar registro en la tabla table_detalle_factura
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST","add_row.php", false);
	xmlhttp.send();
	var idDetalle = xmlhttp.responseText; //Id insertado

	//Clonar tr oculto
	var tabla = document.getElementById('dataTable');
	var tbody = tabla.getElementsByTagName('tr')[1].parentNode;
	var clone = tabla.getElementsByTagName('tr')[1].cloneNode(true);
	clone.removeAttribute("style");
	clone.setAttribute("data-iddetalle", idDetalle);
	clone.setAttribute("id", 'row_' + idDetalle);

	//Asignar id al elemento código
	var elm_codigo = clone.getElementsByClassName('elm_codigo');
	var i;
	for (i = 0; i < elm_codigo.length; ++i) {
		elm_codigo[i].setAttribute('id', 'codigo_' + idDetalle);
	}

	//Asignar id al elemento descripción
	var elm_descripcion = clone.getElementsByClassName('elm_descripcion');
	var ii;
	for (ii = 0; ii < elm_descripcion.length; ++ii) {
		elm_descripcion[ii].setAttribute('id', 'descripcion_' + idDetalle);
	}

	//Asignar id al elemento cantidad
	var elm_cantidad = clone.getElementsByClassName('elm_cantidad');
	var iii;
	for (iii = 0; iii < elm_cantidad.length; ++iii) {
		elm_cantidad[iii].setAttribute('id', 'cantidad_' + idDetalle);
	}

	//Asignar id al elemento precio unitario
	var elm_precio_unitario = clone.getElementsByClassName('elm_precio_unitario');
	var iiii;
	for (iiii = 0; iiii < elm_precio_unitario.length; ++iiii) {
		elm_precio_unitario[iiii].setAttribute('id', 'preciounitario_' + idDetalle);
	}

	//Asignar id al elemento subtotal
	var elm_subtotal = clone.getElementsByClassName('elm_subtotal');
	var iiiii;
	for (iiiii = 0; iiiii < elm_subtotal.length; ++iiiii) {
		elm_subtotal[iiiii].setAttribute('id', 'subtotal_' + idDetalle);
	}

	//Asignar id al el botón eliminar
	var btnEliminar = clone.getElementsByClassName('btn-eliminar');
	var iiiiii;
	for (iiiiii = 0; iiiiii < btnEliminar.length; ++iiiiii) {
		btnEliminar[iiiiii].setAttribute('id', 'eliminar_' + idDetalle);
	}
		
	/*Eliminar values input*/
	var inputs = clone.getElementsByTagName("input");
	var i;
	for (i = 0; i < inputs.length; i++) { inputs[i].value = ""; }
		tbody.appendChild(clone);
}


function updateRow(elem) {
	var idArticulo = elem.value; //id en la Tabla de artículos
	var idElemento = elem.getAttribute("id"); //id del elemento
	console.log(idElemento);
	//Consultar Articulo
}

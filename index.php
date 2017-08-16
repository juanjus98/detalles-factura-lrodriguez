<?php
//Conexión a la base de datos
include('mysqli.php');

//Consultar artículos
$articulos = getArticulos($mysqli);

?>
<!DOCTYPE html>
<html>
<head>
	<title>Detalles Factura</title>
	<script type="text/javascript" src="script.js"></script>
</head>
<body>
<table id="dataTable">
	<thead>
	<tr>
		<th>Código</th>
		<th>Descripción</th>
		<th>Cantidad</th>
		<th>Precio Unitario</th>
		<th>Subtotal</th>
		<th></th>
		</tr>
	</thead>
	<tbody>
		<!-- fila plantilla-->
		<tr style="display: none;">
			<td>
				<select name="codigo[]" onchange="updateRow(this)">
					<option value="">Seleccionar</option>
					<?php
					if(!empty($articulos)){
						foreach ($articulos as $key => $value) {
							echo '<option value="'.$value['id'].'">'.$value['codarticulo'].'</option>';
						}
					}
					?>
				</select>
			</td>
			<td>
				<select name="descripcion[]">
					<option value="">Seleccionar</option>
					<?php
					if(!empty($articulos)){
						foreach ($articulos as $key => $value) {
							echo '<option value="'.$value['id'].'">'.$value['nomartiuclo'].'</option>';
						}
					}
					?>
				</select>
			</td>
			<td>
				<input type="text" name="cantidad[]" value="">
			</td>
			<td>
				<input type="text" name="precio_unitario[]" value="">
			</td>
			<td>
				<input type="text" name="subtotal[]" value="">
			</td>
			<td>
				<button type="button">X</button>
			</td>
		</tr>
		<!-- //fila plantilla-->
	</tbody>
</table>
<button type="button" onclick="addRow()">Agregar nuevo registro</button>
</body>
</html>
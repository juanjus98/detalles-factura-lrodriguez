<?php
$mysqli = new mysqli("localhost", "root", "rootroot", "db_test");
/* comprobar la conexión */
if ($mysqli->connect_errno) {
	printf("Falló la conexión: %s\n", $mysqli->connect_error);
	exit();
}

//Consultar artículos
function getArticulos($mysqli){
	$sql = "SELECT * FROM table_articulos";
	$query = $mysqli->query($sql);
	while ($row = $query->fetch_object()) {
		$resultado[] = (array)$row;
	}
	return $resultado;
}
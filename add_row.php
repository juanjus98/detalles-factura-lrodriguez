<?php
include('mysqli.php');
//Insertar registro en table_detalle_factura y retornar id
$sql = "INSERT INTO table_detalle_factura (codarticulo, nomartiuclo, cantidad, preciounit, subtotal) VALUES ('COD-1','NOM ARCTICULO',2,10,20)";
$mysqli->query($sql);
$id = $mysqli->insert_id;
echo $id;
$mysqli->close();
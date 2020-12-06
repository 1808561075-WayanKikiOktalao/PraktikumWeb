<?php 
$db = mysqli_connect("localhost", "root", "", "crud");

function query ($query){
	global $db;
	$result = mysqli_query( $db, $query );
	$rows = [];
	while ($row=mysqli_fetch_assoc($result)) {
		$rows[] = $row;
	}
	return $rows;
}

function tambah ($data){
	global $db;
	$kode = htmlspecialchars($data["kode"]);
	$nama = htmlspecialchars($data["nama"]);
	$jumlah = htmlspecialchars($data["jumlah"]);
	$harga = htmlspecialchars($data["harga"]);

	$query = "INSERT INTO buku VALUES ('','$kode','$nama','$jumlah','$harga')";

	mysqli_query($db, $query);

	return mysqli_affected_rows($db);
 }

  function ubah($data, $id){
 	global $db;
 	$kode = htmlspecialchars($data["kode"]);
	$nama = htmlspecialchars($data["nama"]);
	$jumlah = htmlspecialchars($data["jumlah"]);
	$harga = htmlspecialchars($data["harga"]);


 	$query = "UPDATE buku SET kode_buku = '$kode', nama_buku = '$nama', jumlah_buku =$jumlah, harga_buku = $harga WHERE kode_buku ='$id'";


 	mysqli_query($db, $query);

	return mysqli_affected_rows($db);
 }

  function hapus ($id){

 	global $db;
 	$query = "DELETE FROM buku WHERE kode_buku='$id'";
 	mysqli_query($db, $query);
 	return mysqli_affected_rows($db);
 }


 ?>
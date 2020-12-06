<?php 
session_start();
if (!isset($_SESSION['login'])) {
    header('Location: login.php');
    exit;
} 
require 'functions.php';

$bukus = query("SELECT * FROM buku");

 ?>

<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Hello, world!</title>
</head>

<style>
    body {
        background-color: #f3f3f3;
    }
    .table100 {
        background-color: white;
        border-radius: 20px;
    }
</style>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">TUGAS PBW</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
        </ul>
        <span class="navbar-text pr-5">
          Status : <?php echo $_SESSION['user_level']; ?> | <a href="logout.php">Logout</a>
        </span>
      </div>
    </nav>
    <h1 class="mt-5 mb-5 text-center">Daftar Buku</h1>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="pr-5 pl-5 pt-3 pb-3 table100">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Kode buku</th>
                                <th scope="col">Nama buku</th>
                                <th scope="col">Stok</th>
                                <th scope="col">Harga</th>
                                <th scope="col">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $no=1; ?>
                            <?php foreach ($bukus as $buku ) :?>
                            <tr>
                                <th scope="row"><?php echo $no; $no++ ?></th>
                                <td><?php echo $buku["kode_buku"]; ?></td>
                                <td><?php echo $buku["nama_buku"]; ?></td>
                                <td><?php echo $buku["jumlah_buku"]; ?> pcs</td>
                                <td>Rp. <?php echo $buku["harga_buku"]; ?></td>
                                <td>
                                    <a href="ubah.php?kode=<?php echo $buku["kode_buku"]; ?>">Ubah</a> 

                                    <?php if ($_SESSION['user_level'] == "admin"): ?>
                                        |
                                        <a href="hapus.php?kode=<?php echo $buku["kode_buku"]; ?>" onclick ="
                                        return confirm('Yakin?')">Hapus</a>  
                                    <?php endif ?>
                                </td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                    <div class="col text-center mt-3">
                        <button type="button" class="btn btn-primary" name="tambah" onclick="window.location.href = 'add.php'">Tambah buku</button>
                    </div>
                </div>
            </div>
        </div>
    </div>




    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
</body>

</html>
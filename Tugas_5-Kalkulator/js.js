function hitung() {
    var angka1 = document.getElementById("angka1").value;
    var angka2 = document.getElementById("angka2").value;
    var pilihan = document.getElementById("operasi").value;
    if (pilihan == "+") {
        var hasil = parseInt(angka1) + parseInt(angka2);
    }
    else if (pilihan == "-") {
        var hasil = parseInt(angka1) - parseInt(angka2);
    }
    else if (pilihan == "/") {
        var hasil = parseInt(angka1) / parseInt(angka2);
    }
    else {
        var hasil = parseInt(angka1) * parseInt(angka2);
    }
    if (isNaN(hasil)) {
        document.getElementById("hasil2").innerHTML = "Input Error";
    }
    else {
        document.getElementById("hasil2").innerHTML = angka1 + " " + pilihan + " " + angka2 + " = " + hasil;
        document.getElementById("angka1").value = "";
        document.getElementById("angka2").value = "";

    }
}

function reset() {
    document.getElementById("hasil2").innerHTML = "";
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
}
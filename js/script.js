//variabel ini tidak disimpan permanen
var user_name = prompt("Please enter your name : ");

//Di bawah if/else buat menampilkan nama pengunjung di website kalau tidak ada namanya, maka default ke user
if (user_name == ""){
    document.getElementById("username").innerHTML = "User"
}
else{
    document.getElementById("username").innerHTML = user_name
}

//Di bawah ini untuk validasi form html
function validasi_form(){
    //mengambil data dari form yang diisi
    const time= Date()
    const fullname = document.forms["form-message"]["nama"].value;
    const datebirth = document.forms["form-message"]["tl"].value;
    const gender = document.forms["form-message"]["kelamin"].value;
    const message = document.forms["form-message"]["pesan"].value;
    //cek validasi, jika data kosong, maka tidak akan dikirim
    if (fullname == "" || datebirth == "" || gender == "" || message == ""){
        alert("Please fill out the empty fields");
        return false;
    }
    //Kalau semua sudah diisi maka tampilkan di table
    else{
        document.getElementById("show-time").innerHTML = time
        document.getElementById("show-fullname").innerHTML = fullname
        document.getElementById("show-datebirth").innerHTML = datebirth
        document.getElementById("show-gender").innerHTML = gender
        document.getElementById("show-message").innerHTML = message
        return false;
    }
}
//Variabel ini tidak disimpan permanen
var user_name = prompt("Please enter your name : ");

//Di bawah if/else buat menampilkan nama pengunjung di website kalau tidak ada namanya, maka default ke user
if (user_name == ""){
    document.getElementById("username").innerHTML = "User"
}
else{
    document.getElementById("username").innerHTML = user_name
}

//Kode untuk menampilkan banner
var slideIndex = 1;
showDivs(slideIndex)

//Untuk banner ke-n, hanya bisa 1 atau -1 (Tidak ada banner yang diskip ketika tombol dipencet)
function plusDivs(n){
    showDivs(slideIndex += n)
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("banner-photo");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length

    //for loop untuk menghilangkan banner lain kecuali 1
    for (i = 0; i < imgList.length; i++){
        imgList[i].style.display = "none";
    }
    //-1 ada dibawah karena index dihitung mulai dari 0,1,2 bukan 1,2,3
    imgList[slideIndex - 1].style.display = "block";
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
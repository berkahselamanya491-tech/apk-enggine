document.body.innerHTML = `
<style>
body{
  margin:0;
  font-family:Arial;
  background:black;
  color:white;
  text-align:center;
}

/* LOGIN */
#login{
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

input, textarea{
  width:250px;
  padding:10px;
  margin:8px;
  border:none;
  border-radius:6px;
  text-align:center;
}

button{
  padding:10px 20px;
  border:none;
  border-radius:6px;
  background:lime;
  font-weight:bold;
}

/* VIDEO */
#introVideo{
  display:none;
  width:100%;
  height:100vh;
  object-fit:contain;
  background:black;
}

/* MENU */
#menu{
  display:none;
  height:100vh;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}
</style>

<!-- LOGIN -->
<div id="login">
  <h2>MASUKAN SANDI</h2>
  <input type="password" id="pw" placeholder="Password">
  <button onclick="cek()">MASUK</button>
</div>

<!-- INTRO -->
<video id="introVideo" src="intro.mp4" playsinline></video>

<!-- MENU WA -->
<div id="menu">
  <h2>KIRIM PESAN WHATSAPP</h2>

  <input type="text" id="nomor" placeholder="Masukan Nomor (628xxxx)">

  <textarea id="pesan" placeholder="Masukan Pesan"></textarea>

  <button onclick="kirimWA()">KIRIM</button>
</div>
`;

let login = document.getElementById("login");
let video = document.getElementById("introVideo");
let menu = document.getElementById("menu");

function cek(){
  let sandi = document.getElementById("pw").value;

  if(sandi === "1234"){
    login.style.display = "none";
    video.style.display = "block";
    video.play();
  }else{
    alert("Password Salah");
  }
}

video.onended = function(){
  video.style.display = "none";
  menu.style.display = "flex";
};


function kirimWA(){
  let pesan = document.getElementById("pesan").value;

  let nomorTetap = "628123456789"; // GANTI dengan nomor tujuan

  if(pesan === ""){
    alert("Pesan harus diisi");
    return;
  }

  let url = "https://api.whatsapp.com/send?phone=" 
            + nomorTetap 
            + "&text=" 
            + encodeURIComponent(pesan);

  window.location.href = url;
}
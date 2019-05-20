var ans = document.getElementById('answer');
var qns = prompt("Cual es su nombre");

if (qns == 'Negro') {
    ans.innerHTML = `Bienvenido administrador ${qns}`;
} else {
    ans.innerHTML = `Bienvenido invitado ${qns}`;
}
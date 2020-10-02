var personName = "";

function complainMessage() {
  alert("Eu te disse para não fazer isso " + personName);
}

function typeAndScream() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}

function goDark() {
  var body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  }
  else {
    body.className = "";
  }
  
}

function finishTheStory() {
  document.getElementById("story").innerHTML = "Então procurei cuidadosamente na masmorra úmida. Aí está você! Eu sorri com todos os meus 98 dentes brilhantes. Hora do jantar!";
}

const primeiroBotao = document.getElementById('firstButton');
primeiroBotao.addEventListener('click', goDark);

const textoNome = document.getElementById('name');
textoNome.addEventListener('keyup', typeAndScream);

const segundoBotao = document.getElementById('secondButton');
segundoBotao.addEventListener('click', complainMessage);

const terceiroBotao = document.getElementById('thirdButton');
terceiroBotao.addEventListener('click', finishTheStory);
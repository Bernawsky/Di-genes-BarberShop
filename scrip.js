document.getElementById("ios").addEventListener("click", (event) => {
  if (event.target === ios) {
    window.location.href =
      "https://apps.apple.com/us/app/appbarber-pro-profissionais/id1602535418?ign-itscg=30200&ign-itsct=apps_box_badge";
  }
});

document.getElementById("android").addEventListener("click", (event) => {
  if (event.target === android) {
    window.location.href =
      "https://play.google.com/store/apps/details?id=br.com.starapp.appbarberpro";
  }
});

document.getElementById("site").addEventListener("click", (event) => {
  if (event.target === site) {
    window.location.href =
      "https://www.appbarber.com.br/?https://www.appbarber.com.br/&gad_source=1&gclid=CjwKCAjwkuqvBhAQEiwA65XxQEuI6RVcu1UfYPci-Sf265_T1VhoHa-7QMRjf1_F8E679O6N5iJEAxoCU9oQAvD_BwE#cadastro#cadastro'";
  }
});

document.getElementById("whatsapp").addEventListener("click", (event) => {
  if (event.target === whatsapp) {
    window.location.href = "https://wa.me/5532984459534";
  }
});

document.getElementById("instagram").addEventListener("click", (event) => {
  if (event.target === instagram) {
    window.location.href =
      "https://www.instagram.com/diogenesbarbearia_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  }
});

document.getElementById("facebook").addEventListener("click", (event) => {
  if (event.target === facebook) {
    window.location.href =
      "https://web.facebook.com/profile.php?id=100089929872768";
  }
});

document.getElementById("threads").addEventListener("click", (event) => {
  if (event.target === threads) {
    window.location.href = "https://www.threads.net/@diogenesbarbearia_";
  }
});

const openMenu = document.getElementById("open");
const exitMenu = document.getElementById("exit");
const header = document.getElementById("menu");
const tagA = document.getElementById("tag-a");

function abrir() {
  if ((openMenu.style.display = "flex")) {
    header.style.display = "flex";
    exitMenu.style.display = "flex";
    openMenu.style.display = "none";
  }
}

function fechar() {
  if ((exitMenu.style.display = "flex")) {
    openMenu.style.display = "flex";
    exitMenu.style.display = "none";
    header.style.display = "none";
  }
}

function fecharLink() {
  if ((tagA.style.display = "flex")) {
    header.style.display = "none";
    openMenu.style.display = "flex";
    exitMenu.style.display = "none";
  }
}

//cod mobile

window.addEventListener("resize", function () {
  var img = document.getElementById("img-fundo");
  if (window.innerWidth <= 900) {
    img.src = "img/corte.jpg";
  } else {
    img.src = "img/line-services.jpg";
  }
});

window.dispatchEvent(new Event("resize"));



//ProductsJs

const abrir1 = document.getElementById("abrir1");
const fechar1 = document.getElementById("fechar1");
const container1 = document.getElementById("container-descricao-1");
const janela1 = document.getElementById("janela-modal-1");
const produto1 = document.getElementById("produto-1");

abrir1.addEventListener("click", (event) => {
  if (event.target === abrir1) {
    container1.style.display = "none";
    produto1.style.display = "none";
    janela1.style.display = "flex";
  }
});

fechar1.addEventListener("click", (event) => {
  if ((container1.style.display = "none")) {
    event.target == fechar1;
    container1.style.display = "flex";
    produto1.style.display = "flex";
    janela1.style.display = "none";
  }
});

//JANELA 2

const abrir2 = document.getElementById("abrir2");
const fechar2 = document.getElementById("fechar2");
const container2 = document.getElementById("container-descricao-2");
const janela2 = document.getElementById("janela-modal-2");
const produto2 = document.getElementById("produto-2");

abrir2.addEventListener("click", (event) => {
  if (event.target === abrir2) {
    container2.style.display = "none";
    produto2.style.display = "none";
    janela2.style.display = "flex";
  }
});

fechar2.addEventListener("click", (event) => {
  if ((container2.style.display = "none")) {
    event.target == fechar2;
    container2.style.display = "flex";
    produto2.style.display = "flex";
    janela2.style.display = "none";
  }
});

//JANELA 3

const abrir3 = document.getElementById("abrir3");
const fechar3 = document.getElementById("fechar3");
const container3 = document.getElementById("container-descricao-3");
const janela3 = document.getElementById("janela-modal-3");
const produto3 = document.getElementById("produto-3");

abrir3.addEventListener("click", (event) => {
  if (event.target === abrir3) {
    container3.style.display = "none";
    produto3.style.display = "none";
    janela3.style.display = "flex";
  }
});

fechar3.addEventListener("click", (event) => {
  if ((container3.style.display = "none")) {
    event.target == fechar3;
    container3.style.display = "flex";
    produto3.style.display = "flex";
    janela3.style.display = "none";
  }
});

//JANELA 4

const abrir4 = document.getElementById("abrir4");
const fechar4 = document.getElementById("fechar4");
const container4 = document.getElementById("container-descricao-4");
const janela4 = document.getElementById("janela-modal-4");
const produto4 = document.getElementById("produto-4");

abrir4.addEventListener("click", (event) => {
  if (event.target === abrir4) {
    container4.style.display = "none";
    produto4.style.display = "none";
    janela4.style.display = "flex";
  }
});

fechar4.addEventListener("click", (event) => {
  if ((container4.style.display = "none")) {
    event.target == fechar4;
    container4.style.display = "flex";
    produto4.style.display = "flex";
    janela4.style.display = "none";
  }
});

//JANELA 5

const abrir5 = document.getElementById("abrir5");
const fechar5 = document.getElementById("fechar5");
const container5 = document.getElementById("container-descricao-5");
const janela5 = document.getElementById("janela-modal-5");
const produto5 = document.getElementById("produto-5");

abrir5.addEventListener("click", (event) => {
  if (event.target === abrir5) {
    container5.style.display = "none";
    produto5.style.display = "none";
    janela5.style.display = "flex";
  }
});

fechar5.addEventListener("click", (event) => {
  if ((container5.style.display = "none")) {
    event.target == fechar5;
    container5.style.display = "flex";
    produto5.style.display = "flex";
    janela5.style.display = "none";
  }
});

//JANELA 6

const abrir6 = document.getElementById("abrir6");
const fechar6 = document.getElementById("fechar6");
const container6 = document.getElementById("container-descricao-6");
const janela6 = document.getElementById("janela-modal-6");
const produto6 = document.getElementById("produto-6");

abrir6.addEventListener("click", (event) => {
  if (event.target === abrir6) {
    container6.style.display = "none";
    produto6.style.display = "none";
    janela6.style.display = "flex";
  }
});

fechar6.addEventListener("click", (event) => {
  if ((container6.style.display = "none")) {
    event.target == fechar6;
    container6.style.display = "flex";
    produto6.style.display = "flex";
    janela6.style.display = "none";
  }
});

//JANELA 7

const abrir7 = document.getElementById("abrir7");
const fechar7 = document.getElementById("fechar7");
const container7 = document.getElementById("container-descricao-7");
const janela7 = document.getElementById("janela-modal-7");
const produto7 = document.getElementById("produto-7");

abrir7.addEventListener("click", (event) => {
  if (event.target === abrir7) {
    container7.style.display = "none";
    produto7.style.display = "none";
    janela7.style.display = "flex";
  }
});

fechar7.addEventListener("click", (event) => {
  if ((container7.style.display = "none")) {
    event.target == fechar7;
    container7.style.display = "flex";
    produto7.style.display = "flex";
    janela7.style.display = "none";
  }
});

//JANELA 8

const abrir8 = document.getElementById("abrir8");
const fechar8 = document.getElementById("fechar8");
const container8 = document.getElementById("container-descricao-8");
const janela8 = document.getElementById("janela-modal-8");
const produto8 = document.getElementById("produto-8");

abrir8.addEventListener("click", (event) => {
  if (event.target === abrir8) {
    container8.style.display = "none";
    produto8.style.display = "none";
    janela8.style.display = "flex";
  }
});

fechar8.addEventListener("click", (event) => {
  if ((container8.style.display = "none")) {
    event.target == fechar8;
    container8.style.display = "flex";
    produto8.style.display = "flex";
    janela8.style.display = "none";
  }
});

//JANELA 9

const abrir9 = document.getElementById("abrir9");
const fechar9 = document.getElementById("fechar9");
const container9 = document.getElementById("container-descricao-9");
const janela9 = document.getElementById("janela-modal-9");
const produto9 = document.getElementById("produto-9");

abrir9.addEventListener("click", (event) => {
  if (event.target === abrir9) {
    container9.style.display = "none";
    produto9.style.display = "none";
    janela9.style.display = "flex";
  }
});

fechar9.addEventListener("click", (event) => {
  if ((container9.style.display = "none")) {
    event.target == fechar9;
    container9.style.display = "flex";
    produto9.style.display = "flex";
    janela9.style.display = "none";
  }
});

//JANELA 10

const abrir10 = document.getElementById("abrir10");
const fechar10 = document.getElementById("fechar10");
const container10 = document.getElementById("container-descricao-10");
const janela10 = document.getElementById("janela-modal-10");
const produto10 = document.getElementById("produto-10");

abrir10.addEventListener("click", (event) => {
  if (event.target === abrir10) {
    container10.style.display = "none";
    produto10.style.display = "none";
    janela10.style.display = "flex";
  }
});

fechar10.addEventListener("click", (event) => {
  if ((container10.style.display = "none")) {
    event.target == fechar10;
    container10.style.display = "flex";
    produto10.style.display = "flex";
    janela10.style.display = "none";
  }
});

//JANELA 11

const abrir11 = document.getElementById("abrir11");
const fechar11 = document.getElementById("fechar11");
const container11 = document.getElementById("container-descricao-11");
const janela11 = document.getElementById("janela-modal-11");
const produto11 = document.getElementById("produto-11");

abrir11.addEventListener("click", (event) => {
  if (event.target === abrir11) {
    container11.style.display = "none";
    produto11.style.display = "none";
    janela11.style.display = "flex";
  }
});

fechar11.addEventListener("click", (event) => {
  if ((container11.style.display = "none")) {
    event.target == fechar11;
    container11.style.display = "flex";
    produto11.style.display = "flex";
    janela11.style.display = "none";
  }
});

//JANELA 12

const abrir12 = document.getElementById("abrir12");
const fechar12 = document.getElementById("fechar12");
const container12 = document.getElementById("container-descricao-12");
const janela12 = document.getElementById("janela-modal-12");
const produto12 = document.getElementById("produto-12");

abrir12.addEventListener("click", (event) => {
  if (event.target === abrir12) {
    container12.style.display = "none";
    produto12.style.display = "none";
    janela12.style.display = "flex";
  }
});

fechar12.addEventListener("click", (event) => {
  if ((container12.style.display = "none")) {
    event.target == fechar12;
    container12.style.display = "flex";
    produto12.style.display = "flex";
    janela12.style.display = "none";
  }
});

//JANELA 13

const abrir13 = document.getElementById("abrir13");
const fechar13 = document.getElementById("fechar13");
const container13 = document.getElementById("container-descricao-13");
const janela13 = document.getElementById("janela-modal-13");
const produto13 = document.getElementById("produto-13");

abrir13.addEventListener("click", (event) => {
  if (event.target === abrir13) {
    container13.style.display = "none";
    produto13.style.display = "none";
    janela13.style.display = "flex";
  }
});

fechar13.addEventListener("click", (event) => {
  if ((container13.style.display = "none")) {
    event.target == fechar13;
    container13.style.display = "flex";
    produto13.style.display = "flex";
    janela13.style.display = "none";
  }
});

//JANELA 14

const abrir14 = document.getElementById("abrir14");
const fechar14 = document.getElementById("fechar14");
const container14 = document.getElementById("container-descricao-14");
const janela14 = document.getElementById("janela-modal-14");
const produto14 = document.getElementById("produto-14");

abrir14.addEventListener("click", (event) => {
  if (event.target === abrir14) {
    container14.style.display = "none";
    produto14.style.display = "none";
    janela14.style.display = "flex";
  }
});

fechar14.addEventListener("click", (event) => {
  if ((container14.style.display = "none")) {
    event.target == fechar14;
    container14.style.display = "flex";
    produto14.style.display = "flex";
    janela14.style.display = "none";
  }
});

//JANELA 15

const abrir15 = document.getElementById("abrir15");
const fechar15 = document.getElementById("fechar15");
const container15 = document.getElementById("container-descricao-15");
const janela15 = document.getElementById("janela-modal-15");
const produto15 = document.getElementById("produto-15");

abrir15.addEventListener("click", (event) => {
  if (event.target === abrir15) {
    container15.style.display = "none";
    produto15.style.display = "none";
    janela15.style.display = "flex";
  }
});

fechar15.addEventListener("click", (event) => {
  if ((container15.style.display = "none")) {
    event.target == fechar15;
    container15.style.display = "flex";
    produto15.style.display = "flex";
    janela15.style.display = "none";
  }
});

//JANELA 16

const abrir16 = document.getElementById("abrir16");
const fechar16 = document.getElementById("fechar16");
const container16 = document.getElementById("container-descricao-16");
const janela16 = document.getElementById("janela-modal-16");
const produto16 = document.getElementById("produto-16");

abrir16.addEventListener("click", (event) => {
  if (event.target === abrir16) {
    container16.style.display = "none";
    produto16.style.display = "none";
    janela16.style.display = "flex";
  }
});

fechar16.addEventListener("click", (event) => {
  if ((container16.style.display = "none")) {
    event.target == fechar16;
    container16.style.display = "flex";
    produto16.style.display = "flex";
    janela16.style.display = "none";
  }
});

var qtd = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var valorTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var valorProduto = [
  50.9, 60.0, 64.9, 90.0, 66.9, 62.35, 90.0, 74.9, 80.0, 38.9, 68.7, 70.0, 80.0,
  64.9, 82.9, 89.9,
];

function adicionarItem(item) {
  var quantidade = document.getElementById("quantidade" + item);
  var total = document.getElementById("total" + item);
  qtd[item] += 1;
  valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
  quantidade.innerHTML = qtd[item];
  total.innerHTML = "R$:" + " " + valorTotal[item].toFixed(2);
}

function eliminarItem(item) {
  if (qtd[item] > 0) {
    var quantidade = document.getElementById("quantidade" + item);
    var total = document.getElementById("total" + item);
    qtd[item] -= 1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = "R$:" + " " + valorTotal[item].toFixed(2);
  }
}

function finalizar1() {
  var qtdTotal = 0;
  for (i = 0; i < qtd.length; i++) {
    qtdTotal += qtd[i];
  }

  if (qtdTotal > 0) {
    window.location.href =
      "https://www.mercadolivre.com.br/condicionador-diario-masculino-cabelo-e-barba-140ml-baboon/p/MLB19903645?quantity=1";
  } else {
    window.alert("Você precisa selecionar 1 item");
  }
}

//2

function finalizar1() {
  var qtdTotal = 0;
  for (i = 0; i < qtd.length; i++) {
    qtdTotal += qtd[i];
  }

  if (qtdTotal > 0) {
    window.location.href =
      "https://www.mercadolivre.com.br/condicionador-diario-masculino-cabelo-e-barba-140ml-baboon/p/MLB19903645?quantity=1";
  } else {
    window.alert("Você precisa selecionar 1 item");
  }
}

//3

function finalizar1() {
  var qtdTotal = 0;
  for (i = 0; i < qtd.length; i++) {
    qtdTotal += qtd[i];
  }

  if (qtdTotal > 0) {
    window.location.href =
      "https://www.mercadolivre.com.br/condicionador-diario-masculino-cabelo-e-barba-140ml-baboon/p/MLB19903645?quantity=1";
  } else {
    window.alert("Você precisa selecionar 1 item");
  }
}

//4

function finalizar1() {
  var qtdTotal = 0;
  for (i = 0; i < qtd.length; i++) {
    qtdTotal += qtd[i];
  }

  if (qtdTotal > 0) {
    window.location.href =
      "https://www.mercadolivre.com.br/condicionador-diario-masculino-cabelo-e-barba-140ml-baboon/p/MLB19903645?quantity=1";
  } else {
    window.alert("Você precisa selecionar 1 item");
  }
}

//5

function finalizar1() {
  var qtdTotal = 0;
  for (i = 0; i < qtd.length; i++) {
    qtdTotal += qtd[i];
  }

  if (qtdTotal > 0) {
    window.location.href =
      "https://www.mercadolivre.com.br/condicionador-diario-masculino-cabelo-e-barba-140ml-baboon/p/MLB19903645?quantity=1";
  } else {
    window.alert("Você precisa selecionar 1 item");
  }
}

//6

function finalizar1() {
  var qtdTotal = 0;
  for (i = 0; i < qtd.length; i++) {
    qtdTotal += qtd[i];
  }

  if (qtdTotal > 0) {
    window.location.href =
      "https://www.mercadolivre.com.br/condicionador-diario-masculino-cabelo-e-barba-140ml-baboon/p/MLB19903645?quantity=1";
  } else {
    window.alert("Você precisa selecionar 1 item");
  }
}

//7

function finalizar1() {
  var qtdTotal = 0;
  for (i = 0; i < qtd.length; i++) {
    qtdTotal += qtd[i];
  }

  if (qtdTotal > 0) {
    window.location.href =
      "https://www.mercadolivre.com.br/condicionador-diario-masculino-cabelo-e-barba-140ml-baboon/p/MLB19903645?quantity=1";
  } else {
    window.alert("Você precisa selecionar 1 item");
  }
}

//8

function finalizar1() {
  var qtdTotal = 0;
  for (i = 0; i < qtd.length; i++) {
    qtdTotal += qtd[i];
  }

  if (qtdTotal > 0) {
    window.location.href =
      "https://www.mercadolivre.com.br/condicionador-diario-masculino-cabelo-e-barba-140ml-baboon/p/MLB19903645?quantity=1";
  } else {
    window.alert("Você precisa selecionar 1 item");
  }
}

//9

function finalizar1() {
  var qtdTotal = 0;
  for (i = 0; i < qtd.length; i++) {
    qtdTotal += qtd[i];
  }

  if (qtdTotal > 0) {
    window.location.href =
      "https://www.mercadolivre.com.br/condicionador-diario-masculino-cabelo-e-barba-140ml-baboon/p/MLB19903645?quantity=1";
  } else {
    window.alert("Você precisa selecionar 1 item");
  }
}

//10

function finalizar1() {
  var qtdTotal = 0;
  for (i = 0; i < qtd.length; i++) {
    qtdTotal += qtd[i];
  }

  if (qtdTotal > 0) {
    window.location.href =
      "https://www.mercadolivre.com.br/condicionador-diario-masculino-cabelo-e-barba-140ml-baboon/p/MLB19903645?quantity=1";
  } else {
    window.alert("Você precisa selecionar 1 item");
  }
}

//11

function finalizar1() {
  var qtdTotal = 0;
  for (i = 0; i < qtd.length; i++) {
    qtdTotal += qtd[i];
  }

  if (qtdTotal > 0) {
    window.location.href =
      "https://www.mercadolivre.com.br/condicionador-diario-masculino-cabelo-e-barba-140ml-baboon/p/MLB19903645?quantity=1";
  } else {
    window.alert("Você precisa selecionar 1 item");
  }
}

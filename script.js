function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
let audios = {
  "Alvorada": "alvorada.mp3",
  "Bandeira Nacional": "bandeira_nacional.mp3",
  "Banho de Água Doce": "banho_de_agua_doce.mp3",
  "Cabo de dia": "Cabo de dia.mp3",
  "Imediato": "imediato.mp3",
  "Licenciados Formar": "licenciados_formar.mp3",
  "Ronda": "mila-ronda.mp3",
  "Inspeção": "inspecao.mp3",
  "Oficial Intermediário Comandante no próprio": "oficial_intermediario_comandante_no_proprio.mp3",
  "Polícia": "Policia.mp3",
  "Rancho para Serviço": "rancho_servico.mp3",
  "Render Serviço": "render_servico.mp3",
  "Reunir Geral": "reunir_geral.mp3",
  "Silêncio": "silencio.mp3",
  "Oficial Superior Comandante no próprio": "oficial_superior_comandante_no_proprio.mp3",
  "Sinaleiro": "sinaleiro.mp3",
  "Uniforme": "Uniforme.mp3",
  "Volta": "volta.MP3",
  "Oficial Superior Indo a bordo": "oficial_superior_indo_a_bordo.mp3"
};

let all_answers = Object.keys(audios);
console.log(all_answers);
let respostas = [
"Inspeção", "Licenciados Formar", "Cabo de Dia", "Reunir Geral", "Sinaleiro"
];
resp_correta = 3;

/*
        <span class="badge rounded-pill bg-secondary" onclick="">Inspeção</span>
        <span class="badge rounded-pill bg-secondary" onclick="">Licenciados Formar</span>
        <span class="badge rounded-pill bg-secondary" onclick="">Cabo de Dia</span>
        <span class="badge rounded-pill bg-secondary" onclick="">Reunir Geral</span> */
for (i = 0; i < respostas.length; i++){
  document.getElementById("respostas").innerHTML = document.getElementById("respostas").innerHTML + `<span id="resp${i}" class="badge rounded-pill bg-secondary" onclick="answer()"><h2>${respostas[i]}</h2></span>`;
}


function play() {
  let handler = new Audio(`audio/${audios[respostas[resp_correta]]}`);
  handler.play();
}


function answer() {
  console.log('answer')
  for (i = 0; i < respostas.length; i++){
    if (i != resp_correta){
      document.getElementById(`resp${i}`).setAttribute('class', "badge rounded-pill bg-danger");
    } else {
      document.getElementById(`resp${i}`).setAttribute('class', "badge rounded-pill bg-success");
    }
  }
}


function next() {
  try {handler.pause();} catch {} 
  console.log(`todas as respostas: ${all_answers.length}`);
  respostas_possiveis = [...all_answers];
  resp_correta = Math.floor(Math.random()*5); // Índice da Resposta 
  index_resposta = Math.floor(Math.random()*all_answers.length)
  text_correta = respostas_possiveis[index_resposta]; // Texto ta resposta
  respostas = [];
  //console.log(respostas_possiveis)
  respostas_possiveis.pop(index_resposta);
  for (i = 0; i < 5; i++){
    console.log(respostas_possiveis.length)
    if (i == resp_correta){
      respostas.push(text_correta);
    } else {
      indice = Math.floor(Math.random()*respostas_possiveis.length);
      respostas.push(respostas_possiveis[indice]);
      console.log(respostas_possiveis[indice])
      respostas_possiveis.pop(indice);
    }
  }
  console.log('-----------------------------------');
  console.log(respostas_possiveis);
  document.getElementById("respostas").innerHTML = "";
  
  for (i = 0; i < respostas.length; i++){
    document.getElementById("respostas").innerHTML = document.getElementById("respostas").innerHTML + `<span id="resp${i}" class="badge rounded-pill bg-secondary" onclick="answer()"><h2>${respostas[i]}</h2></span>`;
  }
  play();
  
}
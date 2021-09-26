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
let audios = {"Alvorada":"alvorada.wav","Bandeira Nacional":"bandeira_nacional.wav","Banho de Água Doce":"Banho_de_agua_doce.wav","Cabo de dia":"Cabo de dia.wav","Imediato":"imediato.wav","Inspeção":"inspecao.wav","Licenciados Formar":"licenciados_formar.wav","Ronda":"mila-ronda.wav","Oficial Intermediário Comandante no próprio":"oficial_intermediário_comandante_no_proprio.m4a","Oficial Superior Comandante no próprio":"oficial_superior_comandante_no_proprio.m4a","Oficial Superior Indo a bordo":"oficial_superior_indo_a_bordo.m4a","Polícia":"Policia.wav","Rancho para Serviço":"rancho_servico.m4a","Render Serviço":"render_servico.wav","Reunir Geral":"reunir_geral.m4a","Silêncio":"silencio.wav","Sinaleiro":"sinaleiro.wav","Uniforme":"Uniforme.wav"};

let all_answers = Object.keys(audios);
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
  respostas = [];
  resp_correta = Math.floor(Math.random()*5);
  text_correta = all_answers[Math.floor(Math.random()*all_answers.length)];
  
  for (i = 0;respostas.length < 5; i++){
    outro = all_answers[Math.floor(Math.random()*all_answers.length)];
    if (i == resp_correta){
      respostas.push(text_correta);
    } else {
      if (outro != resp_correta){
        Add=true;
        for (let c = 0; c < respostas.length; c++) {
          if (respostas[c] == outro){
            Add=false;
            break;
          }
        }
        if (Add == true){
          respostas.push(outro)
        }
      }else{pass;}
    }
  }
 
  document.getElementById("respostas").innerHTML = "";
  
  for (i = 0; i < respostas.length; i++){
    document.getElementById("respostas").innerHTML = document.getElementById("respostas").innerHTML + `<span id="resp${i}" class="badge rounded-pill bg-secondary" onclick="answer()"><h2>${respostas[i]}</h2></span>`;
}
  play();
  
}
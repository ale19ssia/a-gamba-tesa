const domande = [
  "È possibile costruire un’idea autentica di sé, se si nasce e si muore soli, senza mai essersi riflessi nello sguardo di un altro?",
  "L’identità è innata, oppure la costruiamo per tutta la vita cercando solo di assomigliare a ciò che crediamo o vogliamo essere?",
  "Siamo davvero capaci di distinguere ciò che desideriamo da ciò che ci è stato insegnato a volere?",
  "La coerenza è sempre una virtù, o può trasformarsi in una prigione narrativa che ci impedisce di cambiare?",
  "È ancora possibile essere innocenti in una società iperconsapevole? Dove \"innocenza\" non significa ignoranza, ma la capacità di credere, fidarsi, sentire senza sovraccaricare tutto di significato o sospetti; dove \"iperconsapevole\" significa vivere in una società in cui tutto viene spiegato o smontato, i sentimenti etichettati, e il pensiero più diffuso è che la sincerità sia pericolosa perché sinonimo di debolezza.",
  "L’identità digitale è una maschera che costruiamo per piacere agli altri, o può rappresentare una nuova forma di autenticità, capace di esprimere parti di noi che nella vita reale resterebbero nascoste?",
  "Il bisogno di sentirsi approvati dagli altri è qualcosa di naturale per l’essere umano (ne ha veramente bisogno), o nasce da una cultura che ci ha insegnato a valere solo se piacciamo (ci hanno insegnato a desiderarla)?",
  "Essere vulnerabili è davvero un difetto da nascondere, o può essere una delle forme più coraggiose di autenticità?",
  "In un sistema che misura il valore delle persone attraverso efficienza, risultati e visibilità, è ancora possibile preservare la propria autenticità senza snaturarsi?",
  "“Rispettiamo” davvero per scelta morale, o solo per non finire sotto processo sociale?"
];

function lanciaDomanda() {
  const random = Math.floor(Math.random() * domande.length);
  document.getElementById('domanda').innerText = domande[random];
}

function salvaRisposta() {
  const domanda = document.getElementById('domanda').innerText;
  const risposta = document.getElementById('risposta').value;
  if (!domanda || !risposta) return;

  const storico = JSON.parse(localStorage.getItem('storico')) || [];
  storico.push({ domanda, risposta, data: new Date().toLocaleString() });
  localStorage.setItem('storico', JSON.stringify(storico));
  document.getElementById('risposta').value = '';
  mostraStorico();
}

function mostraStorico() {
  const storico = JSON.parse(localStorage.getItem('storico')) || [];
  const div = document.getElementById('storico');
  div.innerHTML = '';
  storico.reverse().forEach(entry => {
    const blocco = document.createElement('div');
    blocco.innerHTML = `<p><strong>Domanda:</strong> ${entry.domanda}</p>
                        <p><strong>Risposta:</strong> ${entry.risposta}</p>
                        <p><em>${entry.data}</em></p><hr>`;
    div.appendChild(blocco);
  });
}

mostraStorico();

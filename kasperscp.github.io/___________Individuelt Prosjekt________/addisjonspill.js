// Sett opp timer og tellere
var tidIgjen = 60; // 60 sekunder
var antallRiktigeSvar = 0;

// Funksjon som starter timeren
function startTimer() {
  setInterval(function() {
    tidIgjen--;
    document.getElementById("tid").innerHTML = tidIgjen;
    if (tidIgjen <= 0) {
      avsluttSpill();
    }
  }, 1000);
}

// Funksjon som genererer en ny oppgave og spør brukeren om svar
function nesteOppgave() {
  // Velg tilfeldige tall mellom 1 og 10
  var tall1 = Math.floor(Math.random() * 10) + 1;
  var tall2 = Math.floor(Math.random() * 10) + 1;

  // Regn ut riktig svar
  var riktigSvar = tall1 + tall2;

  // Spør brukeren om å svare på spørsmålet
  var brukersvar = prompt("Hva er " + tall1 + " + " + tall2 + "?");

  // Sjekk om svaret er riktig og gi brukeren tilbakemelding
  if (brukersvar == riktigSvar) {
    antallRiktigeSvar++;
    document.getElementById("riktigeSvar").innerHTML = antallRiktigeSvar;
    alert("Riktig!");
  } else {
    alert("Feil. Riktig svar var " + riktigSvar + ".");
  }
}

// Funksjon som avslutter spillet og viser resultatet
function avsluttSpill() {
  clearInterval(timer);
  alert("Tiden er ute! Du fikk " + antallRiktigeSvar + " riktige svar.");
}

// Start timeren og vis oppgaven
startTimer();
nesteOppgave();
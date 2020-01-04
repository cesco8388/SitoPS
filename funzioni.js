var dati= [];
var dataTurno = [];
var tipoTurno = [];
var operatoreTurno = [];
var allRows ="";
var parole = [];

//Funzione che carica i nomi degli operatori nella tabella
function mostraDati(){
    var inizioOra = new Date();
    for(i=0; i < dati.length; i++) {
        var idTurno = dati[i].TipoTurno + dati[i].DataTurno;
        //console.log(idTurno);
        var elementoTHML = document.getElementById(idTurno);
        //if(elementoTHML.innerHTML === ""){
            elementoTHML.innerHTML = dati[i].OperatoreTurno;
        //}
    }
    var fineOra = new Date();
    console.log("ora inizio: " + inizioOra);
    console.log("ora fine: " + fineOra);
}

//Funzione che viene chiamata alla fine del caricamento della pagina HTML
function caricamentoPagina() {
    caricamentoDati();
    creazioneRighe(giorniDelMese());
}

//Funzione che restituisce il numero di giorni presenti nel mese corrente
function giorniDelMese() {
    var risultato = 0;
    switch(new Date().getMonth()){
        case 0:
            risultato = 31;
            break;
        case 1:
            risultato = 29;
            break;
        case 2:
            risultato = 31;
            break;
        case 3:
            risultato = 30;
            break;
        case 4:
            risultato = 31;
            break;
        case 5:
            risultato = 30;
            break;
        case 6:
            risultato = 31;
            break;
        case 7:
            risultato = 31;
            break;
        case 8:
            risultato = 30;
            break;
        case 9:
            risultato = 31;
            break;
        case 10:
            risultato = 30;
            break;
        case 11:
            risultato = 31;
            break;
    }

    return risultato;
}

//Funzione che crea le righe della tabella
function creazioneRighe(giorniDelMese) {
    for(var i=1; i<=giorniDelMese; i++) {

        var riga = document.createElement("tr");
        riga.id = i.toString();

        var cellaData = document.createElement("td");
        cellaData.id="Data" + i;
        cellaData.innerHTML = i.toString();

        var cellaBM = document.createElement("td");
        cellaBM.id="BM" + i;

        var cellaBP = document.createElement("td");
        cellaBP.id="BP" + i;

        var cellaRM = document.createElement("td");
        cellaRM.id="RM" + i;

        var cellaRP = document.createElement("td");
        cellaRP.id="RP" + i;

        var cellaBN = document.createElement("td");
        cellaBN.id="BN" + i;

        var cellaRN = document.createElement("td");
        cellaRN.id="RN" + i;

        riga.appendChild(cellaData);
        riga.appendChild(cellaBM);
        riga.appendChild(cellaBP);
        riga.appendChild(cellaRM);
        riga.appendChild(cellaRP);
        riga.appendChild(cellaBN);
        riga.appendChild(cellaRN);

        document.getElementById("tabellaTurni").appendChild(riga);
    }
}

//Funzione che carica i dati all'interno della lista
function caricamentoDati()
{
    dati.push(new Turno(1, "BM", "biancoMattino"));
    dati.push(new Turno(1, "BP", "biancoPomeriggio"));
    dati.push(new Turno(1, "RM", "rossoMattino"));
    dati.push(new Turno(1, "RP", "rossoPomeriggio"));
    dati.push(new Turno(1, "BN", "biancoNotte"));
    dati.push(new Turno(1, "RN", "rossoNotte"));

    dati.push(new Turno(1, "BM", "biancoMattino22"));
    dati.push(new Turno(2, "BP", "biancoPomeriggio"));
    dati.push(new Turno(2, "RM", "rossoMattino"));
    dati.push(new Turno(2, "RP", "rossoPomeriggio"));
    dati.push(new Turno(2, "BN", "biancoNotte"));
    dati.push(new Turno(2, "RN", "rossoNotte"));
}

function provaajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
        }
      };
    xhttp.open("GET", "dati.csv", true);
    xhttp.send();
}

function myFunction(CVS) {
    allRows = CVS.response;

    var i = 0;

    while(i <= allRows.length ) {
        var conteggiaParole = 0;
        var parola = "";
        while(allRows[i]!==";" && allRows[i]!=='\n') {
            parola += allRows[i];
            i++
        }

        parole[conteggiaParole] = parola;
        conteggiaParole++;
        //console.log(parola);
        i++;
    }
    
    console.log(parole.length);
}

//Definizione della classe che modella un turno
class Turno {
    constructor(dataTurno, tipoTurno, operatoreTurno){
        this._dataTurno = dataTurno;
        this._tipoTurno = tipoTurno;
        this._operatoreTurno = operatoreTurno;
    }

    get DataTurno() {
        return this._dataTurno;
    }

    get TipoTurno() {
        return this._tipoTurno;
    }

    get OperatoreTurno() {
        return this._operatoreTurno;
    }
}
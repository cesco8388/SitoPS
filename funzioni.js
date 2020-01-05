var dati= [];
// var dataTurno = [];
// var tipoTurno = [];
// var operatoreTurno = [];
var allRows ="";
var parole = [];

function inserisciCambio() {
    var stringaData = "1";
    var stringaTipoTurno = "BM";
    var stringaOperatore = "nuovo";
    var stringaCambio = stringaData + ";" + stringaOperatore + ";" + stringaTipoTurno + "\r";
    
}

//Funzione che carica i nomi degli operatori nella tabella
function mostraDati(){
    var inizioOra = new Date();
    for(i=0; i < dati.length; i++) {
        var idTurno = dati[i].TipoTurno.toString() + dati[i].DataTurno.toString();
        var elementoTHML = document.getElementById(idTurno);
        elementoTHML.innerHTML = dati[i].OperatoreTurno;
    }
    var fineOra = new Date();
    console.log("ora inizio: " + inizioOra);
    console.log("ora fine: " + fineOra);
}

//Funzione che viene chiamata alla fine del caricamento della pagina HTML
function caricamentoPagina() {
    caricamentoDati();
    creazioneRighe(giorniDelMese());
    mostraDati();
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
        cellaData.id="Data" + i.toString();
        cellaData.innerHTML = i.toString();

        var cellaBM = document.createElement("td");
        cellaBM.id="BM" + i.toString();

        var cellaBP = document.createElement("td");
        cellaBP.id="BP" + i.toString();

        var cellaRM = document.createElement("td");
        cellaRM.id="RM" + i.toString();

        var cellaRP = document.createElement("td");
        cellaRP.id="RP" + i.toString();

        var cellaBN = document.createElement("td");
        cellaBN.id="BN" + i.toString();

        var cellaRN = document.createElement("td");
        cellaRN.id="RN" + i.toString();

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
    letturaFileCVS();

    //console.log(parole.length-1);

    var i;
    for(i = 0; i <= (parole.length-1); i=i+3) {
        dati.push(new Turno(parole[i].toString(), parole[i+2].toString(), parole[i+1].toString()));
    }
}

function letturaFileCVS() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            conversioneCVSinParole(this);
        }
      };
    xhttp.open("GET", "dati.csv", false);
    xhttp.send();
}

function conversioneCVSinParole(CVS) {
    allRows = CVS.response;

    var i = 0;
    var parola = "";

    while(i <= allRows.length ) {
        
        if(!(allRows[i]!==";" && (allRows[i]!=='\n'))) {
            parole.push(parola);
            parola ="";
            i++
            continue;
        }

        if(allRows[i]!=='\n' && allRows[i]!=='\r') {
            parola += allRows[i];
        }
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
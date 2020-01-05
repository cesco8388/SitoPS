var dati= [];
// var dataTurno = [];
// var tipoTurno = [];
// var operatoreTurno = [];
var allRows ="";
var parole = [];

//Funzione che carica i nomi degli operatori nella tabella
function mostraDati(){
    var inizioOra = new Date();
    for(i=0; i < dati.length; i++) {
        var idTurno = dati[i].TipoTurno.toString() + dati[i].DataTurno.toString();
        console.log("*"+idTurno+"*");
        var elementoTHML = document.getElementById(idTurno);
        //console.log(elementoTHML.id);
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
    /*parole.push("1");
    parole.push("BM");
    parole.push("treter");
    dati.push(new Turno(parole[0].toString(), parole[1].toString(), parole[2].toString()));*/


    /*
    dati.push(new Turno("1", "BM", "biancoMattino"));
    dati.push(new Turno(1, "BP", "biancoPomeriggio"));
    dati.push(new Turno(1, "RM", "rossoMattino"));
    dati.push(new Turno(1, "RP", "rossoPomeriggio"));
    dati.push(new Turno(1, "BN", "biancoNotte"));
    dati.push(new Turno(1, "RN", "rossoNotte"));

    dati.push(new Turno(2, "BM", "biancoMattino22"));
    dati.push(new Turno(2, "BP", "biancoPomeriggio"));
    dati.push(new Turno(2, "RM", "rossoMattino"));
    dati.push(new Turno(2, "RP", "rossoPomeriggio"));
    dati.push(new Turno(2, "BN", "biancoNotte"));
    dati.push(new Turno(2, "RN", "rossoNotte"));
    */

    provaajax();
//console.log(parole[0].toString());

  
    var i;
    for(i = 0; i <= 120; i=i+3) {
        dati.push(new Turno(parole[i].toString(), parole[i+2].toString(), parole[i+1].toString()));
        //console.log(parole[i]);
    }
    console.log(dati[1].TipoTurno +" " + dati[1].DataTurno + " " + dati[1].OperatoreTurno);
    
}

function provaajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
        }
      };
    xhttp.open("GET", "dati.csv", false);
    xhttp.send();
}

function myFunction(CVS) {
    allRows = CVS.response;

    var i = 0;
    var parola = "";

    while(i <= allRows.length ) {
        
        if(!(allRows[i]!==";" && allRows[i]!=='\n')) {
            parole.push(parola);
            //console.log(parola);
            parola ="";
            i++
            continue;
        }

        parola += allRows[i];
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
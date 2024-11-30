function mailto() {
    nom = document.getElementById('nom').value;
    cognom = document.getElementById('cognom').value;
    email = document.getElementById('email').value;
    telefon = document.getElementById('telefon').value;
    genere = document.getElementById('genere').value;
    joc = document.getElementById('joc').value;
    comanda = document.getElementById('comanda').value;
    missatge = document.getElementById('missatge').value;

    intro = "El client/a " + nom + " " + cognom + " s'ha posat en contacte amb l'empresa NoSalgsa.";
    message = "Feetback:\n" + missatge;
    outro = "Es pot posar amb contacte amb el client/a a través del correu electrònic (" + eamil + ") o per telèfon (" + telefon + ").";

    subject = "#" + comanda + ": " + joc;
    body = intro + "\n" + message + "\n" + outro;

    mail = "mailto:popo418@vidalibarraquer.net?subject=" + subject + "&body=" + body;

    window = window.open(mail);
}
// console.log(process.memoryUsage());

const fs = require("fs");


// Events
process.on("data", (data) => { // Das ist ein Eventhandler
    console.log("Das ist die Reaktion auf ein Event", data);
});

process.on("beforeExit", () => {
    console.log("Gleich ist Schluss!");
});

process.on("uncaughtException", (e) => {
    console.log("Ein Fehler ist passiert!", e); // Das ist eine Ausgabe die erscheint, wenn eine unbehandelte Exception auftritt
});

// Asynchrone Ausführung

// 1. Asynchrone Input/Output-Ströme

console.log("1");
console.log("2");
// throw(new Error("Unbehandelter Fehler"));
process.emit("data", { data: "Das sind meine Daten" }); // Das ist das Auslösen des Events

console.log("3");

// Lies die Datei ein und gebe sie als String aus
console.log("Vor dem Dateilesen");

fs.readFile("input.txt", (err, file) => { // Das ist Callback-Variante (klassisch)
    if (err) {
        console.error(err);
    } else {
        console.log(file.toString());
    }
});

// Das ist synchrone Variante - einfacher zu verstehen, aber ineffizient weil sie den Programmfluss blockiert
const file = fs.readFileSync("input.txt").toString();
console.log(file);
console.log("Nach dem Dateilesen");

// Promise

// Variante mit Promise und then() bzw. catch()
const myPromise = new Promise((resolve, reject) => {
    const ergebnis = 1 + 2;
    setTimeout(() => resolve(ergebnis), 1000);
    // setTimeout(() => reject("ERROR"), 1000);
}).then(ergebnis => { console.log("Die Promise hat folgendes Ergebnis:", ergebnis); })
    .catch(reject => { console.error("Fehler!") });

// Variante mit Async/Await
const myOtherPromise = new Promise((resolve, reject) => {
    const ergebnis = 1 + 2;
    setTimeout(() => resolve(ergebnis), 1000);
});

async function testMitAwait() {
    const ergebnis = await myOtherPromise;
    console.log("Ergebnis mit await", ergebnis);
}

async function lesenMitAwait() {
    // const file = fs.readFileSync("input.txt").toString();
    try {
        const file = await fs.promises.readFile("input.txt2");
        console.log("Datei lesen mit await", file.toString());
    } catch (e) {
        console.error("CATCH", e);
    }
}

lesenMitAwait();
testMitAwait();
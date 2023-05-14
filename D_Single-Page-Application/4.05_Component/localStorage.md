# LocalStorage Wichtige Befehle

LocalStorage ermöglicht das Speichern von Schlüssel-Wert-Paaren im Webbrowser des Benutzers. Daten in LocalStorage sind dauerhaft und bleiben auch nach dem Schließen des Browsers erhalten. Im Folgenden werden die wichtigsten Befehle im Zusammenhang mit LocalStorage kurz erläutert:

- `localStorage.setItem(key, value)`: Speichert einen Wert unter dem angegebenen Schlüssel.
  - `key`: Der Schlüssel, unter dem der Wert gespeichert wird (String).
  - `value`: Der zu speichernde Wert (String).

- `localStorage.getItem(key)`: Ruft den Wert ab, der unter dem angegebenen Schlüssel gespeichert ist.
  - `key`: Der Schlüssel, unter dem der Wert gespeichert ist (String).
  - Gibt den gespeicherten Wert zurück oder `null`, wenn der Schlüssel nicht existiert.

- `localStorage.removeItem(key)`: Entfernt den Wert, der unter dem angegebenen Schlüssel gespeichert ist.
  - `key`: Der Schlüssel, unter dem der Wert gespeichert ist (String).

- `localStorage.clear()`: Entfernt alle Schlüssel-Wert-Paare aus LocalStorage.

- `JSON.stringify(objekt)`: Konvertiert ein JavaScript-Objekt in einen JSON-String.
  - `objekt`: Das JavaScript-Objekt, das in einen JSON-String konvertiert werden soll.

- `JSON.parse(jsonString)`: Konvertiert einen JSON-String in ein JavaScript-Objekt.
  - `jsonString`: Der JSON-String, der in ein JavaScript-Objekt konvertiert werden soll.

## Beispiel
### Object

```javascript
// Speichere ein Objekt in LocalStorage
const person = {
  name: "Max",
  age: 30
};
localStorage.setItem("person", JSON.stringify(person));

// Lade das Objekt aus LocalStorage
const storedPerson = JSON.parse(localStorage.getItem("person"));

// Entferne das Objekt aus LocalStorage
localStorage.removeItem("person");

// Lösche alle Elemente aus LocalStorage
localStorage.clear();
```

### Array

```javascript
// Definiere ein Array
let array = ['Apfel', 'Banane', 'Kirsche'];

// Konvertiere das Array in einen String und speichere es in localStorage
localStorage.setItem('meinArray', JSON.stringify(array));

// Hole die Daten aus localStorage und konvertiere sie zurück in ein Array
let abgerufeneDaten = localStorage.getItem('meinArray');
let abgerufenesArray = JSON.parse(abgerufeneDaten);

console.log(abgerufenesArray); // das sollte ['Apfel', 'Banane', 'Kirsche'] ausgeben
```



## Unterschied zwischen LocalStorage und SessionStorage

LocalStorage und SessionStorage sind beide Web-Storage-APIs, aber sie haben unterschiedliche Verwendungszwecke und Lebensdauern:

- `LocalStorage`: Die Daten in LocalStorage sind dauerhaft und bleiben auch nach dem Schließen des Browsers erhalten. LocalStorage ist nützlich, um Daten zwischen verschiedenen Sitzungen oder Besuchen des Benutzers zu speichern.

- `SessionStorage`: Die Daten in SessionStorage sind nur für die Dauer einer Browser-Sitzung verfügbar. Sie werden gelöscht, sobald der Benutzer den Browser schließt oder die Sitzung beendet. SessionStorage ist nützlich, um Daten während einer einzelnen Sitzung oder einem Besuch des Benutzers zu speichern.

Weitere Informationen findest du auf [mediaevent.de](https://www.mediaevent.de/javascript/local-storage.html).
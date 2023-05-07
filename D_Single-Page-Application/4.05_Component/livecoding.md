

Wir sind in dem Tutorial in Part zwei stehengeblieben, den wir fast komplett zu Ende gemacht haben
- das nächste Kapitel ist “Rendering the TodoItem Component”
Nachdem das “Rendering the TodoItem Component” Kapitel zu Ende ist, war mein Plan folgender:
Folgende Aufgabe für die TN:

# SPA-react-movielist
Beschreibung Aufgabe: https://github.com/22-d08-a/SPA-react-movielist/blob/main/README.md
Übersicht: https://classroom.github.com/classrooms/116103094-22-d08-a-classroom/assignments/spa-react-movielist
Link Aufgabe: https://classroom.github.com/a/64M05bCt

Danach wollte ich die TN in das Thema *state als Hook* einführen, bevor es weiter im  Praxis-Teil des Tutorials geht. Wir hatten schon darüber gesprochen, aber es noch nicht in die Tat umgesetzt.
um kein neues Projekt erstellen zu müssen, würde ich in der Todo-App eine neue Komponente erstellen und dort state an Hand eines simplen live codings zeigen
- components/practise/state/[KomponentenName.jsx]

## eine Beispiel-Live-Coding Vorlage
Einführung in Thema State als Hook: Live Coding Beispiel
coden in Todo App: components/practise/state/showQuote.js
Show/Hide Text Component:
zunächst OHNE “quote” state
erst im zweiten Schritt
```
import { useState } from 'react';

const QuoteBox = () => {
const [isVisible, setIsVisible] = useState(false);
const [quote, setQuote] = useState('No Quote'); // erst in Schritt 2

// erst in Schritt 2
const getRandomQuote = () => {
const quotes = [
"Life is what happens when you're busy making other plans.",
"The purpose of our lives is to be happy.",
"Life is short, and it's up to you to make it sweet.",
"You only live once, but if you do it right, once is enough.",
"Many of life's failures are people who did not realize how close they were to success when they gave up.",
];

const randomIndex = Math.floor(Math.random() * quotes.length);
return quotes[randomIndex];
};


const handleVisibility = () => {
setIsVisible(!isVisible);
};

// erst in Schritt 2
const handleNewQuote = () => {
const newQuote = getRandomQuote();
setQuote(newQuote);
};

return (
<div>
<button onClick={handleVisibility}>
{isVisible ? 'Hide Quote' : 'Show Quote'}
</button>


        
<button onClick={handleNewQuote}>New Quote</button> // erst in Schritt 2

{isVisible && <p>{quote}</p>}
</div>
);
};

export default QuoteBox;
```

Anschließend würde ich die TN eine kleine Übung zu State machen lassen, ebenfalls im Todo-App Projekt. Eine Beispiel-Übung.
## kleine Übung zu State:
## State-Übung: Counter
Erstelle eine neue React-Komponente namens Counter im ToDo-App Projekt in components/practise/state/counter.js

In der Counter-Komponente, nutze useState um einen State für den Zähler zu erstellen. Dieser sollte anfangs auf 0 gesetzt sein.
Zeige den aktuellen Zählerstand auf dem Bildschirm an, z.B in einem Paragraphen `<p>`
Füge einen Button hinzu, der bei jedem Klick den Zähler um eins erhöht.

Lösung:
```
import { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0);

return (
<div>
<p>Der Zähler steht auf: {count}</p>
<button onClick={() => setCount(count + 1)}>
Zähler erhöhen
</button>
</div>
);
}
export default Counter;
```

in dieser Aufgabe würde ist bewusst die Callback Function in setCount(count + 1) weglassen , damit es für die TN einfacher ist. Ich würde es aber in einem Kommentar erwähnen, dass hier callback fn besser wären und wir noch später drüber sprechen



Anschließend würde es mit Part 5 im Tutorial weitergehen (Part 3 und 4 dienen der Erklärung von state und gehen schon relativ weit – zu weit meiner Meinung nach)
Link zu Part 5: https://ibaslogic.com/react-form-handling/


import React from "react";
// React.useState() dient zum Import von Hooks, welche als Objekte vom gesamten React Projekt importiert werden können
// Destructuring in imports im React ist sehr häufig, aufgrund von geringerer Schreibweise und weniger import LineOfCode
import React, { useState, useEffect } from "react";

import Detailpage from "/Detailpage";
//-> React Component import, zu erkennen an der relativen Pfad Notation und keine Dateiendung => Standarddateiformat .js oder .jsx
// import DogImg from '../img/dog.png';
// -> Dateiimport von z.B. Bildern, CSS, Animationen, zu erkennen an der relativen Pfad Notation und der explizieten Dateiendung

//React Functional Component, keine Class Component
// Functional Component ist eine ES5 oder ES6 function, welche am Ende export wird und wir im return() Zugriff auf HTML und JavaScript mit JSX haben, z.B. kann dieser Wechsel durch {} durchgeführt werden

function App() {
  const isCool = false;

  // React Hooks zum verarbeiten/anzeigen/speichern/validieren/manipulieren von den Daten innerhalb einer Componte
  // 1. useState() -> useState per getter und setter zum globalen speichern von Daten
  // Im useState können wir unsere Start Datenstruktur defnieren
  const [allPosts, setAllPosts] = useState([]);

  function addTwoNumbers(a,b){
    return a+b;
  }

  // 2. useEffect()
  // Hook
  // Der Code vom useEffect wird durch den React Render Lifecycle IMMER als erster ausgeführt!
  // Jede wichtige Überprüfung/Ladevorgang/Checks können wir hiermit VOR dem rendern des return() durchfüren
  // Ladeverhalten durch den Dependency Array einmalig oder wenn sich eine Variable ändert
  useEffect(() => {
    console.log("wird ausgeführt vor dem HTML return");
    const localStorageCheckerData = JSON.parse(localStorage.getItem("oldData"));
    if (localStorageCheckerData){
      setAllPosts(localStorageCheckerData)
    } else {
      loadAllPosts();
    }
  }, []); 
  // Der Dependency Array steht für das einmalige laden oder wenn sich eine Variable ändert. Wenn dieser Array leer ist, wird es einmalig ausgeführt oder wenn Ihr einen Variablennamen hineinschreibt, jedes mal, wenn dieser Variablenname sich ändert.
  
  // Aufgabe: Vorladestatus zum Laden der Internetdaten
  // Internetdaten kommen aus dem JSONPlaceHolder API(Application Programming Interface) Aufruf
  const loadAllPosts = async() =>{
    // Aufruf von der Adresse in Form einer HTTP Nachricht in der GET Methode
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await data.json();
    // res ist ein entschlüsseltes JavaScript Datenstruktur Element
    setAllPosts(res);
    localStorage.setItem("oldData", JSON.stringify(res));
  };

  return (
    // Ein Elternelement im Return ist zwingend notwendig
    // Aus einer Eltern Komponente, z.B. App können wir an Kindkomponenten Daten/Eigenschaften schicken. Wir schicken die Daten als sogenannten Prop. Die Props haben immer ein Key:Value Verhältnis. Der PropKeyName z.B. freitag können wir selber defieren und der KeyValue ist der exakte Werte aus einer Variablen z.B. allPosts oder isCool
    <div className="App">
      {allPosts.map((post,index)=>(
        <div key={index} className="allPosts">
          <DetailPage 
            post={post}
          />
        </div>
      ))}
       {/* <DetailPage 
          freitag="def" 
          allPosts={allPosts} 
          isCool={isCool} 
          setAllPosts={setAllPosts}
          addTwoNumbers={addTwoNumbers}
      /> */}
    </div>
  );
}

export default App;

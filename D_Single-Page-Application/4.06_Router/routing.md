# Routing
Viele Webanwendungen werden als sog. Single-Page-Webanwendungen (single page applications) erstellt. Dabei besteht eine Webanwendung aus nur einem HTML-Dokument, dessen Inhalt dynamisch nachgeladen wird. Die darzustellenden Bereiche werden dabei nicht verlinkt sondern auf der selben Seite ein- bzw. ausgeblendet.

Dieses Modell stößt jedoch bei komplexen Anwendungen schnell an Grenzen. In der Standardinstallation ist React.js zur Entwicklung von Single-Page-Webanwendungen ausgelegt.

Sollen mit React.js Multi-Page-Webanwendungen erstellt werden, muss React.js um das sog. **Routing** erweitert werden. 
Mit Routing können Komponenten Routen zugeordnet werden und so mit der URL auf bestimmte Komponenten verwiesen, d. h. geroutet, werden. React-Router hat sich hier als de facto Standard durchgesetzt. React-Router ist eine Bibliothek, die von einer großen Community entwickelt und gewartet wird und sowohl Client- als auch Server-seitiges Routing ermöglicht. 


- mit dem Routing kann man in einer react-Anwendung eine bestimmte Funktion einer URL zuordnen
- wenn man die URL `/users/max` aufruft, soll wahrscheinlich das Userprofil von `max` angezeigt werden


## in dieser Lektion erfährst du alles über
- BrowserRouter
- Link
- Route
- Redirect
- Switch



## installiert wird der React Router via:
`npm install --save react-router-dom`




## importieren BrowserRouter
`import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'`




### ganz außen an die Anwendung legt man die Komponente Router, dadurch befinden sich die anderen Komponenten in einem **Router context**

```
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return <Router>[...]</Router>;
};

ReactDOM.render(<App />, document.getElementById('root'));
```


## Routen definieren
Jede Komponente innerhalb des `<Router></Router>`-Elements kann nun auf den **Router Context** zugreifen, 
darauf reagieren und ihn steuern. 
Verschiedene Routen legen wir durch die Verwendung der Route-Komponente an, die eine path-Prop enthalten 
sollte (Ausnahme: 404 Fehler-Routen) und wahlweise eine render-Prop oder eine component-Prop enthält. 

Der Unterschied liegt hier darin, dass der Wert der `render-Prop` eine **Funktion** sein muss, die ein valides 
React-Element zurückgibt, während die `component-Prop` eine Komponente (kein Element!) erwartet.

```
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Example = () => <p>Example Komponente</p>;

const App = () => {
  return (
    <Router>
      <Route path="/example" component={Example} />
      <Route path="/example" render={() => <Example />} />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

Mit dem `„Route“-Element` kann von einer URL auf ein Element verwiesen werden. Wird die entsprechende URL in der Adresszeile des Browsers durch ein `„Link“-Element` aufgerufen, wird das entsprechende Element (i. d. R. eine React-Komponente) ausgeführt. Mit dem `„Routes“-Element` werden die `„Route“-Elemente` umschlossen



## Link, NavLink
Ein `<Link>` ist ein Element, das es dem Benutzer ermöglicht, zu einer anderen Seite zu navigieren, indem er darauf klickt oder tippt. In react-router-dom gibt `<Link>` ein zugängliches `<a>-Element` mit einer echten href wieder, die auf die Ressource verweist, auf die es verweist. Das bedeutet, dass Dinge wie das Klicken mit der rechten Maustaste auf einen `<Link>` so funktionieren, wie Sie es erwarten würden.

Mit dem `<Link>-Element` können URL‘s definiert werden, die beim Anklicken des Links in der Adresszeile des Browsers gesetzt werden: 

```
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import NotFound from './NotFound'
import Home from './Home'
import About from './About'

function App() {

  return (
    <>
      <h1>Browser Router</h1>
      <Router>
        <nav>
          <NavLink to='/' activeClassName='active'>Home</NavLink>
          <NavLink to='about' activeClassName='active'>About</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='/about' element={<About />}>About</Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
```

### NavLink
Ein `<NavLink>` ist eine besondere Art von `<Link>`, die weiß, ob sie "aktiv" oder "ausstehend" ist. Dies ist nützlich beim Aufbau eines Navigationsmenüs, z. B. eines Breadcrumbs oder einer Reihe von Registerkarten, bei denen Sie anzeigen möchten, welche davon gerade ausgewählt ist. Es liefert auch nützlichen Kontext für Hilfstechnologien wie Screenreader.


## Matching einschränken via Prop

Um das Matching zwischen dem path und der URL bewusst einzuschränken, bietet uns React Router die exact 
Prop auf der Route-Komponente. Wird diese Boolean-Prop angegeben, wird eine Route nur noch dann gerendert, 
wenn ihre path-Prop auch exakt mit der aktuellen URL übereinstimmt:

`<Route exact path="/" component={Home} />`



## Matching auf eine Route limitieren via Switch-Komponente

Haben wir eine Reihe von URLs, von denen in bestimmten Fällen mehrere Routen matchen können, wird das 
mitunter mühsam, jeder einzelnen dieser Routen eine weitere Prop hinzuzufügen. Hier hilft uns der 
nächste Import aus dem React Router Paket weiter: `Switch`.

Mit der Switch-Komponente, die sich um eine Reihe von <Route />-Elementen legt, sorgen wir dafür, dass 
jeweils immer nur die erste Route, deren path mit der aktuellen URL übereinstimmt, gerendert wird. 

Oft ist es keine schlechte Idee, Routen grundsätzlich in einem Switch-Element zu verpacken, außer man 
möchte eben explizit, dass mehrere Routen gerendert werden. Statt der Verwendung der exact-Prop, wäre 
auch die Verwendung der Switch-Komponente möglich:


```
<Router>
  <Switch>
    <Route path="/account" component={Account} />
    <Route path="/" component={Home} />
  </Switch>
</Router>
```



## Outlet component
Die `'Outlet'-Komponente` ist ein wesentlicher Bestandteil des React Router V6 und wird verwendet, um den gerenderten Inhalt anzuzeigen, der auf der Grundlage der aktuellen URL geroutet wird. Sie ist eine Art Containerkomponente, die andere Routenkomponenten umschließt. Wenn eine Route aktiv ist, wird ihr Inhalt innerhalb der `'Outlet'-Komponente` gerendert.

```
import { BrowserRouter as Router, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          {/* ...Navigationselemente... */}
        </nav>

        {/* Routen und deren Komponenten */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Outlet-Komponente für den gerenderten Inhalt */}
        <Outlet />
      </div>
    </Router>
  );
}

```

In diesem Beispiel werden die Routen `'/about'` und `'/contact'` zu ihren entsprechenden Komponenten geroutet. Die `'Outlet'-Komponente` wird verwendet, um den gerenderten Inhalt anzuzeigen, der von den aktiven Routenkomponenten zurückgegeben wird.

Es ist wichtig zu beachten, dass die `'Outlet'-Komponente` nur innerhalb der Hierarchie von Routenkomponenten verwendet werden kann, da sie den gerenderten Inhalt der darunterliegenden Routen anzeigt.


## Route: index
Bestimmt, ob die Route eine Index-Route ist. Index-Routen werden im Outlet ihrer Eltern unter der URL ihrer Eltern gerendert (wie eine Standard-Childroute).

```
<Route path="/teams" element={<Teams />}>
  <Route index element={<TeamsIndex />} />
  <Route path=":teamId" element={<Team />} />
</Route>
```

[Index Routes](https://reactrouter.com/en/main/start/concepts#index-routes)



[Quelle und Material zum Weiterlesen (www.webtechnologien.com)](https://www.webtechnologien.com/advanced-tutorials/react-js/react-router/)

[Quelle und Material zum Weiterlesen (lernen.react-js.dev)](https://lernen.react-js.dev/ecosystem/routing)
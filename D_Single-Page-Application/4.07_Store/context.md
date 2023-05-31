---
title: Presenting - React Context API
theme: 'white'
---



# React Context API

---

> Context bietet eine Möglichkeit, Daten durch den Komponentenbaum zu leiten, ohne dass die props auf jeder Ebene manuell weitergegeben werden müssen

\- Source: [React JS Docs](https://reactjs.org/docs/context.html) 
<!-- .element: align="right" -->

---

## We will cover:

- The problem Context API solves
- When to use it
- When not to use it
- How to use it

---

## The problem Context API solves 🤔

---

- In React, Daten werden von oben nach unten (von Eltern zu Kindern) über props weitergegeben
- Manche props müssen an vielen Orten und von vielen Komponenten verwendet werden
- "prop drilling" kann eine echte Qual sein 😵
- Die Context-API bietet eine Möglichkeit, Werte zwischen diesen Komponenten auszutauschen, ohne props zu senden 😃👍

---

Example:

Your application has "themes"

- components might display differently depending on the theme

- For example, in one theme the button might be black - in the other, white


We can use the Context API to communicate this to the rest of the application


Notes: Make sure they know what a theme is

---

## When to use Context API

---

Context is designed to share data that can be considered “global” for a tree of React components

- If you don't need this, then don't use it! Remember, KISS!

- Don't use it if component state is good enough

- It makes component reuse more difficult


Notes: Don't overcomplicate your code

---

## When not to use Context API?

---

The general rule of good software development is to keep the code and architecture as simple as is necessary for the given needs while avoiding code anti-patterns.

---

Because of that,the state should be “lifted up” to the nearest common ancestor, and passed down through props.

---

When passing state or state-changing functions down as props would be too cumbersome, React Contexts might be the next simplest solution.

---

For more complex needs, the React Context API can be used in combination with Reducer Hooks, which is a slightly more advanced feature of React Hooks.

---

## How to use Context API

---

- React.createContext - Creates a Context object
- Context.Provider - Provides the data for the Context object
- Context.Consumer - Reads the data from the Context object
- Context.displayName - Debugging (React DevTools)

---

## How to use Context API

### React.createContext

---

```
const UserContext = React.createContext({
  currentUser: null,
});
```

---

## How to use Context API

### Context.Provider

---

```
<UserContext.Provider value={{ currentUser: currentUser }}>
</UserContext>
```

---

## How to use Context API

### Context.Consumer

---

```
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

---

## How to use Context API

### Context.displayName

---

```
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';
<MyContext.Provider> // "MyDisplayName.Provider" in DevTools
<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools
```


Nachteile: langsamer, mehr Schreibarbeit
Nutzen: bei themen(Änderung der Farben)

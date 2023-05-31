---
title: Presenting - Actions & Reducers
theme: 'white'
---

<!-- .slide: data-background="../_assets/4.05_Component-logo.png" -->

# Actions & Reducers

---

Context API logic can get complicated quickly

It can become hard to manage and maintain

That is where actions & reducers come into play

---

We use actions and reducers to isolate our state management logic from our components

---

## Actions

---

Actions are essentially predefined behaviors that our application can perform

For example, we might have a `showError` action, will tell our application that we would like to show an error

An action on its own does not perform the behaviors, it merely calls on the `reducer` - it is the `reducer` that does all the work!

---

Let's look at a typical **action**

---
```javascript
export const addQuestion = (text) => {
    return {
        type: "ADD_QUESTION",
        payload: text,
    };
};
```

---

### What's happening here?

- The action is just a function
- This function performs no logic - it just returns an **object**
- The **object** has 2 properties, _type_, and _payload_
- The _type_ is a re-usable string which we use to tell our reducer what action to perform
- the _payload_ is the data which the action carries - **this is optional!**

---

## Reducers

---

How many of you are familiar with the array reduce method?

Reducers work in the same way

We take multiple inputs, and "reduce" them to one output (state)

[Example](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

---

Reducers in Context API (and Redux) work in a similar way, but everything is related back to the application state

---

A reducer in Context API / Redux is essentially a giant `switch` statement

The `switch` statement matches the `type` of action

The _aim_ of this switch statement is to modify the state of the application

If no match is found, the default behavior is not to do anything (we leave the state untouched)

---

- This whole process is a pattern. It's not easy to intuit, you have to learn the pattern.

- It's also quite hard to remember. Nobody expects you to memorize how to do this - that's what documentation is for. It's enough to just know how it works.

Notes:

Patterns in programming

---

### Best practices

- SSOT (single source of truth) - Use `constants` for the action type - this reduces the chance of spelling errors
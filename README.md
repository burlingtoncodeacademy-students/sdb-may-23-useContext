# useContext Hook

## Intro

The purpose of useContext is to be able to use `context` within React. This tool allows us to teleport the data between components without having to explicitly chain props down the component tree. This is otherwise known as `prop-drilling` and it can get messy.

## Example

We want to pass `treasure` from `<App/>` component down to `<Distant/>` component. This requires us to pass `treasure` as `props` through every single component mount. **Messy and inefficient**

## Using Context

- [ ] In the parent component, import `useContext` and `createContext`
- [ ] Generate a single point of truth (aka context) `export const Context = createContext()`
- [ ] Within the `return()` of your fx component, encapsulate your child components using `<Context.Provider>` component.
- [ ] `<Content.Provider>` has a `value` prop which allows us to specify the data we want to pass to the children.
- [ ] Encapsulate `treasure` and `setTreasure` within the `value` prop as an array.
- [ ] Within the child component needing access to context, import `useContext` and `import { Context } from "../App<or wherever your context is located>"`
- [ ] Passing `Context` into `useContext()` hook will allow you to see the values we passed from parent into this single point of truth

# Project Live Link : https://customer-suppot-zone-sohag.netlify.app/


##### What is JSX, and why is it used?
JSX lets you embed HTML tags inside JavaScript code, which React then transforms into JavaScript objects that describe the UI.
# usecase:
Declarative and Readable UI Code
JSX lets you describe what the UI should look like in a familiar HTML-like syntax. This makes code easier to read and understand, especially for developers with front-end experience.

Component-Based Design
JSX fits naturally with React’s component architecture. You can easily create reusable UI components:

##### What is the difference between State and Props?
In React, State and Props are two fundamental concepts that work together to make components dynamic and interactive, but they serve different purposes.

Props (short for Properties) are pieces of data that are passed from a parent component to a child component. They are similar to function parameters in JavaScript — they allow you to send information into a component so it can display or use that data. However, props are read-only, meaning a component cannot modify its own props. For example, if you write <Welcome name="Sohag" />, the value "Sohag" is a prop that gets passed into the Welcome component and can be accessed using props.name. Props are mainly used to customize or configure components and make them reusable.

On the other hand, State is data that belongs to a component itself. It represents the component’s internal data, which can change over time — for example, when a user interacts with the UI. State is managed within the component and can be updated using setState() in class components or useState() in functional components. When the state changes, React automatically re-renders the component, showing the latest data on the screen.

Simply put, Props are used to pass data into a component, while State is used to manage data within a component. Props are immutable (cannot be changed), whereas State is mutable (can be changed). Props make components flexible and reusable, and State makes them interactive and dynamic.

##### What is the useState hook, and how does it work?
The useState hook is a built-in React function that lets you add state to functional components. It returns an array with two values — the current state and a function to update it. When the update function is called, React re-renders the component with the new state value.

Example:
const [count, setCount] = useState(0);

##### How can you share state between components in React?

In React, you can share state between components by lifting the state up to their common parent component. The parent holds the state using useState, and it passes the data and update functions down to child components via props.

##### How is event handling done in React?
In React, event handling is done using camelCase syntax (e.g., onClick, onChange) and functions as event handlers instead of strings. You pass the handler function as a reference, not as a string like in HTML.

Example:
function Button() {
  function handleClick() {
    alert('Button clicked!');
  }

  return <button onClick={handleClick}>Click Me</button>;
}
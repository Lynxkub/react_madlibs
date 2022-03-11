### Conceptual Exercise

Answer the following questions below:


- What is React? When and why would you use it?
<!-- React is a framework on top of node that helps create applications. A benefit of using React is that it lets you build components and reuse them throughout the application. You would use it to create an application -->
- What is Babel?
<!-- Babel is a library in node that translates JSX into javascript language -->
- What is JSX?
<!-- JSX allows developers to write HTML is javascript -->
- How is a Component created in React?
<!-- A component is a specific piece of data that is to be displayed on the application. It is rendered in the main app.js file.  -->
- What are some difference between state and props?
<!-- Props are not mutible, state is. Props allow data to be passed down between components, state is local to each specific component. -->
- What does "downward data flow" refer to in React?
<!-- Downward data flor referes to the flow of components in react. The parent component has the overall data compiled, but passes data down to child components and have them create the smaller parts for the parent component to render.  -->
- What is a controlled component?
<!-- A controlled component is form data that is handeled within the component ususally within state -->
- What is an uncontrolled component?
<!-- An uncontrolled component is form data that is handeled by the DOM -->
- What is the purpose of the `key` prop when rendering a list of components?
<!-- The key prop helps react keep track of different components throughout each different render cycle. So it can operate the way that the developer intends it to.  -->
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
<!-- Using an array index for a key prop is a poor choice becasue arrays can be mutated and items can move around, causing unreliable key ordering -->
- Describe useEffect.  What use cases is it used for in React components?
<!-- useEffect helps run side effects in react. Developers use useEffect when they need to fetch data , start timers , or clearing data. Use effect is called passivly when a specified piece of data is changed. -->
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
<!-- useRef returns an object that persists through renders that a developer can access to reference a specific DOM element. A change to a ref value does not cause a rerender of a component -->
- When would you use a ref? When wouldn't you use one?
<!-- You would use a ref when you want to reference a specific DOM element. You should not use a ref when toggling classes. -->
- What is a custom hook in React? When would you want to write one?
<!-- A custom hook in React is a hook created by the developer. They are generally used when there is some sort of 'business task' that needs to be operated multiple times throughout the application. They are not necessary to use, but can help with readabliity and can clean up code.  -->
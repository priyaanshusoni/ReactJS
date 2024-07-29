import './App.css'
import Button from './Button'
import Student from './Student'

//props => <Component key=value/> 


/* In React.js, props (short for properties) are used to pass data from a parent component to a child
component. Props are read-only and help in making components reusable and dynamic. They allow you to
customize and configure child components based on the data passed from the parent component. Props
are passed as attributes to components and can be accessed within the component using `this.props`
in class components or directly as an argument in functional components. */


/* In React, `propTypes` is a property that allows you to define the type of each prop that a component
should receive. It helps in validating the data types of props passed to a component and provides
warnings in the console if the data types do not match the expected types. This is particularly
useful for ensuring that components receive the correct data and for debugging potential issues
related to data types. */


/* In React.js, default props are used to define default values for props in a component. If a prop is
not provided when the component is used, the default value specified in the default props will be
used instead. This is helpful in cases where certain props are optional and you want to provide a
fallback value if they are not explicitly passed. */

function App() {
  
  return (
    
     
    <>
    <Student name="Priyanshu" age="18"  isStudent='True'   ></Student>
    <Student name="Manasvi" age="19"  isStudent='True'   ></Student>
    <Student name="Aastha" age="19"  isStudent='True'   ></Student>
    <Student name="Pankaj" age="22"  isStudent='True'   ></Student>
    <Student    isStudent='True'   ></Student>
    </>
  
  )
}

export default App


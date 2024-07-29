import PropTypes from 'prop-types'


function Student(props){
  return(
    <div>
        <p>Name: {props.name} </p>
        <p> Age: {props.age}</p>
       <p> isStudent: {props.isStudent}</p> 
    </div>
  )
}

Student.defaultProps = {
  name: "Guest",
  age:0,
}


Student.PropTypes={
 name: PropTypes.string,
 age: PropTypes.number  
//   😜
}

export default Student;
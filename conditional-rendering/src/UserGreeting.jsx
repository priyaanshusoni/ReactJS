import PropTypes from 'prop-types';

function UserGreeting(props) {

    const msg =  <h2 className="welcome">Welcome {props.username}</h2> 

    const please = <h2 className="login-prompt">Please log in to continue...</h2>
    return (  props.isLoggedIn ? msg : please  );
  }
  
  export default UserGreeting;
  

// function UserGreeting(props){
//    return(props.isLoggedIn ?
//      <h2 className="welcome">Welcome {props.username}</h2>
//       : <h2 className="login-prompt">please log in to continue...</h2>
//   )

// }


// export default UserGreeting


UserGreeting.propTypes={
    isLoggedIn: PropTypes.bool,
    username : PropTypes.string,
}

UserGreeting.defaultProps={
    isLoggedIn : false,
    username: 'Guest',
}
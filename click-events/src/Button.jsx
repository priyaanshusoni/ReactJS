function Button(){

    let count =0;


    const handleClick = (e)=> e.target.textContent="Clicked!";
        
        
    
        // const handleClick2= (name)=>{
        //      console.log(`${name} stop clicking me!`);
        // }
    
  return(
    <button onClick={(e)=>{handleClick(e)}}>Click Me 😊</button>
  )
}

export default Button
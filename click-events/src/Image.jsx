function Image(){
    
    const imgURL ='./src/assets/react.svg'

    const handleClick= (e)=> e.target.style.display='none';
    return(
       <img onClick={(e)=>{
            handleClick(e)
       }}    src={imgURL} alt="" />
    )
}

export default Image;
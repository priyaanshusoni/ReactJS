import React, {useState} from 'react'
function MyComponent(){
   const [name, setName]=useState('Default Name');

   const [age, setAge]= useState(0);

   const [ISEmployeed , setIsEmployeed] = useState(true);
   const updateName= ()=>{
     setName('Spongebob')
   }
   const updateAge= ()=>{
     setAge(age+1);
   }
   const updateIsEmployeed= ()=>{
     setIsEmployeed(!ISEmployeed);
   }
    return(
        <div>
            <p>Name:{name}</p>

            <button onClick={updateName}>Set Name</button>
            <p>Age:{age}</p>

            <button onClick={updateAge}>Set Age</button>
            <p>IsEmployed:{ISEmployeed ? "Yes" : "No"}</p>

            <button onClick={updateIsEmployeed}>Set Employement</button>
        </div>
    )

}

export default MyComponent
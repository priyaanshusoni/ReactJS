import { useState } from "react";

function ArrayUpdate(){

    const[foods, setFoods]= useState(['Apple','Orange','Banana'])


    function handleAddfood(){
        const newfood = document.getElementById('foodinput').value;
            
        document.getElementById('foodinput').value="";

        // setFoods([...foods,newfood]);

        setFoods(f=> [...f,newfood]);
    }

    function handleremoveFood(food){
             
    }       
    return(
 <div>
    <h2>List Of Food :</h2>
    <ul>
        {foods.map((food,index)=>  <li key={index}>{food}</li>)}
    </ul>

    <input type="text" id="foodinput" placeholder="Enter food name" />
    <button onClick={handleAddfood}>Add Food </button>

 </div> );
}

export default ArrayUpdate
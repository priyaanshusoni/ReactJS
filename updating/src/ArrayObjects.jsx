import React,{useState} from 'react';

function ArrayObjects(){
 const[cars,setCars] = useState([]);

const[caryear , setCarYear]=useState(new Date().getFullYear())
const[carmake , setCarMake]=useState('')
const[carmodel , setCarModel]=useState('')

function handleAddCar(){
const newCar= {
    year: caryear,
    make: carmake,
    model: carmodel,
}
setCars(c=>[...c , newCar])

setCarYear(new Date().getFullYear());
setCarMake('')
setCarModel(' ')
}

function handleRemoveCar(index){
  setCars(c=>c.filter((_,i)=>i!==index));
}

function handleYearChange(event){
    setCarYear(event.target.value)
}
function handleMakeChange(event){
setCarMake(event.target.value)
}
function handleModelChange(event){
setCarModel(event.target.value)
}


    return(
        <>
        <div>
            <h2>List Of Car Objects</h2>

            <ul>
                 {cars.map((car,index)=>
                 <li key={index} onClick={()=>handleRemoveCar(index)}>
                      {car.year} {car.make} {car.model}
                 </li>
                 
                 )}
            </ul>

            <input type="number" value={caryear} onChange={handleYearChange}/> <br />
            <input type="text" value={carmake} onChange={handleMakeChange} placeholder='Enter Car Make'/> <br />
            <input type="text" value={carmodel} onChange={handleModelChange} placeholder='Enter Car Model'/> <br />
           <button onClick={handleAddCar}>Add Car</button>
           
        </div>
        </>
    )
}

export default ArrayObjects;
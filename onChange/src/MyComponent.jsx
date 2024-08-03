import { useState } from 'react'
function MyComponent(){
const[name, setName] = useState('Guest');


const [quantity ,setQuantity] = useState(1);
const [comment ,setcomment] = useState('');

const [payment, setPayment]=useState('');
const [shiping, setShiping]=useState('');

function handleNameChange(event){
    setName(event.target.value)
}

function handleQuantityChange(event){
    setQuantity(event.target.value)
}
function handlecommentChange(event){
    setcomment(event.target.value)
}
function handlepayment(event){
    setPayment(event.target.value)
}
function handleShiping(event){
    setShiping(event.target.value)
}
return(
    <div>
          <input value={name}  onChange={handleNameChange}/>

          <p>Name:{name} </p>

          <input value={quantity} onChange={handleQuantityChange} type='number' />

          <p>Quantity :{quantity}</p>
          <input value={comment} onChange={handlecommentChange} placeholder='Enter Delivery Instructions' />

          <p>Comment :{comment}</p>

          <select value={payment} onChange={handlepayment} id="">
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="UPI">UPI</option>
          </select>

          <p>Payment Method : {payment}</p>


          <label >
            <input type="radio" value='Pick Up'
            checked={shiping==='Pick Up'}
            onChange={handleShiping}/>
            Pick up</label> <br />
          

          <label >
            <input type="radio" value='Delivery'
            checked={shiping==='Delivery'}
            onChange={handleShiping}/>
            Delivery</label> <br />

            <p>Shipping :{shiping}</p>
          
    </div>
);
   
    
}

export default MyComponent


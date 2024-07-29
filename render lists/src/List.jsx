// function List(){       




//  const fruits = ['apple', 'orange','banana','pineapple'];
//  fruits.sort();

//  const listitems = fruits.map(fruit=> <li>{fruit}</li>  )
//  return (          
//     <ol>{listitems}</ol>
//  );
// }

// export default List




function List(){
    const fruits = [{id:1,name: 'Apple' , calories: 400},
     {id:2,name: 'Orange' , calories: 45},
    {id:3,name: 'Banana',calories: 105},
    {id:4,name: 'Pineapple' , calories:159}];
   
   
    const listitems = fruits.map((fruit)=> <li key={fruit.id}>
        {fruit.name}: &nbsp;<b>{fruit.calories}</b> </li>  )
    return (          
       <ol>{listitems}</ol>
    );
   }
   
   export default List
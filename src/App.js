import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
    const products =[
      {name:'Photoshop',price:'$99.99'},
      {name:'Ilastator',price:'$69.99'},
      {name:'PDF reader',price:'$9.99'},
      {name:'bla bla',price:'$9.99'},
    ]
    const nayoks =['Rajjak', 'Joshim', 'Sakib', 'BappaRaj', 'Bappi','shuvo'];
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React person</p>
        <Counter></Counter>
        <User></User>
        <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
        </ul>
        {
          products.map(product => <Product product = {product}></Product>)
        }
        {/* <ul>
          <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li>
          <li>{nayoks[4]}</li>
        </ul> */}

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name = 'rakib' job ='student'></Person>
        <Person name ='rajib' job ='cricket'></Person>
        <Person name ='raji' job='vla vla'></Person> */}
      </header>
    </div>
  );
}
function Product(props){
      const productStyle = {
         border : '2px solid gray',
         borderRadius:'5px',
         backgroundColor:'blue',
         height:'200px',
         width:'500px',
         color:'#fff',
         boxShadow:'5px 5px 10px white'
      }
      const {name, price} = props.product;
       return (
         <div style ={productStyle}>
           <h5>{name}</h5>
       <h4>{price}</h4>
       <button>Buy Now</button>
         </div>
       )
}

function Person(props){
  return (
    <div style={{border:'2px solid red', width:'400px',margin:'20px'}}>
      <h2>My Name :{props.name} </h2>
      <h3>My profession:{props.job} </h3>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () =>  setCount(count + 1);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={()=>setCount(count-1)}>Decrease</button>
      <button onMouseMove={()=> setCount(count+1)}>Increase</button>
    </div>
  )
}

function User(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return (
    <div>
      <h3>Dynamic Users :{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.title}</li>)
        }
      </ul>
    </div>
  )
}



export default App;

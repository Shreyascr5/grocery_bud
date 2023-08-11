import './App.css';
import React, { useState } from 'react';
import List from "./List";
import Alert from "./Alert";

function App() {
  const[name,setName]=useState('');
  const[list,setList]=useState([]);
  const[isEditing,setIsEditing]=useState(false);
  const[editID,setEditID]=useState(null);
  const[alert,setAlert]=useState({
    show:false,
    msg:'',
    type:''
  })
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("clicked")
    if(!name){
      //show alert
    }
    else if(name && isEditing){
      //deal with edit
    }
    else{
      //show alert
      const newItem={id:new Date().getTime().toString(), title: name};
      setList([...list,newItem]);
      setName('');
    }
  }
  return (
    <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert/>}
      <h3>Grocery bud </h3>
      <div className="form-control">
      <input type="text" className='grocery' placeholder='eg. Apples' value={name} onChange={(e)=>{
        setName(e.target.value);
      }}

      />
      <button type='submit' className='submit-btn'>
        {isEditing? "Edit":"Submit"}
      </button>
      </div>
    </form>
    <div className="grocery-container">
      <List items={list}/>
      <button className='clear-btn'>clear items</button>
    </div>

    </section>
  );
}

export default App;

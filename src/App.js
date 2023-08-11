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
  const showAlert=(show=false,type=" ",msg=" ")=>{
    setAlert({show,type,msg});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("clicked")
    if(!name){
      //show alert
      showAlert(true,"danger","Enter a grocery");
    }
    else if(name && isEditing){
      //deal with edit
    }
    else{
      //show alert
      showAlert(true,"success","Grocery added to the list")
      const newItem={id:new Date().getTime().toString(), title: name};
      setList([...list,newItem]);
      setName('');
    }
  }
  const clearList=()=>{
    showAlert(true,"danger","Empty List")
    setList("");
  }
  const removeItem=(id)=>{
    showAlert(true,"danger","Grocery item removed")
    setList(list.filter((item)=> item.id!==id))
  }
  const editItem=(id)=>{
    const specificItem=list.find((item)=>item.id===id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);

  }
  return (
    <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
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
    {list.length>0 && <div className="grocery-container">
      <List items={list} removeItem={removeItem} editItem={editItem}/>
      <button className='clear-btn' onClick={clearList}>clear items</button>
    </div>}
    

    </section>
  );
}

export default App;

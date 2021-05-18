//import logo from '../logo.svg';
//import '../App.css';
import React,{useState} from 'react';
import Form from './Form';
import Data from './Data';
import Delete from './Delete';
function App() {
  var [view,setView]=useState()
  function showForm(){
    setView(<Form/>)
  }
  function showData(){
    setView(<Data/>)
  }
  function showDelete(){
    setView(<Delete/>)
  }
  return (
    <div className="App">
      <button onClick={showForm}>Add Information</button>
      <button onClick={showData}>View the list</button>
      <button onClick={showDelete}>Delete the list</button>
     {view}
    </div>
  );
}

export default App;

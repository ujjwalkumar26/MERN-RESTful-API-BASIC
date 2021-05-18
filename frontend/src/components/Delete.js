import React,{useState} from 'react';
//import Data from './Data';
function Delete(){
    var [pass,setPass] = useState()
    function handleSubmit(){
        
            const reqOptions = {
                method: 'DELETE',
                headers: { 
                "Content-type": "application/json; charset=UTF-8",
                "api":1.0
                }
            }
            fetch('http://localhost:3000/data',reqOptions)
            .then(response=>response.json())
            .then(message => {
                console.log(message);
                setPass(<h3>Successfully Deleted</h3>);
            })
        // eslint-disable-next-line
        
    }
        
    return(
        <div>
            <button onClick ={handleSubmit}>Delete</button>
            {pass}
        </div>
    )

}
export default Delete;
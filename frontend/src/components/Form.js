import React,{useState} from 'react';
function Form(){
    var [sent, setSent] = useState();
    function handlesubmit(event){
        event.preventDefault();
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        console.log(name +" "+ phone);
        const reqOptions= {
            method: 'POST',
            body: JSON.stringify({name,phone}),
            headers: { 
            "Content-type": "application/json; charset=UTF-8",
            "api":1.0
            }
        }
        fetch('http://localhost:3000/users',reqOptions)
        .then(response=>response.json())
        .then(message=>{
        console.log(message);
        if(message.sent === true)
        {
            console.log('person added')
            setSent(<h3>Successfully added!</h3>)
        }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <label>Name</label>
                <input type='text' id='name' placeholder='Enter your full name' required/>
                <br/>
                <label>Phone</label>
                <input type='tel' id='phone' placeholder='1234567890' pattern='[0-9]{10}' required/>
                <br/>
                <input type="submit" value="Submit" />
            </form>
            {sent}
        </div>
    )
}
export default Form;
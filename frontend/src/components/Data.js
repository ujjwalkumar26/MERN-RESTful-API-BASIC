import React,{useState,useEffect} from 'react';

function Data(){
    var [table,setTable] = useState()
    
    useEffect(() => {
        const reqOptions = {
            method: 'GET',
            headers: { 
            "Content-type": "application/json; charset=UTF-8",
            "api":1.0
            }
        }
        fetch('http://localhost:3000/data',reqOptions)
        .then(response=>response.json())
        .then(message => {
            console.log(message);
            setTable(<table>
               <thead>
                    <tr>
                    <th>Name</th>
                     <th>Phone</th>
                     </tr>
                </thead>
                <tbody>
                 {message.map((person)=>(
                  <tr key={person._id}>
                            <td>{person.name}</td>
                            <td>{person.phone}</td>
                        </tr>
                    ))}
                 </tbody>
                    </table>)
        })
    // eslint-disable-next-line
    },[])
    return(
        <div>
        {table}
        </div>
    )
}
export default Data;
import React from 'react';
import {useEffect,useState} from 'react';
import {Link, useParams } from "react-router";
import axios from "axios";


function Update(){
         const[data, setData] = useState([])
     const{id} = useParams();

    useEffect(()=>{
        axios.get('http://localhost:3000/users/' + id)
        .then(res=>setData(res.data))
        .catch(err =>console.log(err));

    },[])

    return(
        <div className='d-flex w-100 justify-content-center align-items-center bg-light vh-100 '>
           <div className=" w-100 border bg-white shadow px-5 pt-3 pb-5 rounded">
                       <h1>Add a user</h1>
                       <form onSubmit={handleSubmit}>
                           <div className="mb-2">
                               <label htmlfor="name">Name:</label>
                               <input type="text" name='name' className='form-control' placeholder='Enter Name'
                               onChange={e => setValues({...values, name: e.target.value})} />
                               
                           </div>
                           <div className="mb-2">
                               <label htmlfor="email">Email:</label>
                               <input type="email" name='email' className='form-control' placeholder='Enter Email'
                               onChange={e => setValues({...values, email: e.target.value})} />
                           </div>
                           <div className="mb-3">
                               <label htmlfor="name">Phone:</label>
                               <input type="text" name='phone' className='form-control' placeholder='Enter Phone'
                               onChange={e => setValues({...values, phone: e.target.value})} />
                           </div>
                           <button className='btn btn-success'>Submit</button>
                           <Link to="/" className="btn btn-primary ms-3">Back</Link>
                       </form>
            </div>
        </div>
    )
}
export default Update;
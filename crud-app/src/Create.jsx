import React from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useNavigate } from 'react-router-dom';
import {Link, useNavigate} from "react-router";
import {useState} from 'react';

function Create(){

    const [values, setValues] = useState({
        name:'',
        email:'',
        phone:'',

    })
    const navigate  = useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:3000/users', values)
        .then(res=>{
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err));
    }
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
export default Create;
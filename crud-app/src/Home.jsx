//import axios from "axios";
import {useEffect} from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Container from "react-bootstrap/Container";
//import Button from 'react-bootstrap/Button';


function Home(){
    useEffect(()=>{
        axios.get('http://localhost:3000/users')

    },[])
    return(
        <div className='Container'>
                <div className='d-flex flex-column justify-content-center align-items-center vh-100 '>
                    <h1>List of Users</h1>
                    <div className='w-75 rounded bg-white boder shadow p-4'>

                    </div>
       
                    </div>
        </div>
    )
}
export default Home;
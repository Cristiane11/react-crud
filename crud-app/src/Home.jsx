import axios from "axios";
import {useEffect,useState} from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Container from "react-bootstrap/Container";
//import Button from 'react-bootstrap/Button';


function Home(){
    const[data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res=>setData(res.data))
        .catch(err =>console.log(err));

    },[])
    return(
        
                <div className='d-flex flex-column justify-content-center align-items-centerbg-light vh-100 '>
                    <h1>List of Users</h1>
                    <br/>
                    <div className='w-75 rounded bg-white boder shadow p-4'>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               { data.map((d, i) =>(
                                <tr key={i}>
                                    <td>{d.id}</td>
                                    <td >{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.phone}</td>
                                    <td>{d.action}</td>
                                <button className="btn btn-sm-primary">Edit</button>
                                <button className="btn btn-sm-danger">Delete</button>
                                </tr>
                               ))

                            }
                            </tbody>
                        </table>
                    </div>
                    </div>
  
    )
}
export default Home;
import React from 'react';
function Create(){
    return(
        <div className='d-flex w-100 justify-content-center align-items-center bg-light vh-100 '>
           <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
            <h1>Add a user</h1>
            <form>
                <div className="mb-2">
                    <label htmlfor="name">Name:</label>
                    <input type="text" name='name' className='form-control' placeholder='Enter Name'/>
                </div>
                <div className="mb-2">
                    <label htmlfor="email">Email:</label>
                    <input type="email" name='email' className='form-control' placeholder='Enter Email'/>
                </div>
                <div className="mb-3">
                    <label htmlfor="name">Phone:</label>
                    <input type="text" name='phone' className='form-control' placeholder='Enter Phone'/>
                </div>
                <button className='btn btn-success'>Submit</button>
                <Link to="/" className="btn btn-primary ms-3">Back</Link>
            </form>
           </div>


        </div>
    )
}
export default Create;
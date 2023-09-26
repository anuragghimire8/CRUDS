import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Edit = () => {
    const navigate=useNavigate();

   const [id,setId]=useState(0);
   const [name,setName]=useState('');
   const [age,setAge]=useState('');
   const [email,setEmail]=useState('')

   useEffect(()=>{
            setId(localStorage.getItem('id'));
            setName(localStorage.getItem('name'));
            setAge(localStorage.getItem('age'));
            setEmail(localStorage.getItem('email'));
   },[])
   const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put(`https://65111cbb829fa0248e3f8444.mockapi.io/crud/${id}`,{
        e_name:name,
        e_age:age,
        e_email:email
    }).then(()=>{
      navigate('/')
    })
   }

  return (
    <div>
    <div className='row'>
    <div className='col-md-4'>
    <div className='mb-2 mt-2'>
    <Link to='/'>
    <button className='btn btn-primary'>Read Data</button>
    </Link></div>
    <div className="bg-primary p-4 text-center">
     <h1>Update Data</h1>
    </div>
    <form onSubmit={handleSubmit}>
    <div className='form-gorup'>
    <label>Enter Name:</label>
    <input type='text'  value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' className='form-control' />
    </div>
    <div className='form-group'>
     <label>Enter Age:</label>
     <input type='text' value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter your Age' className='form-control' />
    </div>
    <div className='form-group'>
     <label>Enter Email:</label>
     <input type='email'value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email' className='form-control' />
    </div>
    <br/>
    <div className='d-gird'>
    <input type='submit' value='Update' className='btn btn-primary'/>
    </div>
    </form>
    
    </div>
     
    </div>
    </div>
  )
}

export default Edit

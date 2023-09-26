import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Read=()=> {
       const[apiData,setApiData]=useState([])
    const getData=()=>{
        axios.get('https://65111cbb829fa0248e3f8444.mockapi.io/crud').then((responses)=>{
            console.log(responses.data)
            setApiData(responses.data)
        })


    }
     const handleDelete=(id)=>{
        axios.delete(`https://65111cbb829fa0248e3f8444.mockapi.io/crud/${id}`).then(()=>{
            getData();
        })

     }
    useEffect(()=>{
        getData();
    },[]) 

    const setDataToStorage=(id,name,age,email)=>{
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('age',age)
        localStorage.setItem('email',email);

    }
    return (
    <div>
      <div className='row'>
      <div className='col-md-12'>
      <div className='mb-2 mt-2'>
      <Link to='/create'>
      <button className='btn btn-primary'>Create A New Data</button>
      </Link></div>
      <table className='table table-border table-stripped table-dark table-hover'>
      <thead>
      <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>AGE</th>
      <th>EMAIL</th>
      <th>EDIT</th>
      <th>DELETE</th>
      </tr>
      </thead>
      <tbody>
      {
        apiData.map((items,id)=>{
          return(
            
            <tr key={id}>
            <td>{items.id}</td>
            <td>{items.e_name}</td>
            <td>{items.e_age}</td>
            <td>{items.e_email}</td>
            <td>
            <Link to='/edit'>
            <button className='btn btn-primary' onClick={()=>setDataToStorage(items.id,items.e_name,items.e_age,items.e_email)}>Edit</button>
            </Link>
            </td>
            <td><button className='btn btn-danger' onClick={()=>
                {
                    if(window.confirm('are you sure to delete the data '))
                {
                    handleDelete(items.id)
                }
            }}>Delete</button></td>

            </tr>
           
          )
        })
      }
      </tbody>
      </table>
      </div>
      </div>
    </div>
  )
}

export default Read

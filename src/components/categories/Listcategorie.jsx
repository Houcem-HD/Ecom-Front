import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {Button} from '@mui/material'
const Listcategorie = () => {
  const[categories,setCategories]=useState([])
  const fetchcategories=async()=>{
    try{
      //const res=await axios.get("https://backendecom-bpph.vercel.app/api/api/categories")
      const res=await axios.get("https://houcemhd.soft-liberty.com//api/api/categories")
      setCategories(res.data)
    }
     catch(error){
          console.error(error)
     }
  }
  useEffect(()=>{
    fetchcategories()
  })
  return (
    <div>
      <Button variant="contained" style={{ backgroundColor: 'black' }}>
<Link to="/categories/add" style={{ color: 'white',

textDecoration : 'none'}}>

<i className="fa-solid fa-plus-square"></i> Nouveau
</Link>
</Button>
      {/* <button onClick={() =>fetchcategories()}>Afficher</button> */}
      Liste des categories
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom Categorie</th>
            <th>Image Categorie</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            categories.map((cat,index)=>
              <tr key={index}>
                <td>{cat.nomcategorie}</td>
                <td><img src={cat.imagecategorie} height={100} width={100}></img></td>
                <td><button className='btn btn-warning btn-sm'>Update</button></td>
                <td><button className='btn btn-danger btn-sm'>Delete</button></td>
              </tr>
  )
          }
        </tbody>
      </table>
    </div>
  )
}
export default Listcategorie

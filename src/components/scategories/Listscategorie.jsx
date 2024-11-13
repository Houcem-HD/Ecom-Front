import axios from 'axios'
import React,{useEffect, useState} from 'react'

const Listscategorie = () => {
  const[scategories,setScategories]=useState([])
  const fetchscategories=async()=>{
    try{
      const res=await axios.get("https://houcemhd.soft-liberty.com/api/api/scategories")
      setScategories(res.data)
      
    }
     catch(error){
          console.error(error)
     }
  }
  useEffect(()=>{
    fetchscategories()
  })
  return (
    <div>
      {/* <button onClick={() =>fetchcategories()}>Afficher</button> */}
      Liste des Scategories
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom SCategorie</th>
            <th>Image Categorie</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            scategories.map((cat,index)=>
              <tr key={index}>
                <td>{cat.nomscategorie}</td>
                <td><img src={cat.imagescategorie} height={100} width={100}></img></td>
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
export default Listscategorie


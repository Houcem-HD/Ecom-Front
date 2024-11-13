import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading';


//axios houwa ili bch yahki maa lback w yjib les donnees
const Listarticles = () => {
  const[articles,setArticles]=useState([])
  //bch naaref chnou kaad ysir to93edch bidha
  const [isLoading,setIsLoading] = useState(true)

  const fetcharticles=async()=>{
    try{
      const res=await axios.get("https://houcemhd.soft-liberty.com/api/api/articles")
      setArticles(res.data)
      setIsLoading(false)
    }
     catch(error){
          console.error(error)
     }
  }
  //awel haja yemchi yaamelha 
  useEffect(()=>{
    fetcharticles()
    
  })
  const handleDelete=async()=>{
    if(window.confirm("Are you sure you want to delete")){
    try{
      const res=await axios.delete(` https://projet-laravel2024.vercel.app/api/api/articles/${id}`)
      .then(res=>{
        setArticles(articles.filter(art=>art.id!=id))
      })
    }catch(error){
      console.error(error)
    }
  }}
  if(isLoading)
  {return (<center><ReactLoading type="spinningBubbles" color="blue" height={100} width={100} /></center>)}
  return (
    <div>
        <Link to="/articles/add" >
        <button className='btn-primary'>Ajouter</button>
        <i className='fa-solid fa-plus-square'></i>
        </Link>
      {/* <button onClick={() =>fetchcategories()}>Afficher</button> */}
      Liste des articles
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Designiation</th>
            <th>Image Article </th>
            <th>Marque</th>
            <th>Reference</th>
            <th>Quantite Stock</th>
            <th>Prix</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            articles.map((art,index)=>
              <tr key={index}>
                <td>{art.deignation}</td>
                <td><img src={art.imagearticles} height={100} width={100}></img></td>
                <td>{art.marque}</td>
                <td>{art.reference}</td>
                <td>{art.qtestock}</td>
                <td>{art.prix}</td>
                <td><button className='btn btn-warning btn-sm'>Update</button></td>
                <td><button className='btn btn-danger btn-sm' onClick={()=>handleDelete()}>Delete</button></td>
              </tr>
  )
          }
        </tbody>
      </table>
    </div>
  )
}
export default Listarticles


import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Col, Row ,Form} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'

const Insertarticle = () => {
  const[scategories,setScategories]=useState([])
  const[article,setArticle]=useState([])
  const[navigate,useNavigate] = useNavigate({})
  const loadscategorie=async()=>{
    try{
      const res=await axios.get("https://houcemhd.soft-liberty.com/api/api/scategories")
      setScategories(res.data)
    }
     catch(error){
          console.error(error)
     }
  }
  useEffect(()=>{
    loadscategorie()
    
  })
  const handleSave=async()=>{
    try{
      await axios.post(` https://houcemhd.soft-liberty.com/api/api/articles`,article)
      .then(res=>{
        setArticles(articles.filter(art=>art.id!=id))
      })
    }catch(error){
      console.error(error)
    }
  }
  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      Ajouter un article
      <Form>
        <Row>
      <Form.Group as= {Col}mb="6" >
        <Form.Label>Reference</Form.Label>
        <Form.Control type="text" placeholder="Reference"
        value={article.reference}
        onChange={(e)=>setArticle({...article.reference.target.value})} />
      </Form.Group>
      <Form.Group as= {Col}mb="6" >
        <Form.Label>Designiation</Form.Label>
        <Form.Control type="text" placeholder="designation" 
        value={article.designation}
        onChange={(e)=>setArticle({...article.designation.target.value})} />
      </Form.Group>
      </Row>
      <Row>
      <Form.Group  as= {Col}mb="6" >
        <Form.Label>Marque</Form.Label>
        <Form.Control type="text" placeholder="marque"
         value={article.marque}
         onChange={(e)=>setArticle({...article.marque.target.value})} />
      </Form.Group>
      <Form.Group as= {Col}mb="6" >
        <Form.Label>Quantite Stock</Form.Label>
        <Form.Control type="email" placeholder="Quantite Stock" 
         value={article.qtestock}
         onChange={(e)=>setArticle({...article.qtestock.target.value})}/>
      </Form.Group>
      </Row>
      <Row>
      <Form.Group  as= {Col}mb="6">
        <Form.Label>Prix</Form.Label>
        <Form.Control type="email" placeholder="Prix" 
         value={article.prix}
         onChange={(e)=>setArticle({...article.prix.target.value})}/>
      </Form.Group>
      <Form.Group as= {Col}mb="6" >
        <Form.Label>Image</Form.Label>
        <Form.Control type="img" placeholder="Image" 
         value={article.imagearticle}
         onChange={(e)=>setArticle({...article.imagearticle.target.value})}/>
      </Form.Group>
      </Row>
      <Row>
      <Form.Group  as= {Col}mb="6">
        <Form.Label>Sous categorie</Form.Label>
        <Form.Control type="select" 
        as ={"select"} placeholder="Sous Categorie" 
        value={article.scategorieID}
        onChange={(e)=>setArticle({...article.scategorieID.target.value})}>
          {
            scategories.map((scat,index)=>
              <Option value={ scat.id}>{scat.nomcategorie}</Option>
            )         
             }
          </Form.Control>
      </Form.Group>
      </Row>
    </Form>
    <button className='btn btn-success btn-sm 'onClick={(e)=>handleSave(e)}>Enregistrer</button>
    &nbsp;
    <button className='btn btn-danger btn-sm'>Annuler</button>
    </div>
  )
}

export default Insertarticle

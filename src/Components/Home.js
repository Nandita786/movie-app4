import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Home extends Component{
  render(){
  return (
    <>
<h6>you are logged in!</h6>
    <div style={{display:'flex',backgroundColor:'#232f3e'}}>
      <Link to ="/Registeration"><h1 style={{marginTop:'1rem',marginLeft:'1rem'}}>Movies App</h1></Link>
      <Link to ="/favourites" style={{textDecoration:'none'}}><h2 style={{marginLeft:'5rem',marginTop:'1.5rem'}}>Favourites</h2></Link>
      </div>
    </>
  )
}
}


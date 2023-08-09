import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <div id='card1' class="row d-flex justify-content-center"  style={{backgroundColor:"rgb(153, 245, 214)"}}>

        <div class="card col-6 mx-2" style={{width:" 18rem", backgroundColor:"rgb(196, 242, 243)",borderColor:"rgb(153, 245, 214)"}}>
    <img src="hi.png" class="card-img-top" alt="..."/>
    <div class="card-body"  >
      <h5 class="card-title">Assignment-1</h5>
      <p class="card-text"></p>
      <Link to="/Like" class="btn btn-primary"> open</Link>
    </div>
  </div>
  
        <div id='card2' class="card col-6 mx-2" style={{width:" 18rem", backgroundColor:"rgb(196, 242, 243)",borderColor:"rgb(153, 245, 214)"}}>
    <img src="hi.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Assignment-2</h5>
      <p class="card-text"></p>
      <Link to="/card" class="btn btn-primary"> open</Link>
    </div>
  </div>
  </div>
  <div class="row d-flex justify-content-center">
        <div id='card3 ' class="card col-6 mx-2" style={{width:" 18rem", backgroundColor:"rgb(196, 242, 243)",borderColor:"rgb(153, 245, 214)"}}>
    <img src="hi.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Assignment-3</h5>
      <p class="card-text"></p>
      <Link to="/condrend" class="btn btn-primary">open</Link>
    </div>
  </div>
  <div id='card4' class="card col-6 mx-2" style={{width:" 18rem", backgroundColor:"rgb(196, 242, 243)",borderColor:"rgb(153, 245, 214)"}}>
    <img src="hi.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Assignment-4</h5>
      <p class="card-text"></p>
      <Link to="/counter" class="btn btn-primary">open</Link>
    </div>
  </div>
  </div>
  <div class="row d-flex justify-content-center">
        <div id='card5' class="card col-6 mx-2" style={{width:" 18rem", backgroundColor:"rgb(196, 242, 243)",borderColor:"rgb(153, 245, 214)"}}>
    <img src="hi.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Assignment-5</h5>
      <p class="card-text"></p>
      <Link to="/eval" class="btn btn-primary">open</Link>
    </div>
  </div>
        <div id='card6' class="card col-6 mx-2" style={{width:" 18rem", backgroundColor:"rgb(196, 242, 243)",borderColor:"rgb(153, 245, 214)"}}>
    <img src="hi.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Assignment-6</h5>
      <p class="card-text"></p>
      <Link to="/demotodo" class="btn btn-primary">open</Link>
    </div>
  </div>
  </div>
  </div>


  )
}

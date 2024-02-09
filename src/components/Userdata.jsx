import React from 'react'

const Userdata = (props) => {
  
  return (
    <div className="card">
    <div className="section1">
      <h2>Description</h2>
      <p><strong>Name: </strong>{props.name}</p>
      <p><strong>Email: </strong>{props.email}</p>
      <p><strong>Website: </strong>{props.website}</p>
      <p><strong>Gender: </strong>{props.gender}</p>
      <p><strong>Languages: </strong> {props.skills.join(', ')}</p>
    </div>

    <div className="section2">
      <h2>Image</h2>
      <img src={props.image} alt="User Image"/>
    </div>
    </div>
  )
}

export default Userdata
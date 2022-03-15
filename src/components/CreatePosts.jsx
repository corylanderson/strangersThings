import React, { useState }  from "react";
import { createPost } from "../api"

const CreatePosts = ({token, setToken}) => {

  
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [location, setLocation] = useState("")
  const [willDeliverCheck, setWillDeliverCheck] = useState(false)

  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    createPost(postDetails, token)
}

const handleTitle = () => {
  setTitle(e.target.value[0])
}
const handleDescription = () => {
  setDescription(e.target.value[1])
}
const handlePrice = () => {
  setPrice(e.target.value[2])
}
const handleLocation = () => {
  setLocation(e.target.value[3])
}
const handleWillDeliver = () => {
  
  setWillDeliverCheck(true)

}



    return (
    
    
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={handleTitle}
        ></input>
        
        <input
          type="text"
          placeholder="description"
          onChange={handleDescription}
        ></input>
        
        <input 
        type='text'
        placeholder= 'price'
        onChange={handlePrice}
        ></input>
        
        <input 
        type='text'
        placeholder= 'location'
        onChange={handleLocation}
        ></input>
        
        <input 
        type='checkbox'
        onChange={handleWillDeliver}
        ></input>
        
        <button type="submit">Create Posting</button>
      </form>
    </div>
    
        
    )
}



export default CreatePosts;

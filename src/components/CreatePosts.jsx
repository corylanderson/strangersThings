import React, { useState }  from "react";
import { createPost } from "../api"

const CreatePosts = ({token, setToken}) => {
const [checked, setChecked] = useState("true")
const handleSubmit = (e) => {
    e.preventDefault()

createPost(postDetails, token)


}
    return (
    
    
        <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={handleUsername}
        ></input>
        <input
          type="text"
          placeholder="description"
          onChange={handlePassword}
        ></input>
        <input 
        type='text'
        placeholder= 'price'
        onChange={}
        ></input>
        <input 
        type='text'
        placeholder= 'location'
        onChange={}
        ></input>
        <input 
        type='checkbox'
        onChange={}
        ></input>
        <button type="submit">Create <Posting></Posting></button>
      </form>
      </div>
    
        
    )
}



export default CreatePosts;

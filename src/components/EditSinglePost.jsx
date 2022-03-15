 import React from 'react';
 import { updatePost } from '../api';
 
 const EditSinglePost = (postId) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        
        updatePost() //updateObj, token, postId parameters
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
     );
 };
 
 export default EditSinglePost;
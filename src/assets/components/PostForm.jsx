import React from 'react'
import { useState } from 'react'
import { createPost } from '../services/post'

const PostForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newPost = await createPost({title, body})
            console.log('Post created successfully:', newPost)

            setTitle('')
            setBody('')
        } catch (error) {
            console.error('Error creating post:', error)
        }

    } 
  return (
    <>
        <h2 className = 'text-3xl font-bold'>Create New Post</h2>
        <label>Titulo</label>
        <input 
            type="text" 
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className = 'border p-2 w-full mb-4'
        />
        <label>Body</label>
        <input 
            type="text" 
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className = 'border p-2 w-full mb-4'
        />
        <button 
            onClick={handleSubmit}
            className = 'bg-blue-500 text-white px-4 py-2 rounded'
        >
            Submit
        </button>

    </>
  )
}

export default PostForm
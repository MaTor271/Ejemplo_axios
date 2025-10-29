import { useState, useEffect } from 'react'
import {getPosts} from '../services/post'
import Post from './Post'

export const ListPost = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPosts()
            setPosts(data)
        }
        fetchPosts()
    }, [])

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h2 className='text-3xl font-bold mb-6 text-center text-gray-800'>Posts</h2>
        <div className='grid gap-6 md:grid-cols-2'>
            {posts.map(post => (
                <Post key={post.id} title={post.title} body={post.body} />
            ))}
        </div>
    </div>
  )
}

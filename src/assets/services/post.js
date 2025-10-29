import instance from '../lib/axios';

export async function getPosts() {
    try {
        const response = await instance.get('/posts');
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export async function createPost({title, body, userId = 1}) {
    try {
        const response = await instance.post('/posts', {
            title,
            body,
            userId
        });
        console.log("Post created:", response);
        return response.data;
    }
    catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }  
}
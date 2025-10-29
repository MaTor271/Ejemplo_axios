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
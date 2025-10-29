import './App.css'
import {ListPost} from './assets/components/ListPost'
import PostForm from './assets/components/PostForm.jsx'

function App() {

  return (
    <>
      <h1 className = 'text-purple-500'>Mi primer ejemplo con AXIOS</h1>
      <PostForm />
      <ListPost />
    </>
  )
}

export default App

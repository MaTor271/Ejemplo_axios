import { useState } from 'react'
import './App.css'
import {ListPost} from './assets/components/ListPost'

function App() {

  return (
    <>
      <h1 className = 'text-purple-500'>Mi primer ejemplo con AXIOS</h1>
      <ListPost />
    </>
  )
}

export default App

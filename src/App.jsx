import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'

function App() {
  
  return (
    <>
      <h1 class="text-4xl font-bold text-center text-indigo-600 py-4 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-lg shadow-lg">
   To-Dos 
</h1>

      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
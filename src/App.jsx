import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './Pages/MainPage'
import LoginPage from './Pages/LoginPage'
import PostPage from './Pages/PostPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage /> } />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/post/:id' element={<PostPage /> } />
    </Routes>
  )
}

export default App

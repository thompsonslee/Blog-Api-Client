import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './Pages/MainPage'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/RegisterPage'
import PostPage from './Pages/PostPage'

function App() {
  const [user,setUser] = useState(null)

  return (
    <Routes>
      <Route path='/' element={<MainPage /> } />
      <Route path='/register' element={<RegisterPage setUser={setUser}/>} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/post/:id' element={<PostPage /> } />
    </Routes>
  )
}

export default App

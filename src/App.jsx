import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './Pages/MainPage'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import PostPage from './Pages/PostPage'
import { useEffect } from 'react'

function App() {
  const [user,setUser] = useState()

  useEffect(() =>{
      const user = JSON.parse(localStorage.getItem("user"))
      if(!user){return}
      setUser(user.username)
  },[])
  return (
    <Routes>
      <Route path='/' element={<MainPage user={user} /> } />
      <Route path='/register' element={<RegisterPage setUser={setUser}/>} />
      <Route path='/login' element={<LoginPage setUser={setUser}/>} />
      <Route path='/post/:id' element={<PostPage /> } />
    </Routes>
  )
}

export default App

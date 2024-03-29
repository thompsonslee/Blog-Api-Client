import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './Pages/MainPage'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import PostPage from './Pages/PostPage'
import Header from './Components/Header/Header'
import { useEffect } from 'react'

function App() {
  const [user,setUser] = useState()
  const [posts,setPosts] = useState()

  function logout(){
    localStorage.removeItem("user")
    setUser(null)
  }
  async function getPosts(){
    const res = await fetch("http://localhost:3000/posts")
    const resjson = await res.json()
    setPosts(await resjson.posts)
  }

  useEffect(() =>{
    getPosts()
    const user = JSON.parse(localStorage.getItem("user"))
    if(!user){return}
    setUser(user.username)
  },[])


  return (
    <Routes>
      <Route path='/' element={
        <>
          <Header user={user} logout={logout}/>
          <MainPage user={user} logout={logout} posts={posts}/>
        </>} 
      />
      <Route path='/register' element={<RegisterPage setUser={setUser}/>} />
      <Route path='/login' element={<LoginPage setUser={setUser}/>} />
      <Route path='/post/:postID' element={<PostPage user={user} logout={logout} /> } />
    </Routes>
  )
}

export default App

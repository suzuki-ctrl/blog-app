import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from "./components/Navbar";
import PostContent from "./components/PostContent";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [postList, setPostList] = useState([]);

  return (
    <BrowserRouter>
    <Navbar isAuth={isAuth} />
    <Routes>
      <Route path='/' element={<Home postList={postList} setPostList={setPostList} />} />
      <Route path='/createpost' element={<CreatePost isAuth={isAuth} />} />
      <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      <Route path='/logout' element={<Logout setIsAuth={setIsAuth} />} />
      <Route path="/postcontent/:id" element={<PostContent postList={postList} setPostList={setPostList} />} /> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;

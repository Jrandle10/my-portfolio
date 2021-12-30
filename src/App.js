import { Routes, Route, NavLink } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar  from "./components/NavBar";


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route element={<Home />} path='/' /> 
        <Route element={<About />} path='/about' />
        <Route element={<SinglePost />} path='/post/:id' />
        <Route element={<Post />} path='/post' />
        <Route element={<Project />} path='/project' />
      </Routes>
    </>
  )
}

export default App;

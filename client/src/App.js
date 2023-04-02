import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
  Navigate
} from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route exact path="/" element={<Home/>}/>
//       <Route path="/login" element={<Login/>}/>
//       <Route path="/register" element={<Register/>}/>
//       <Route path="/profile/:username" element={<Profile/>}/>
//     </Route>
//   )
// )

function App() {
  const {user} = useContext(AuthContext)

  return (
    // <RouterProvider router={router}/>
    <Routes>
      <Route exact path="/" element={user ? <Home/> : <Register/>} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>} />
      <Route path="/register" element={user ? <Navigate to="/" /> : <Register/>} />
      <Route path="/profile/:username" element={<Profile/>} />
    </Routes>
  );
}

export default App;

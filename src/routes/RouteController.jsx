import Home from '../routes/Home.jsx'
import User from '../routes/User.jsx'


import { Routes,Route } from 'react-router-dom'

const RouteController = () => {
  return (
    <>
     {/* {pathname !== '/auth' &&  <Nav/>} */}
     <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='user/:id' element={<User/>}/>
     </Routes>
    </>
  )
}

export default RouteController
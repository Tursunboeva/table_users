import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

import '../routes/Home.css'

import apiInstance from "../api/axios";


const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    apiInstance('')
      .then(response => setUsers(response.data.data))
  }, [])
  console.log(users)
 
  return (
    <table className="table">
      <tr>
        <th>Avatar</th>
        <th>First_name</th>
        <th>Last_name</th>
        <th>Email</th>
      </tr>

    
      {
        users.map(user =>
          <tr className="user_table" key={user.id}>
            <td><Link to={`/user/${user.id}`}><img src={user.avatar} alt="" /></Link></td>
            <td><Link to={`/user/${user.id}`}><p>{user.email}</p></Link></td>
            <td><Link to={`/user/${user.id}`}><p>{user.first_name}</p></Link></td>
            <td><Link to={`/user/${user.id}`}><p>{user.last_name} </p> </Link> </td>           
          </tr>
        )
      }
     
      
    </table>
  )
}

export default Home
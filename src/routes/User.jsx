import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import '../routes/User.css'

const User = () => {
  const [user, setUser] = useState (null)
  const { id } = useParams();

  useEffect(() => {
    axios(`https://reqres.in/api/users/${id}`)
      .then(response => setUser(response.data.data))

  }, [id])
  console.log(user)

  return (
    <div className="user-container">
      {
        user && <div>
                    <img src={user.avatar} alt="" />
                    <p>{user.email}</p>
                    <p>{user.first_name}</p>
                    <p>{user.last_name} </p>
                </div>
      }
    </div>
  );
}

export default User;

import React from 'react'
import axios from 'axios'

const apiInstance =axios.create({
  baseURL:"https://reqres.in/api/users?page=2"
})

export default apiInstance
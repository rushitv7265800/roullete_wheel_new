
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
    const {Component}=props;
    const navigate=useNavigate()
  

    
    useEffect(() => {
        var login=localStorage.getItem("loginData")
        if(!login){
           navigate('/login')
           localStorage.removeItem("loginData")
        }
    }, [])
    
  return (
    <div>
  <Component/>
    </div>
  )
}

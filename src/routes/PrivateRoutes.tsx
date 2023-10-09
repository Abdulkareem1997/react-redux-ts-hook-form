import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'

const PrivateRoutes:React.FC = () => {
  return (
    <Routes>
      <Route path='/*' element={<Navigate replace to={'/dashbord'} />} />
      <Route path='/dashbord' element={<Dashboard/>} />
    </Routes>
  )
}

export default PrivateRoutes
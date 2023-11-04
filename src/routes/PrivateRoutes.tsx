import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import EmployeeForm from '../pages/Employee/EmployeeForm'

const PrivateRoutes:React.FC = () => {
  return (
    <Routes>
      <Route path='/*' element={<Navigate replace to={'/dashbord'} />} />
      <Route path='/dashbord' element={<Dashboard/>} />
      <Route path='/add-employee' element={<EmployeeForm/>} />
    </Routes>
  )
}

export default PrivateRoutes
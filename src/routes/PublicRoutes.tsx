import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignInPage from '../pages/SignInpage/SignInPage'

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/*' element={<Navigate replace to={'/signin'} />} />
      <Route path='/signin' element={<SignInPage/>} />
    </Routes>
  )
}

export default PublicRoutes
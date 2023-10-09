
import React,{ReactNode} from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppLayout from './routes/AppLayout'
import PublicRoutes from './routes/PublicRoutes'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import PrivateRoutes from './routes/PrivateRoutes'

const App = () => {
  const isAuth = useSelector((state:RootState) => state.userAuth.isAuth)
  const routes:ReactNode = !isAuth ? <PublicRoutes/> : <PrivateRoutes/>
  
  return (
    <BrowserRouter>
      <AppLayout>{routes}</AppLayout>
    </BrowserRouter>
  )
}

export default App
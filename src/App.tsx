import { ToastContainer } from 'react-toastify'
import './App.css'
import { ModalsCompiler } from './modals/modalsCompiler'
import { LandingPage } from './pages/landing'
import { Route, Routes } from 'react-router'
import { useSelector } from 'react-redux'
import type { RootState } from './redux/store'
import { HomePage } from './pages/homepage'

function App() {
  const user = useSelector((state:RootState) => state.users.currentUser)

  return (
    <>
      <ToastContainer theme='dark'/>
      <ModalsCompiler/>
      <Routes>
        {user.name == '' ? <Route path='/' element={<LandingPage/>}/> 
        : <Route path='/' element={<HomePage/>}/>}
      </Routes>
    </>
  )
}

export default App

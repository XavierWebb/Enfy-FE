import { ToastContainer } from 'react-toastify'
import './App.css'
import { ModalsCompiler } from './modals/modalsCompiler'
import { LandingPage } from './pages/landing'

function App() {

  return (
    <>
      <ToastContainer theme='dark'/>
      <ModalsCompiler/>
      <LandingPage/>
    </>
  )
}

export default App

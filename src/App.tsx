import { ToastContainer } from 'react-toastify'
import './App.css'
import { ModalsCompiler } from './modals/modalsCompiler'
import { LandingPage } from './pages/landing'
import { Route, Routes } from 'react-router'
import { useSelector } from 'react-redux'
import type { RootState } from './redux/store'
import { HomePage } from './pages/homepage'
import { ViewEvent } from './pages/viewevent'
import { ProfilePage } from './pages/profilePage'
import { ViewTickets } from './pages/viewTickets'
import { useEffect } from 'react'
import i18n from './i18n'
import { SearchPage } from './pages/searchPage'
import { AdminPage } from './pages/adminPage'
import { useAppDispatch } from './redux/hooks'


function App() {
  const user = useSelector((state: RootState) => state.users.currentUser)
  const mode = useSelector((state: RootState) => state.users.currentUser.mode)
  const language = user.language || 'en'
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language)
    }

    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(mode);
  }, [mode])

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };

    const accessToken = getCookie("access_token");

    if (!accessToken) {
      localStorage.clear();
    }
  }, [dispatch])
  return (
    <>
      <ToastContainer theme='dark' />
      <ModalsCompiler />
      <Routes>
        {user.name == '' ? <Route path='/' element={<LandingPage />} />
          : <Route path='/' element={<HomePage />} />}

        <Route path='/view' element={<ViewEvent />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/tickets' element={<ViewTickets />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </>
  )
}

export default App

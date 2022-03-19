import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import AboutPage from './pages/AboutPage'
import Dashboard from './pages/Dashboard'
import HomePage from "./pages/HomePage"
import NotFound from './pages/NotFound'
import UserPaeg from './pages/UserPaeg'
import UsersPages from './pages/UsersPages'

export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/users_pages' element={<UsersPages />} />
            <Route path='/usuarios' element={<Navigate to="/users_pages" />} />
            <Route path={`/users/:id`} element={<UserPaeg />} />
            <Route path='/dashboard/*' element={<Dashboard />}>
                <Route path='welcome' element={<div>Welcome</div>}/>
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

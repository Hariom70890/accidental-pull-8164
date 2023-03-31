import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/login" element={LoginPage} />
                <Route path="*" element={<h1>Page noot found</h1>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes
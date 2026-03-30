import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()
console.log(navigate)
function handleBuy() {
    navigate('/dashboard/checkout')
}
function Dashboard() {
    return (
        <div>
            Dashboard
            <Outlet />
            <br />
            <button onClick={handleBuy}>Mua hang</button>
        </div>

    )
}

export default Dashboard
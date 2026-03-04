import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <aside>
                <nav>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li><Link to="users">Quản lý User</Link></li>
                        <li><Link to="profile">Thông tin cá nhân</Link></li>
                    </ul>
                </nav>
            </aside>

            <main style={{ flex: 1, border: '1px dashed #666', padding: '10px' }}>
                <h2>Nội dung Dashboard</h2>
                <Outlet />
            </main>
        </div>
    )
}

export default Dashboard
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import ProductList from './components/ProductList';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
          <li>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Trang chủ</Link>
          </li>
          <li>
            <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Sản phẩm</Link>
          </li>
          <li>
            <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* Route đơn giản */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />

        {/* 3. Cấu hình Nested Routes (Định tuyến lồng nhau) */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Các route con này sẽ hiển thị tại vị trí của <Outlet /> trong Dashboard.jsx */}
          <Route path="users" element={<div><h3>Đây là trang Quản lý User</h3></div>} />
          <Route path="profile" element={<div><h3>Đây là trang Hồ sơ cá nhân</h3></div>} />
        </Route>

        {/* Route xử lý khi người dùng nhập sai URL (Trang 404) */}
        <Route path="*" element={<h1>404 - Không tìm thấy trang</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

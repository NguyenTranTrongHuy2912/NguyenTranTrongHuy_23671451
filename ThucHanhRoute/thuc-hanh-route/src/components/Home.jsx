import React, { use } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <h1>Home</h1>
            <p>Đây là trang chính của ứng dụng.</p>
            <button onClick={() => navigate('/products')}>
                Đi đến Danh sách sản phẩm (Programmatic)
            </button>

            <div style={{ marginTop: '10px' }}>
                <button onClick={() => navigate(-1)}>Quay lại</button>
                <button onClick={() => navigate(1)}>Tiến tới</button>
            </div>
        </div>
    )
}

export default Home
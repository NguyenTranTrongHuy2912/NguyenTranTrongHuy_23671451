import { NavLink, Link, Outlet } from 'react-router-dom';
import './App.css'; // Chúng ta sẽ viết CSS ở đây để thấy sự khác biệt

function App() {
  return (
    <div style={{ padding: '20px' }}>

      <div style={{ display: 'flex', gap: '40px' }}>
        
        {/* <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h3>Dùng Link (Bình thường)</h3>
          <Link to="/">Home Page</Link>
          <Link to="/user">User Page</Link>
          <Link to="/product">Product Page</Link>
        </nav> */}

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h3>Dùng NavLink (Có Active)</h3>
          <NavLink to="/">Home Page</NavLink>
          <NavLink to="/user">User Page</NavLink>
          <NavLink to="/product">Product Page</NavLink>
        </nav>

      </div>

      <hr style={{ margin: '20px 0' }} />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
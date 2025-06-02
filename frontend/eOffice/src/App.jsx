import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaTachometerAlt, FaBoxes, FaUser, FaUserCircle, FaTools, FaCog, FaBell } from 'react-icons/fa';
import LogoImg from './assets/rmt-logo-white.png';

function Sidebar() {
  return (
    <div style={{ width: '20%', background: '#000', color: '#000', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px'}}>
      <img src={LogoImg} alt="eOffice Logo" style={{ maxWidth: '50%', height: 'auto', alignItems: 'center', marginBottom: '30px'}} />
      <Link to="/" className="nav-link" title="Dashboard">
        <FaTachometerAlt style={{ marginRight: '30px' }} /> Dashboard
      </Link>
      <Link to="/inventory" className="nav-link" title="Inventory">
        <FaBoxes style={{ marginRight: '30px' }} /> Inventory
      </Link>
      <Link to="/inventory" className="nav-link" title="Admin">
        <FaTools style={{ marginRight: '30px' }} /> Admin
      </Link>
      <Link to="/inventory" className="nav-link" title="Human Resources">
        <FaUser style={{ marginRight: '30px' }} /> Human Resources
      </Link>
      <Link to="/inventory" className="nav-link" title="Settings">
        <FaCog style={{ marginRight: '30px' }} /> Settings
      </Link>
    </div>
  );
}

function Dashboard() {
  return <div
    style={{ paddingTop: '10px', paddingLeft: '50px' }}>
    <h1>Dashboard</h1>
    <p>This app is under development</p>
    </div>;
}

function Inventory() {
  const items = [
    { id: 1, name: 'Item A', quantity: 10 },
    { id: 2, name: 'Item B', quantity: 5 },
  ];

  return (
    <div style={{ paddingTop: '10px', paddingLeft: '50px' }}>
      <h1>Inventory</h1>
      <button style={{ marginBottom: '10px' }}>Add New Item</button>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TopBar() {
  return (
    <div style={{
      height: '70px',
      backgroundColor: '#fff',
      color: '#00b6c6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 20px',
      gap: '20px',
      fontSize: '24px',
      borderBottom: '1px solid #efefef'
    }}>
      <FaBell title="Notifications" style={{ cursor: 'pointer' }} />
      <FaUserCircle title="User" style={{ cursor: 'pointer' }} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%'}}>
        <Sidebar />
      <div style={{ flex: 1, flexDirection: 'column'}}>
        <TopBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>       
      </div>
      </div>
    </Router>
    

    
    // <Router>
    //   <div style={{ display: 'flex', flexDirection: 'column', height: '300vh'}}>
    //     <div style={{ display: 'flex', flex: 1 }}>
    //       <Sidebar />
    //       <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
    //         <TopBar />
    //         <div style={{ flex: 1, overflow: 'auto' }}>
    //           <Routes>
    //             <Route path="/" element={<Dashboard />} />
    //             <Route path="/inventory" element={<Inventory />} />
    //           </Routes>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Router>
  );
}


export default App;

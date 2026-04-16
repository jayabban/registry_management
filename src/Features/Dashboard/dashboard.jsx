import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileCheck, 
  FileText, 
  Users, 
  LogOut, 
  Bell,
  Search,
  Plus
} from 'lucide-react';
import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 1. Security Check: Verify user is logged in
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (!storedUser || !token) {
      navigate('/login'); // Redirect to login if no session exists
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  if (!user) return null; // Prevent flicker before redirect

  return (
    <div className="dash-container">
      {/* SIDEBAR */}
      <aside className="dash-sidebar">
        <div className="dash-logo-section">
          <div className="dash-logo-placeholder">A</div>
          <span>ACHDA Registry</span>
        </div>

        <nav className="dash-nav">
          <a href="#" className="nav-item active"><LayoutDashboard size={20} /> Overview</a>
          <a href="#" className="nav-item"><FileCheck size={20} /> Incoming Letters</a>
          <a href="#" className="nav-item"><FileText size={20} /> Outgoing Letters</a>
          <a href="#" className="nav-item"><Users size={20} /> Staff Directory</a>
        </nav>

        <button onClick={handleLogout} className="dash-logout-btn">
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="dash-main">
        {/* HEADER */}
        <header className="dash-header">
          <div className="header-search">
            <Search size={18} />
            <input type="text" placeholder="Search records..." />
          </div>
          <div className="header-actions">
            <Bell size={20} className="header-icon" />
            <div className="user-profile">
              <span className="user-name">{user.fullName}</span>
              <span className="user-role">{user.role || 'Action Officer'}</span>
            </div>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="dash-content">
          <div className="dash-welcome-row">
            <h1>System Overview</h1>
            <button className="add-btn"><Plus size={18} /> New Entry</button>
          </div>

          {/* STATS CARDS */}
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-label">Total Incoming</span>
              <h2 className="stat-value">128</h2>
              <span className="stat-trend">+12% from last month</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Pending Action</span>
              <h2 className="stat-value" style={{ color: '#f59e0b' }}>14</h2>
              <span className="stat-trend">Requires attention</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Dispatched Today</span>
              <h2 className="stat-value" style={{ color: '#10b981' }}>08</h2>
              <span className="stat-trend">Success rate: 100%</span>
            </div>
          </div>

          {/* RECENT ACTIVITY TABLE PLACEHOLDER */}
          <div className="recent-activity">
            <h3>Recent Registry Updates</h3>
            <div className="dummy-table">
              <p>No new letters to display. Start by adding a new record.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
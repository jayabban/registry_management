// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { 
//   LayoutDashboard, 
//   FileStack, 
//   Send, 
//   Archive, 
//   Target, 
//   BarChart3, 
//   UserCircle, 
//   Bell, 
//   Settings,
//   LogOut
// } from 'lucide-react';
// import './sidebar.css';
// import AchdaLogo from '../../assets/images/logo.png';

// const Sidebar = () => {
//   return (
//     <aside className="rms-sidebar">
//       {/* Brand Section */}
//       <div className="sidebar-brand">
//         <img src={AchdaLogo} alt="ACHDA Logo" className="brand-logo" />
//         <span className="brand-name">RMS</span>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="sidebar-nav">
//         <div className="nav-section">
//           <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
//             <LayoutDashboard size={20} />
//           </NavLink>
          
//           <NavLink to="/incoming-letters" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
//             <FileStack size={20} />
//           </NavLink>

//           <NavLink to="/outgoing-correspondence" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
//             <Send size={20} />
//           </NavLink>

//           <NavLink to="/tracking" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
//             <Target size={20} />
//           </NavLink>

//           <NavLink to="/reports" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
//             <BarChart3 size={20} />
//           </NavLink>
//         </div>

//         <div className="nav-section bottom">
//           <NavLink to="/profile" className="nav-item">
//             <UserCircle size={20} />
//           </NavLink>

//           <NavLink to="/notifications" className="nav-item">
//             <Bell size={20} />
//           </NavLink>

//           <NavLink to="/settings" className="nav-item">
//             <Settings size={20} />
//           </NavLink>

//           <button className="nav-item logout-btn" onClick={() => {/* handle logout */}}>
//             <LogOut size={20} />
//           </button>
//         </div>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;





import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, FileStack, Send, Target, 
  BarChart3, UserCircle, Bell, Settings, LogOut 
} from 'lucide-react';
import './sidebar.css';
import AchdaLogo from '../../assets/images/logo.png';

const Sidebar = () => {
  return (
    <aside className="rms-sidebar">
      <div className="sidebar-brand">
        <div className="logo-container">
          <img src={AchdaLogo} alt="ACHDA Logo" className="brand-logo" />
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <NavLink to="/dashboard" title="Dashboard" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <LayoutDashboard size={22} strokeWidth={1.5} />
          </NavLink>
          
          <NavLink to="/incoming-letters" title="Incoming Letters" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <FileStack size={22} strokeWidth={1.5} />
          </NavLink>

          <NavLink to="/outgoing-correspondence" title="Outgoing" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <Send size={22} strokeWidth={1.5} />
          </NavLink>

          <NavLink to="/tracking" title="Tracking" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <Target size={22} strokeWidth={1.5} />
          </NavLink>

          <NavLink to="/reports" title="Analytics" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <BarChart3 size={22} strokeWidth={1.5} />
          </NavLink>
        </div>

        <div className="nav-section bottom">
          <NavLink to="/settings" title="Settings" className="nav-item">
            <Settings size={22} strokeWidth={1.5} />
          </NavLink>

          <button className="nav-item logout-trigger" title="Logout">
            <LogOut size={22} strokeWidth={1.5} />
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
// import React, { useState } from 'react';
// import { 
//   Plus, Search, Filter, Calendar, 
//   Eye, Edit3, Send, Archive, MoreHorizontal,
//   ChevronLeft, ChevronRight
// } from 'lucide-react';
// import './incoming-letters.css';

// const IncomingLetters = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Mock data matching your template
//   const letters = [
//     { id: 1, serial: '1', dateLetter: '2023-10-25', dateReceived: '2023-10-27', from: 'Ministry of Finance', ref: 'MOF/2023/114', subject: 'RE: Budget Allocation Q4', officer: 'Sarah Chen', fileRef: 'MF-2023-R05', folio: '112', status: 'Awaiting Action' },
//     { id: 2, serial: '2', dateLetter: '2023-10-25', dateReceived: '2023-10-27', from: 'Received', ref: 'MOF/2023/114', subject: 'RE: Budget Allocation Q4', officer: 'Sarah Chen', fileRef: 'MF-2023-R05', folio: '112', status: 'Awaiting Action' },
//     { id: 3, serial: '3', dateLetter: '2023-10-25', dateReceived: '2023-10-27', from: 'Ministry of Finance', ref: 'MOF/2023/114', subject: 'RE: Budget Allocation Q4', officer: 'Sarah Chen', fileRef: 'MF-2023-R05', folio: '112', status: 'Dispatched' },
//     { id: 4, serial: '4', dateLetter: '2023-10-25', dateReceived: '2023-10-27', from: 'Ministry of Finance', ref: 'MOF/2023/114', subject: 'RE: Budget Allocation Q4', officer: 'Sarah Chen', fileRef: 'MF-2023-R05', folio: '112', status: 'Pending' },
//   ];

//   const getStatusClass = (status) => {
//     switch (status) {
//       case 'Awaiting Action': return 'status-awaiting';
//       case 'Dispatched': return 'status-dispatched';
//       case 'Pending': return 'status-pending';
//       default: return '';
//     }
//   };

//   return (
//     <div className="rms-container">
//       {/* Top Header Bar */}
//       <header className="rms-header">
//         <div className="breadcrumb">Home {'>'} Dashboard {'>'} <span className="active">Records</span></div>
//         <div className="header-actions">
//           <div className="search-bar">
//             <Search size={18} />
//             <input type="text" placeholder="Search letters, files, references..." />
//           </div>
//           <div className="user-profile">
//             <div className="user-avatar">JD</div>
//             <span>John Doe (Admin)</span>
//           </div>
//         </div>
//       </header>

//       <main className="rms-content">
//         <div className="content-title-row">
//           <div>
//             <h1 className="main-title">Incoming Letters <span className="count-badge">28</span></h1>
//             <p className="sub-title">Outgoing Correspondence Register</p>
//           </div>
//           <button className="btn-primary">
//             <Plus size={18} /> Add New Incoming Letter
//           </button>
//         </div>

//         {/* Filters Row */}
//         <div className="filters-row">
//           <button className="filter-btn"><Calendar size={16} /> Date Range</button>
//           <button className="filter-btn">Action Officer</button>
//           <button className="filter-btn">Status</button>
//         </div>

//         {/* Table Wrapper */}
//         <div className="table-card">
//           <table className="rms-table">
//             <thead>
//               <tr>
//                 <th>Serial #</th>
//                 <th>Date of Letter</th>
//                 <th>Date Received</th>
//                 <th>From</th>
//                 <th>Reference</th>
//                 <th>Subject</th>
//                 <th>Action Officer</th>
//                 <th>File Ref #</th>
//                 <th>Folio #</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {letters.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.serial}</td>
//                   <td>{item.dateLetter}</td>
//                   <td>{item.dateReceived}</td>
//                   <td><span className={`sender-pill ${item.from === 'Received' ? 'blue' : ''}`}>{item.from}</span></td>
//                   <td className="text-bold">{item.ref}</td>
//                   <td>{item.subject}</td>
//                   <td>{item.officer}</td>
//                   <td>{item.fileRef}</td>
//                   <td>{item.folio}</td>
//                   <td>
//                     <span className={`status-badge ${getStatusClass(item.status)}`}>
//                       {item.status}
//                     </span>
//                   </td>
//                   <td className="action-cells">
//                     <button title="View"><Eye size={16} /></button>
//                     <button title="Edit"><Edit3 size={16} /></button>
//                     <button title="Dispatch"><Send size={16} /></button>
//                     <button title="Archive"><Archive size={16} /></button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination */}
//           <div className="pagination">
//             <span>Previous</span>
//             <div className="pages">
//               <span className="active">1</span>
//               <span>2</span>
//               <span>3</span>
//               <span>...</span>
//               <span>10</span>
//             </div>
//             <span>Next</span>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default IncomingLetters;



// import React, { useState } from 'react';
// import { Plus, Search, Calendar, Eye, Edit3, Send, Archive } from 'lucide-react';
// import './incoming-letters.css';

// const IncomingLetters = () => {
//   // Mock data - You can later fetch this from your Node.js API
//   const [letters] = useState([
//     { id: 1, serial: '1', dateLetter: '2023-10-25', dateReceived: '2023-10-27', from: 'Ministry of Finance', ref: 'MOF/2023/114', subject: 'RE: Budget Allocation Q4', officer: 'Sarah Chen', fileRef: 'MF-2023-R05', folio: '112', status: 'Awaiting Action' },
//     { id: 2, serial: '2', dateLetter: '2023-10-25', dateReceived: '2023-10-27', from: 'Received', ref: 'MOF/2023/114', subject: 'RE: Budget Allocation Q4', officer: 'Sarah Chen', fileRef: 'MF-2023-R05', folio: '112', status: 'Pending' },
//   ]);

//   return (
//     <div className="rms-page-container">
//       {/* Sub-Header / Breadcrumb Area */}
//       <div className="rms-top-nav">
//         <div className="breadcrumb">Home &gt; Dashboard &gt; <span className="active">Records</span></div>
//         <div className="top-nav-right">
//           <div className="mini-search">
//             <Search size={14} />
//             <input type="text" placeholder="Quick search..." />
//           </div>
//           <div className="admin-profile">
//             <div className="avatar">JA</div>
//             <span>Justice Abban</span>
//           </div>
//         </div>
//       </div>

//       <div className="rms-body">
//         <div className="title-section">
//           <div>
//             <h1>Incoming Letters <span className="badge">28</span></h1>
//             <p>Outgoing Correspondence Register</p>
//           </div>
//           <button className="add-btn">
//             <Plus size={18} /> Add New Incoming Letter
//           </button>
//         </div>

//         <div className="filters">
//           <button className="f-pill"><Calendar size={14} /> Date Range</button>
//           <button className="f-pill">Action Officer</button>
//           <button className="f-pill">Status</button>
//         </div>

//         <div className="data-card">
//           <div className="table-responsive">
//             <table className="main-table">
//               <thead>
//                 <tr>
//                   <th>Serial #</th>
//                   <th>Date</th>
//                   <th>Received</th>
//                   <th>From</th>
//                   <th>Reference</th>
//                   <th>Subject</th>
//                   <th>Status</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {letters.map((l) => (
//                   <tr key={l.id}>
//                     <td>{l.serial}</td>
//                     <td>{l.dateLetter}</td>
//                     <td>{l.dateReceived}</td>
//                     <td><span className={`pill-sender ${l.from === 'Received' ? 'blue' : ''}`}>{l.from}</span></td>
//                     <td className="bold">{l.ref}</td>
//                     <td>{l.subject}</td>
//                     <td><span className={`status ${l.status.toLowerCase().replace(' ', '-')}`}>{l.status}</span></td>
//                     <td className="actions">
//                       <Eye size={16} /> <Edit3 size={16} /> <Send size={16} /> <Archive size={16} />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IncomingLetters;



// import React from 'react';
// import { 
//   Plus, Search, Calendar, Filter, Eye, Edit3, Send, Trash2, 
//   Bell, Mail, ChevronDown 
// } from 'lucide-react';
// import Sidebar from './sidebar'; // Ensure you import your Sidebar component
// import './incoming-letters.css';

// const IncomingLetters = () => {
//   const letters = [
//     { id: 1, serial: '1', dateLetter: '2023-10-25', dateReceived: '2023-10-27', from: 'Ministry of Finance', ref: 'MOF/2023/114', subject: 'RE: Budget Allocation Q4', officer: 'Sarah Chen', fileRef: 'MF-2023-R05', folio: '112', status: 'Awaiting Action' },
//   ];

//   return (
//     <div className="rms-layout">
//       {/* 1. SIDEBAR COMPONENT */}
//       <Sidebar />

//       {/* 2. RIGHT SIDE CONTENT AREA */}
//       <div className="rms-main-container">
        
//         {/* TOP NAVBAR */}
//         <nav className="rms-navbar">
//           <div className="nav-search">
//             <Search size={16} />
//             <input type="text" placeholder="Search by User id, User Name, Date etc" />
//             <Filter size={16} className="filter-icon" />
//           </div>
//           <div className="nav-profile">
//             <button className="nav-btn-plus"><Plus size={18} /></button>
//             <Bell size={20} className="nav-icon" />
//             <Mail size={20} className="nav-icon" />
//             <div className="profile-chip">
//               <img src="https://ui-avatars.com/api/?name=Jack+Dane&background=random" alt="User" />
//               <div className="profile-info">
//                 <span className="user-name">Jack Dane</span>
//                 <span className="user-role">Importation Manager</span>
//               </div>
//               <ChevronDown size={14} />
//             </div>
//           </div>
//         </nav>

//         <main className="rms-content">
//           {/* STATS CARDS ROW */}
//           <div className="stats-grid">
//             <div className="stat-card">
//               <span className="stat-label">Total Records</span>
//               <h2 className="stat-value">100</h2>
//               <span className="stat-sub">All Letters</span>
//             </div>
//             <div className="stat-card">
//               <span className="stat-label">Incoming</span>
//               <h2 className="stat-value">4</h2>
//               <span className="stat-sub">Received</span>
//             </div>
//             <div className="stat-card">
//               <span className="stat-label">Pending Actions</span>
//               <h2 className="stat-value">20</h2>
//               <span className="stat-sub">Awaiting Officer</span>
//             </div>
            
//             <div className="stat-card chart-card">
//               <div className="chart-header">
//                 <span>Incoming Letters</span>
//                 <a href="#" className="view-all">View All</a>
//               </div>
//               <div className="chart-content">
//                 <div className="donut-box">
//                   <div className="donut-hole">
//                     <span className="donut-total">120</span>
//                     <span className="donut-label">Total Records</span>
//                   </div>
//                 </div>
//                 <div className="chart-legend">
//                   <div className="legend-item"><span>Received</span> <strong>40</strong></div>
//                   <div className="legend-item"><span>Pending Actions</span> <strong>12</strong></div>
//                   <div className="legend-item"><span>Dispatched</span> <strong>3</strong></div>
//                   <div className="legend-item legend-cyan"><span>Awaiting Actions</span> <strong>23</strong></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* TABLE SECTION */}
//           <div className="table-section">
//             <div className="table-header">
//               <div className="table-filters">
//                 <button className="filter-pill"><Calendar size={14}/> Date Range <ChevronDown size={14}/></button>
//                 <button className="filter-pill">Action Officer <ChevronDown size={14}/></button>
//                 <button className="filter-pill">Status <ChevronDown size={14}/></button>
//               </div>
//               <button className="btn-add-letter"><Plus size={16}/> Add New Incoming Letter</button>
//             </div>

//             <div className="main-table-container">
//               <table className="incoming-table">
//                 <thead>
//                   <tr>
//                     <th>Serial #</th>
//                     <th>Date of Letter</th>
//                     <th>Date Received</th>
//                     <th>From</th>
//                     <th>Reference</th>
//                     <th>Subject</th>
//                     <th>Action Officer</th>
//                     <th>File Ref #</th>
//                     <th>Folio #</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {letters.map((l) => (
//                     <tr key={l.id}>
//                       <td>{l.serial}</td>
//                       <td>{l.dateLetter}</td>
//                       <td>{l.dateReceived}</td>
//                       <td><span className={`sender-tag ${l.from === 'Received' ? 'blue' : ''}`}>{l.from}</span></td>
//                       <td>{l.ref}</td>
//                       <td>{l.subject}</td>
//                       <td>{l.officer}</td>
//                       <td>{l.fileRef}</td>
//                       <td>{l.folio}</td>
//                       <td><span className="status-badge awaiting">{l.status}</span></td>
//                       <td className="row-actions">
//                         <Eye size={16}/> <Edit3 size={16}/> <Send size={16}/> <Trash2 size={16}/>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default IncomingLetters;



// import React, { useState, useMemo } from 'react';
// import { 
//   Plus, Search, Calendar, Filter, Eye, Edit3, Send, Trash2, 
//   Bell, Mail, ChevronDown 
// } from 'lucide-react';
// import Sidebar from './sidebar'; 
// import './incoming-letters.css';

// const IncomingLetters = () => {
//   // --- 1. STATE MANAGEMENT ---
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [filters, setFilters] = useState({
//     officer: 'Action Officer',
//     status: 'Status',
//     search: ''
//   });

//   // Data Source
//   const [letters] = useState([
//     { 
//       id: 1, 
//       serial: '1', 
//       dateLetter: '2023-10-25', 
//       dateReceived: '2023-10-27', 
//       from: 'Ministry of Finance', 
//       ref: 'MOF/2023/114', 
//       subject: 'RE: Budget Allocation Q4', 
//       officer: 'Sarah Chen', 
//       fileRef: 'MF-2023-R05', 
//       folio: '112', 
//       status: 'Awaiting Action' 
//     },
//     // Adding one more for testing filters
//     { 
//         id: 2, 
//         serial: '2', 
//         dateLetter: '2023-11-01', 
//         dateReceived: '2023-11-03', 
//         from: 'Health Service', 
//         ref: 'GHS/2023/088', 
//         subject: 'Audit Report', 
//         officer: 'Justice Abban', 
//         fileRef: 'GHS-TR-01', 
//         folio: '045', 
//         status: 'Pending' 
//       },
//   ]);

//   // --- 2. FILTERING LOGIC ---
//   const filteredLetters = useMemo(() => {
//     return letters.filter(l => {
//       const matchSearch = l.from.toLowerCase().includes(filters.search.toLowerCase()) || 
//                           l.ref.toLowerCase().includes(filters.search.toLowerCase());
//       const matchOfficer = filters.officer === 'Action Officer' || l.officer === filters.officer;
//       const matchStatus = filters.status === 'Status' || l.status === filters.status;
      
//       return matchSearch && matchOfficer && matchStatus;
//     });
//   }, [filters, letters]);

//   // --- 3. HANDLERS ---
//   const toggleDropdown = (name) => {
//     setActiveDropdown(activeDropdown === name ? null : name);
//   };

//   const handleFilterSelect = (type, value) => {
//     setFilters(prev => ({ ...prev, [type]: value }));
//     setActiveDropdown(null);
//   };

//   return (
//     <div className="rms-layout">
//       <Sidebar />

//       <div className="rms-main-container">
        
//         <nav className="rms-navbar">
//           <div className="nav-search">
//             <Search size={16} color="#64748b" />
//             <input 
//               type="text" 
//               placeholder="Search by From or Reference..." 
//               value={filters.search}
//               onChange={(e) => setFilters({...filters, search: e.target.value})}
//             />
//             <Filter size={16} className="filter-icon" />
//           </div>
          
//           <div className="nav-profile">
//             <button className="nav-btn-plus"><Plus size={18} /></button>
//             <Bell size={20} className="nav-icon" />
//             <Mail size={20} className="nav-icon" />
//             <div className="profile-chip">
//               <img src="https://ui-avatars.com/api/?name=Jack+Dane&background=0ea5e9&color=fff&bold=true" alt="User" />
//               <div className="profile-info">
//                 <span className="user-name">Jack Dane</span>
//                 <span className="user-role">Importation Manager</span>
//               </div>
//               <ChevronDown size={14} color="#64748b" />
//             </div>
//           </div>
//         </nav>

//         <main className="rms-content">
//           <div className="stats-grid">
//             <div className="stat-card">
//               <span className="stat-label">Total Records</span>
//               <h2 className="stat-value">{letters.length}</h2>
//               <span className="stat-sub">All Letters</span>
//             </div>
            
//             <div className="stat-card">
//               <span className="stat-label">Incoming</span>
//               <h2 className="stat-value">4</h2>
//               <span className="stat-sub">Received</span>
//             </div>
            
//             <div className="stat-card">
//               <span className="stat-label">Pending Actions</span>
//               <h2 className="stat-value">20</h2>
//               <span className="stat-sub">Awaiting Officer</span>
//             </div>
            
//             <div className="stat-card chart-card">
//               <div className="chart-header">
//                 <span>Incoming Letters</span>
//                 <a href="#" className="view-all">View All</a>
//               </div>
//               <div className="chart-content">
//                 <div className="donut-box">
//                   <div className="donut-hole">
//                     <span className="donut-total">120</span>
//                     <span className="donut-label">Total Records</span>
//                   </div>
//                 </div>
//                 <div className="chart-legend">
//                   <div className="legend-item"><span>Received</span> <strong>40</strong></div>
//                   <div className="legend-item"><span>Pending Actions</span> <strong>12</strong></div>
//                   <div className="legend-item"><span>Dispatched</span> <strong>3</strong></div>
//                   <div className="legend-item legend-cyan"><span>Awaiting Actions</span> <strong>23</strong></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="table-section">
//             <div className="table-header">
//               <div className="table-filters">
//                 {/* Date Range - Non-functional placeholder for now */}
//                 <button className="filter-pill"><Calendar size={14}/> Date Range <ChevronDown size={14}/></button>
                
//                 {/* Action Officer Dropdown */}
//                 <div className="dropdown-container">
//                     <button className="filter-pill" onClick={() => toggleDropdown('officer')}>
//                         {filters.officer} <ChevronDown size={14}/>
//                     </button>
//                     {activeDropdown === 'officer' && (
//                         <div className="filter-dropdown">
//                             <div onClick={() => handleFilterSelect('officer', 'Action Officer')}>All Officers</div>
//                             <div onClick={() => handleFilterSelect('officer', 'Sarah Chen')}>Sarah Chen</div>
//                             <div onClick={() => handleFilterSelect('officer', 'Justice Abban')}>Justice Abban</div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Status Dropdown */}
//                 <div className="dropdown-container">
//                     <button className="filter-pill" onClick={() => toggleDropdown('status')}>
//                         {filters.status} <ChevronDown size={14}/>
//                     </button>
//                     {activeDropdown === 'status' && (
//                         <div className="filter-dropdown">
//                             <div onClick={() => handleFilterSelect('status', 'Status')}>All Statuses</div>
//                             <div onClick={() => handleFilterSelect('status', 'Awaiting Action')}>Awaiting Action</div>
//                             <div onClick={() => handleFilterSelect('status', 'Pending')}>Pending</div>
//                         </div>
//                     )}
//                 </div>
//               </div>

//               <button className="btn-add-letter" onClick={() => console.log("Add New Letter Modal")}>
//                 <Plus size={16}/> Add New Incoming Letter
//               </button>
//             </div>

//             <div className="main-table-container">
//               <table className="incoming-table">
//                 <thead>
//                   <tr>
//                     <th>Serial #</th>
//                     <th>Date of Letter</th>
//                     <th>Date Received</th>
//                     <th>From</th>
//                     <th>Reference</th>
//                     <th>Subject</th>
//                     <th>Action Officer</th>
//                     <th>File Ref #</th>
//                     <th>Folio #</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredLetters.map((l) => (
//                     <tr key={l.id}>
//                       <td>{l.serial}</td>
//                       <td>{l.dateLetter}</td>
//                       <td>{l.dateReceived}</td>
//                       <td>
//                         <span className={`sender-tag ${l.from === 'Ministry of Finance' ? 'blue' : ''}`}>
//                           {l.from}
//                         </span>
//                       </td>
//                       <td style={{ fontWeight: 600 }}>{l.ref}</td>
//                       <td>{l.subject}</td>
//                       <td>{l.officer}</td>
//                       <td>{l.fileRef}</td>
//                       <td>{l.folio}</td>
//                       <td>
//                         <span className={`status-badge ${l.status === 'Pending' ? 'pending' : 'awaiting'}`}>
//                             {l.status}
//                         </span>
//                       </td>
//                       <td className="row-actions">
//                         <Eye size={16} title="View Details" /> 
//                         <Edit3 size={16} title="Edit Record" /> 
//                         <Send size={16} title="Dispatch" /> 
//                         <Trash2 size={16} title="Delete" />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               {filteredLetters.length === 0 && (
//                 <div className="no-data-msg">No matching records found.</div>
//               )}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default IncomingLetters;



// import React, { useState, useMemo } from 'react';
// import { 
//   Plus, Search, Calendar, Filter, Eye, Edit3, Send, Trash2, 
//   Bell, Mail, ChevronDown 
// } from 'lucide-react';
// import Sidebar from './sidebar'; 
// import './incoming-letters.css';

// const IncomingLetters = () => {
//   // --- 1. STATE MANAGEMENT ---
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [filters, setFilters] = useState({
//     officer: 'Action Officer',
//     status: 'Status',
//     search: ''
//   });

//   // State for Date Range
//   const [dateRange, setDateRange] = useState({
//     start: '',
//     end: ''
//   });

//   // Data Source
//   const [letters] = useState([
//     { 
//       id: 1, 
//       serial: '1', 
//       dateLetter: '2023-10-25', 
//       dateReceived: '2023-10-27', 
//       from: 'Ministry of Finance', 
//       ref: 'MOF/2023/114', 
//       subject: 'RE: Budget Allocation Q4', 
//       officer: 'Sarah Chen', 
//       fileRef: 'MF-2023-R05', 
//       folio: '112', 
//       status: 'Awaiting Action' 
//     },
//     { 
//       id: 2, 
//       serial: '2', 
//       dateLetter: '2023-11-01', 
//       dateReceived: '2023-11-03', 
//       from: 'Health Service', 
//       ref: 'GHS/2023/088', 
//       subject: 'Audit Report', 
//       officer: 'Justice Abban', 
//       fileRef: 'GHS-TR-01', 
//       folio: '045', 
//       status: 'Pending' 
//     },
//   ]);

//   // --- 2. FILTERING LOGIC ---
//   const filteredLetters = useMemo(() => {
//     return letters.filter(l => {
//       // Search Logic
//       const matchSearch = l.from.toLowerCase().includes(filters.search.toLowerCase()) || 
//                           l.ref.toLowerCase().includes(filters.search.toLowerCase());
      
//       // Dropdown Logic
//       const matchOfficer = filters.officer === 'Action Officer' || l.officer === filters.officer;
//       const matchStatus = filters.status === 'Status' || l.status === filters.status;

//       // Date Range Logic
//       const letterDate = new Date(l.dateReceived);
//       const start = dateRange.start ? new Date(dateRange.start) : null;
//       const end = dateRange.end ? new Date(dateRange.end) : null;

//       // Normalize times for accurate comparison
//       if (start) start.setHours(0, 0, 0, 0);
//       if (end) end.setHours(23, 59, 59, 999);

//       const matchDate = (!start || letterDate >= start) && (!end || letterDate <= end);
      
//       return matchSearch && matchOfficer && matchStatus && matchDate;
//     });
//   }, [filters, dateRange, letters]);

//   // --- 3. HANDLERS ---
//   const toggleDropdown = (name) => {
//     setActiveDropdown(activeDropdown === name ? null : name);
//   };

//   const handleFilterSelect = (type, value) => {
//     setFilters(prev => ({ ...prev, [type]: value }));
//     setActiveDropdown(null);
//   };

//   const resetDates = () => {
//     setDateRange({ start: '', end: '' });
//     setActiveDropdown(null);
//   };

//   return (
//     <div className="rms-layout">
//       <Sidebar />

//       <div className="rms-main-container">
//         <nav className="rms-navbar">
//           <div className="nav-search">
//             <Search size={16} color="#64748b" />
//             <input 
//               type="text" 
//               placeholder="Search by From or Reference..." 
//               value={filters.search}
//               onChange={(e) => setFilters({...filters, search: e.target.value})}
//             />
//             <Filter size={16} className="filter-icon" />
//           </div>
          
//           <div className="nav-profile">
//             <button className="nav-btn-plus"><Plus size={18} /></button>
//             <Bell size={20} className="nav-icon" />
//             <Mail size={20} className="nav-icon" />
//             <div className="profile-chip">
//               <img src="https://ui-avatars.com/api/?name=Jack+Dane&background=0ea5e9&color=fff&bold=true" alt="User" />
//               <div className="profile-info">
//                 <span className="user-name">Jack Dane</span>
//                 <span className="user-role">Importation Manager</span>
//               </div>
//               <ChevronDown size={14} color="#64748b" />
//             </div>
//           </div>
//         </nav>

//         <main className="rms-content">
//           <div className="stats-grid">
//             <div className="stat-card">
//               <span className="stat-label">Total Records</span>
//               <h2 className="stat-value">{letters.length}</h2>
//               <span className="stat-sub">All Letters</span>
//             </div>
            
//             <div className="stat-card">
//               <span className="stat-label">Incoming</span>
//               <h2 className="stat-value">4</h2>
//               <span className="stat-sub">Received</span>
//             </div>
            
//             <div className="stat-card">
//               <span className="stat-label">Pending Actions</span>
//               <h2 className="stat-value">20</h2>
//               <span className="stat-sub">Awaiting Officer</span>
//             </div>
            
//             <div className="stat-card chart-card">
//               <div className="chart-header">
//                 <span>Incoming Letters</span>
//                 <a href="#" className="view-all">View All</a>
//               </div>
//               <div className="chart-content">
//                 <div className="donut-box">
//                   <div className="donut-hole">
//                     <span className="donut-total">120</span>
//                     <span className="donut-label">Total Records</span>
//                   </div>
//                 </div>
//                 <div className="chart-legend">
//                   <div className="legend-item"><span>Received</span> <strong>40</strong></div>
//                   <div className="legend-item"><span>Pending Actions</span> <strong>12</strong></div>
//                   <div className="legend-item"><span>Dispatched</span> <strong>3</strong></div>
//                   <div className="legend-item legend-cyan"><span>Awaiting Actions</span> <strong>23</strong></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="table-section">
//             <div className="table-header">
//               <div className="table-filters">
                
//                 {/* DATE RANGE DROPDOWN */}
//                 <div className="dropdown-container">
//                   <button 
//                     className={`filter-pill ${dateRange.start || dateRange.end ? 'active-filter' : ''}`} 
//                     onClick={() => toggleDropdown('date')}
//                   >
//                     <Calendar size={14}/> 
//                     {dateRange.start ? `${dateRange.start} - ${dateRange.end || '...'}` : 'Date Range'} 
//                     <ChevronDown size={14}/>
//                   </button>
//                   {activeDropdown === 'date' && (
//                     <div className="filter-dropdown date-dropdown">
//                       <div className="date-input-row">
//                         <label>From</label>
//                         <input 
//                           type="date" 
//                           value={dateRange.start} 
//                           onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
//                         />
//                       </div>
//                       <div className="date-input-row">
//                         <label>To</label>
//                         <input 
//                           type="date" 
//                           value={dateRange.end} 
//                           onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
//                         />
//                       </div>
//                       <button className="reset-date-btn" onClick={resetDates}>Reset Date</button>
//                     </div>
//                   )}
//                 </div>
                
//                 {/* Action Officer Dropdown */}
//                 <div className="dropdown-container">
//                     <button className="filter-pill" onClick={() => toggleDropdown('officer')}>
//                         {filters.officer} <ChevronDown size={14}/>
//                     </button>
//                     {activeDropdown === 'officer' && (
//                         <div className="filter-dropdown">
//                             <div onClick={() => handleFilterSelect('officer', 'Action Officer')}>All Officers</div>
//                             <div onClick={() => handleFilterSelect('officer', 'Sarah Chen')}>Sarah Chen</div>
//                             <div onClick={() => handleFilterSelect('officer', 'Justice Abban')}>Justice Abban</div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Status Dropdown */}
//                 <div className="dropdown-container">
//                     <button className="filter-pill" onClick={() => toggleDropdown('status')}>
//                         {filters.status} <ChevronDown size={14}/>
//                     </button>
//                     {activeDropdown === 'status' && (
//                         <div className="filter-dropdown">
//                             <div onClick={() => handleFilterSelect('status', 'Status')}>All Statuses</div>
//                             <div onClick={() => handleFilterSelect('status', 'Awaiting Action')}>Awaiting Action</div>
//                             <div onClick={() => handleFilterSelect('status', 'Pending')}>Pending</div>
//                         </div>
//                     )}
//                 </div>
//               </div>

//               <button className="btn-add-letter" onClick={() => console.log("Add New Letter Modal")}>
//                 <Plus size={16}/> Add New Incoming Letter
//               </button>
//             </div>

//             <div className="main-table-container">
//               <table className="incoming-table">
//                 <thead>
//                   <tr>
//                     <th>Serial #</th>
//                     <th>Date of Letter</th>
//                     <th>Date Received</th>
//                     <th>From</th>
//                     <th>Reference</th>
//                     <th>Subject</th>
//                     <th>Action Officer</th>
//                     <th>File Ref #</th>
//                     <th>Folio #</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredLetters.map((l) => (
//                     <tr key={l.id}>
//                       <td>{l.serial}</td>
//                       <td>{l.dateLetter}</td>
//                       <td>{l.dateReceived}</td>
//                       <td>
//                         <span className={`sender-tag ${l.from === 'Ministry of Finance' ? 'blue' : ''}`}>
//                           {l.from}
//                         </span>
//                       </td>
//                       <td style={{ fontWeight: 600 }}>{l.ref}</td>
//                       <td>{l.subject}</td>
//                       <td>{l.officer}</td>
//                       <td>{l.fileRef}</td>
//                       <td>{l.folio}</td>
//                       <td>
//                         <span className={`status-badge ${l.status === 'Pending' ? 'pending' : 'awaiting'}`}>
//                             {l.status}
//                         </span>
//                       </td>
//                       <td className="row-actions">
//                         <Eye size={16} title="View Details" /> 
//                         <Edit3 size={16} title="Edit Record" /> 
//                         <Send size={16} title="Dispatch" /> 
//                         <Trash2 size={16} title="Delete" />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               {filteredLetters.length === 0 && (
//                 <div className="no-data-msg">No matching records found.</div>
//               )}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default IncomingLetters;


// import React, { useState, useMemo } from 'react';
// import { 
//   Plus, Search, Calendar, Filter, Eye, Edit3, Trash2, 
//   Bell, Mail, ChevronDown, X, Upload 
// } from 'lucide-react';
// import Sidebar from './sidebar'; 
// import './incoming-letters.css';

// const IncomingLetters = () => {
//   // --- 1. STATE MANAGEMENT ---
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentEditId, setCurrentEditId] = useState(null);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [filters, setFilters] = useState({ officer: 'Action Officer', status: 'Status', search: '' });
//   const [dateRange, setDateRange] = useState({ start: '', end: '' });

//   const [newLetter, setNewLetter] = useState({
//     serialNo: '', dateLetter: '', from: '', reference: '', 
//     subject: '', officer: '', fileRef: '', folio: '', 
//     status: 'Awaiting Action',
//     document: null
//   });

//   const [letters, setLetters] = useState([
//     { id: 1, serial: '1', dateLetter: '2023-10-25', dateReceived: '2023-10-27', from: 'Ministry of Finance', ref: 'MOF/2023/114', subject: 'RE: Budget Allocation Q4', officer: 'Sarah Chen', fileRef: 'MF-2023-R05', folio: '112', status: 'Awaiting Action' },
//     { id: 2, serial: '2', dateLetter: '2023-11-01', dateReceived: '2023-11-03', from: 'Health Service', ref: 'GHS/2023/088', subject: 'Audit Report', officer: 'Justice Abban', fileRef: 'GHS-TR-01', folio: '045', status: 'Pending' },
//   ]);

//   // --- 2. HANDLER FUNCTIONS ---
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewLetter(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setNewLetter(prev => ({ ...prev, document: e.target.files[0] }));
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setIsEditing(false);
//     setNewLetter({ serialNo: '', dateLetter: '', from: '', reference: '', subject: '', officer: '', fileRef: '', folio: '', status: 'Awaiting Action', document: null });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       setLetters(letters.map(l => l.id === currentEditId ? {
//         ...l,
//         serial: newLetter.serialNo,
//         dateLetter: newLetter.dateLetter,
//         from: newLetter.from,
//         ref: newLetter.reference,
//         subject: newLetter.subject,
//         officer: newLetter.officer,
//         fileRef: newLetter.fileRef,
//         folio: newLetter.folio,
//         status: newLetter.status
//       } : l));
//     } else {
//       const entry = {
//         id: Date.now(),
//         serial: newLetter.serialNo,
//         dateLetter: newLetter.dateLetter,
//         dateReceived: new Date().toISOString().split('T')[0],
//         from: newLetter.from,
//         ref: newLetter.reference,
//         subject: newLetter.subject,
//         officer: newLetter.officer,
//         fileRef: newLetter.fileRef,
//         folio: newLetter.folio,
//         status: newLetter.status
//       };
//       setLetters([entry, ...letters]);
//     }
//     closeModal();
//   };

//   const handleAction = (type, id) => {
//     if (type === 'delete') {
//       if (window.confirm("Are you sure you want to delete this record?")) {
//         setLetters(letters.filter(l => l.id !== id));
//       }
//     } else if (type === 'edit') {
//       const letterToEdit = letters.find(l => l.id === id);
//       setNewLetter({
//         serialNo: letterToEdit.serial,
//         dateLetter: letterToEdit.dateLetter,
//         from: letterToEdit.from,
//         reference: letterToEdit.ref,
//         subject: letterToEdit.subject,
//         officer: letterToEdit.officer,
//         fileRef: letterToEdit.fileRef,
//         folio: letterToEdit.folio,
//         status: letterToEdit.status,
//         document: null
//       });
//       setCurrentEditId(id);
//       setIsEditing(true);
//       setIsModalOpen(true);
//     }
//   };

//   const filteredLetters = useMemo(() => {
//     return letters.filter(l => {
//       const matchSearch = l.from.toLowerCase().includes(filters.search.toLowerCase()) || l.ref.toLowerCase().includes(filters.search.toLowerCase());
//       const matchOfficer = filters.officer === 'Action Officer' || l.officer === filters.officer;
//       const matchStatus = filters.status === 'Status' || l.status === filters.status;
//       const letterDate = new Date(l.dateReceived);
//       const start = dateRange.start ? new Date(dateRange.start) : null;
//       const end = dateRange.end ? new Date(dateRange.end) : null;
//       if (start) start.setHours(0, 0, 0, 0);
//       if (end) end.setHours(23, 59, 59, 999);
//       const matchDate = (!start || letterDate >= start) && (!end || letterDate <= end);
//       return matchSearch && matchOfficer && matchStatus && matchDate;
//     });
//   }, [filters, dateRange, letters]);

//   const toggleDropdown = (name) => setActiveDropdown(activeDropdown === name ? null : name);
//   const handleFilterSelect = (type, value) => { setFilters(prev => ({ ...prev, [type]: value })); setActiveDropdown(null); };
//   const resetDates = () => { setDateRange({ start: '', end: '' }); setActiveDropdown(null); };

//   return (
//     <div className="rms-layout">
//       <Sidebar />
//       <div className="rms-main-container">
//         <nav className="rms-navbar">
//           <div className="nav-search">
//             <Search size={16} color="#64748b" />
//             <input type="text" placeholder="Search..." value={filters.search} onChange={(e) => setFilters({...filters, search: e.target.value})} />
//             <Filter size={16} className="filter-icon" />
//           </div>
//           <div className="nav-profile">
//             <button className="nav-btn-plus" onClick={() => setIsModalOpen(true)}><Plus size={18} /></button>
//             <Bell size={20} className="nav-icon" />
//             <Mail size={20} className="nav-icon" />
//             <div className="profile-chip">
//               <img src="https://ui-avatars.com/api/?name=Jack+Dane&background=0ea5e9&color=fff&bold=true" alt="User" />
//               <div className="profile-info"><span className="user-name">Jack Dane</span><span className="user-role">Manager</span></div>
//               <ChevronDown size={14} color="#64748b" />
//             </div>
//           </div>
//         </nav>

//         <main className="rms-content">
//           <div className="stats-grid">
//             <div className="stat-card"><span className="stat-label">Total Records</span><h2 className="stat-value">{letters.length}</h2><span className="stat-sub">All Letters</span></div>
//             <div className="stat-card"><span className="stat-label">Incoming</span><h2 className="stat-value">4</h2><span className="stat-sub">Received</span></div>
//             <div className="stat-card"><span className="stat-label">Pending</span><h2 className="stat-value">20</h2><span className="stat-sub">Awaiting Officer</span></div>
//             <div className="stat-card chart-card">
//               <div className="chart-header"><span>Letters Overview</span></div>
//               <div className="chart-content">
//                  <div className="donut-box"><div className="donut-hole"><span className="donut-total">120</span></div></div>
//                  <div className="chart-legend"><div className="legend-item">Received <strong>40</strong></div><div className="legend-item">Pending <strong>12</strong></div></div>
//               </div>
//             </div>
//           </div>

//           <div className="table-section">
//             <div className="table-header">
//               <div className="table-filters">
//                 <div className="dropdown-container">
//                   <button className={`filter-pill ${dateRange.start ? 'active-filter' : ''}`} onClick={() => toggleDropdown('date')}><Calendar size={14}/> {dateRange.start || 'Date Range'} <ChevronDown size={14}/></button>
//                   {activeDropdown === 'date' && (
//                     <div className="filter-dropdown date-dropdown">
//                       <div className="date-input-row"><label>From</label><input type="date" value={dateRange.start} onChange={(e) => setDateRange({...dateRange, start: e.target.value})} /></div>
//                       <div className="date-input-row"><label>To</label><input type="date" value={dateRange.end} onChange={(e) => setDateRange({...dateRange, end: e.target.value})} /></div>
//                       <button className="reset-date-btn" onClick={resetDates}>Reset</button>
//                     </div>
//                   )}
//                 </div>

//                 <div className="dropdown-container">
//                     <button className="filter-pill" onClick={() => toggleDropdown('officer')}>{filters.officer} <ChevronDown size={14}/></button>
//                     {activeDropdown === 'officer' && (
//                         <div className="filter-dropdown">
//                             <div onClick={() => handleFilterSelect('officer', 'Action Officer')}>All Officers</div>
//                             <div onClick={() => handleFilterSelect('officer', 'Sarah Chen')}>Sarah Chen</div>
//                             <div onClick={() => handleFilterSelect('officer', 'Justice Abban')}>Justice Abban</div>
//                         </div>
//                     )}
//                 </div>

//                 <div className="dropdown-container">
//                     <button className="filter-pill" onClick={() => toggleDropdown('status')}>{filters.status} <ChevronDown size={14}/></button>
//                     {activeDropdown === 'status' && (
//                         <div className="filter-dropdown">
//                             <div onClick={() => handleFilterSelect('status', 'Status')}>All Statuses</div>
//                             <div onClick={() => handleFilterSelect('status', 'Awaiting Action')}>Awaiting Action</div>
//                             <div onClick={() => handleFilterSelect('status', 'Pending')}>Pending</div>
//                         </div>
//                     )}
//                 </div>
//               </div>
//               <button className="btn-add-letter" onClick={() => setIsModalOpen(true)}><Plus size={16}/> Add New Incoming Letter</button>
//             </div>

//             <div className="main-table-container">
//               <table className="incoming-table">
//                 <thead>
//                   <tr><th>Serial #</th><th>Date</th><th>Received</th><th>From</th><th>Reference</th><th>Subject</th><th>Action Officer</th><th>File Ref #</th><th>Folio #</th><th>Status</th><th>Actions</th></tr>
//                 </thead>
//                 <tbody>
//                   {filteredLetters.map((l) => (
//                     <tr key={l.id}>
//                       <td>{l.serial}</td><td>{l.dateLetter}</td><td>{l.dateReceived}</td>
//                       <td>
//                         {/* Changed: Applied sender-tag to ANY department automatically */}
//                         <span className="sender-tag">
//                           {l.from}
//                         </span>
//                       </td>
//                       <td style={{ fontWeight: 600 }}>{l.ref}</td><td>{l.subject}</td>
//                       <td>{l.officer}</td><td>{l.fileRef}</td><td>{l.folio}</td>
//                       <td>
//                         {/* Changed: Standardized badge logic for both statuses */}
//                         <span className={`status-badge ${l.status === 'Pending' ? 'pending' : 'awaiting'}`}>
//                           {l.status}
//                         </span>
//                       </td>
//                       <td className="row-actions">
//                         <button className="icon-btn" onClick={() => handleAction('view', l.id)} title="View Detail"><Eye size={16} /></button>
//                         <button className="icon-btn" onClick={() => handleAction('edit', l.id)} title="Edit Record"><Edit3 size={16} /></button>
//                         <button className="icon-btn delete" onClick={() => handleAction('delete', l.id)} title="Delete Record"><Trash2 size={16} /></button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               {filteredLetters.length === 0 && <div className="no-data-msg">No matching records found.</div>}
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* --- ADD/EDIT MODAL OVERLAY --- */}
//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal-card">
//             <div className="modal-header">
//               <h3>{isEditing ? 'Update Letter Details' : 'Add New Incoming Letter'}</h3>
//               <button className="close-btn" onClick={closeModal}><X size={20}/></button>
//             </div>
//             <form onSubmit={handleSubmit} className="modal-form">
//               <div className="form-grid">
//                 <div className="form-group"><label>Serial #</label><input type="text" name="serialNo" required value={newLetter.serialNo} onChange={handleInputChange} /></div>
//                 <div className="form-group"><label>Date of Letter</label><input type="date" name="dateLetter" required value={newLetter.dateLetter} onChange={handleInputChange} /></div>
//                 <div className="form-group"><label>From</label><input type="text" name="from" required value={newLetter.from} onChange={handleInputChange} /></div>
//                 <div className="form-group"><label>Reference</label><input type="text" name="reference" required value={newLetter.reference} onChange={handleInputChange} /></div>
//                 <div className="form-group full-width"><label>Subject</label><input type="text" name="subject" required value={newLetter.subject} onChange={handleInputChange} /></div>
//                 <div className="form-group">
//                   <label>Action Officer</label>
//                   <select name="officer" required value={newLetter.officer} onChange={handleInputChange}>
//                     <option value="">Select Officer</option>
//                     <option value="Sarah Chen">Sarah Chen</option>
//                     <option value="Justice Abban">Justice Abban</option>
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label>Letter Status</label>
//                   <select name="status" value={newLetter.status} onChange={handleInputChange}>
//                     <option value="Awaiting Action">Awaiting Action</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Dispatched">Dispatched</option>
//                   </select>
//                 </div>
//                 <div className="form-group"><label>File Ref</label><input type="text" name="fileRef" value={newLetter.fileRef} onChange={handleInputChange} /></div>
//                 <div className="form-group"><label>Folio #</label><input type="text" name="folio" value={newLetter.folio} onChange={handleInputChange} /></div>
//                 <div className="form-group full-width">
//                   <label>Scanned Document</label>
//                   <div className="upload-area">
//                     <input type="file" id="file-upload" hidden onChange={handleFileChange} />
//                     <label htmlFor="file-upload" className="upload-label">
//                       <Upload size={18} /> {newLetter.document ? newLetter.document.name : 'Upload PDF or Image'}
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn-cancel" onClick={closeModal}>Cancel</button>
//                 <button type="submit" className="btn-save">{isEditing ? 'Update Registry' : 'Save Letter'}</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IncomingLetters;


// import React, { useState, useMemo, useEffect } from 'react';
// import { 
//   Plus, Search, Calendar, Filter, Eye, Edit3, Send, Trash2, 
//   Bell, Mail, ChevronDown, X, Upload 
// } from 'lucide-react';
// import Sidebar from './sidebar'; 
// import './incoming-letters.css';

// const IncomingLetters = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentEditId, setCurrentEditId] = useState(null);
//   const [letters, setLetters] = useState([]); // Initialize empty for DB fetch
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [filters, setFilters] = useState({ officer: 'Action Officer', status: 'Status', search: '' });
//   const [dateRange, setDateRange] = useState({ start: '', end: '' });

//   const [newLetter, setNewLetter] = useState({
//     serialNo: '', dateLetter: '', from: '', reference: '', 
//     subject: '', officer: '', fileRef: '', folio: '', 
//     status: 'Awaiting Action', document: null
//   });

//   // --- 1. DB FETCH ON LOAD ---
//   useEffect(() => {
//     fetchLetters();
//   }, []);

//   const fetchLetters = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/letters'); // Update with your actual port
//       const data = await response.json();
//       setLetters(data);
//     } catch (err) {
//       console.error("Error fetching letters:", err);
//     }
//   };

//   // --- 2. HANDLERS ---
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewLetter(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setNewLetter(prev => ({ ...prev, document: e.target.files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare Multipart Data for File Upload
//     const formData = new FormData();
//     formData.append('serialNo', newLetter.serialNo);
//     formData.append('dateLetter', newLetter.dateLetter);
//     formData.append('from', newLetter.from);
//     formData.append('reference', newLetter.reference);
//     formData.append('subject', newLetter.subject);
//     formData.append('officer', newLetter.officer);
//     formData.append('fileRef', newLetter.fileRef);
//     formData.append('folio', newLetter.folio);
//     formData.append('status', newLetter.status);
//     if (newLetter.document) formData.append('document', newLetter.document);

//     try {
//       const url = isEditing 
//         ? `http://localhost:5000/api/letters/${currentEditId}` 
//         : 'http://localhost:5000/api/letters';
      
//       const method = isEditing ? 'PUT' : 'POST';

//       const response = await fetch(url, {
//         method: method,
//         body: formData, // Do NOT set Content-Type header when using FormData
//       });

//       if (response.ok) {
//         fetchLetters(); // Refresh list from DB
//         closeModal();
//       }
//     } catch (err) {
//       console.error("Database Connection Error:", err);
//     }
//   };

//   const handleAction = async (type, id) => {
//     if (type === 'delete') {
//       if (window.confirm("Are you sure you want to delete this record?")) {
//         try {
//           await fetch(`http://localhost:5000/api/letters/${id}`, { method: 'DELETE' });
//           fetchLetters(); // Refresh list
//         } catch (err) {
//           console.error("Error deleting letter:", err);
//         }
//       }
//     } else if (type === 'edit') {
//       const letterToEdit = letters.find(l => l.id === id);
//       setNewLetter({
//         serialNo: letterToEdit.serial,
//         dateLetter: letterToEdit.date_letter, // Ensure these match your DB column names
//         from: letterToEdit.from_source,
//         reference: letterToEdit.reference_no,
//         subject: letterToEdit.subject,
//         officer: letterToEdit.action_officer,
//         fileRef: letterToEdit.file_ref,
//         folio: letterToEdit.folio_no,
//         status: letterToEdit.status,
//         document: null
//       });
//       setCurrentEditId(id);
//       setIsEditing(true);
//       setIsModalOpen(true);
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setIsEditing(false);
//     setNewLetter({ serialNo: '', dateLetter: '', from: '', reference: '', subject: '', officer: '', fileRef: '', folio: '', status: 'Awaiting Action', document: null });
//   };

//   // --- FILTERING LOGIC ---
//   const filteredLetters = useMemo(() => {
//     return letters.filter(l => {
//       const matchSearch = (l.from_source || "").toLowerCase().includes(filters.search.toLowerCase()) || 
//                           (l.reference_no || "").toLowerCase().includes(filters.search.toLowerCase());
//       const matchOfficer = filters.officer === 'Action Officer' || l.action_officer === filters.officer;
//       const matchStatus = filters.status === 'Status' || l.status === filters.status;
//       return matchSearch && matchOfficer && matchStatus;
//     });
//   }, [filters, letters]);

//   const toggleDropdown = (name) => setActiveDropdown(activeDropdown === name ? null : name);
//   const handleFilterSelect = (type, value) => { setFilters(prev => ({ ...prev, [type]: value })); setActiveDropdown(null); };
//   const resetDates = () => { setDateRange({ start: '', end: '' }); setActiveDropdown(null); };

//   return (
//     <div className="rms-layout">
//       <Sidebar />
//       <div className="rms-main-container">
//         <nav className="rms-navbar">
//           <div className="nav-search">
//             <Search size={16} color="#64748b" />
//             <input type="text" placeholder="Search..." value={filters.search} onChange={(e) => setFilters({...filters, search: e.target.value})} />
//             <Filter size={16} className="filter-icon" />
//           </div>
//           <div className="nav-profile">
//             <button className="nav-btn-plus" onClick={() => setIsModalOpen(true)}><Plus size={18} /></button>
//             <Bell size={20} className="nav-icon" />
//             <Mail size={20} className="nav-icon" />
//             <div className="profile-chip">
//               <img src="https://ui-avatars.com/api/?name=Jack+Dane&background=0ea5e9&color=fff&bold=true" alt="User" />
//               <div className="profile-info"><span className="user-name">Jack Dane</span><span className="user-role">Manager</span></div>
//               <ChevronDown size={14} color="#64748b" />
//             </div>
//           </div>
//         </nav>

//         <main className="rms-content">
//           <div className="stats-grid">
//             <div className="stat-card"><span className="stat-label">Total Records</span><h2 className="stat-value">{letters.length}</h2><span className="stat-sub">All Letters</span></div>
//             <div className="stat-card"><span className="stat-label">Incoming</span><h2 className="stat-value">4</h2><span className="stat-sub">Received</span></div>
//             <div className="stat-card"><span className="stat-label">Pending</span><h2 className="stat-value">20</h2><span className="stat-sub">Awaiting Officer</span></div>
//             <div className="stat-card chart-card">
//               <div className="chart-header"><span>Overview</span></div>
//               <div className="chart-content">
//                  <div className="donut-box"><div className="donut-hole"><span className="donut-total">{letters.length}</span></div></div>
//               </div>
//             </div>
//           </div>

//           <div className="table-section">
//             <div className="table-header">
//               <div className="table-filters">
//                 <div className="dropdown-container">
//                   <button className={`filter-pill ${dateRange.start ? 'active-filter' : ''}`} onClick={() => toggleDropdown('date')}><Calendar size={14}/> {dateRange.start || 'Date Range'} <ChevronDown size={14}/></button>
//                   {activeDropdown === 'date' && (
//                     <div className="filter-dropdown date-dropdown">
//                       <div className="date-input-row"><label>From</label><input type="date" value={dateRange.start} onChange={(e) => setDateRange({...dateRange, start: e.target.value})} /></div>
//                       <div className="date-input-row"><label>To</label><input type="date" value={dateRange.end} onChange={(e) => setDateRange({...dateRange, end: e.target.value})} /></div>
//                       <button className="reset-date-btn" onClick={resetDates}>Reset</button>
//                     </div>
//                   )}
//                 </div>

//                 <div className="dropdown-container">
//                     <button className="filter-pill" onClick={() => toggleDropdown('officer')}>{filters.officer} <ChevronDown size={14}/></button>
//                     {activeDropdown === 'officer' && (
//                         <div className="filter-dropdown">
//                             <div onClick={() => handleFilterSelect('officer', 'Action Officer')}>All Officers</div>
//                             <div onClick={() => handleFilterSelect('officer', 'Sarah Chen')}>Sarah Chen</div>
//                             <div onClick={() => handleFilterSelect('officer', 'Justice Abban')}>Justice Abban</div>
//                         </div>
//                     )}
//                 </div>

//                 <div className="dropdown-container">
//                     <button className="filter-pill" onClick={() => toggleDropdown('status')}>{filters.status} <ChevronDown size={14}/></button>
//                     {activeDropdown === 'status' && (
//                         <div className="filter-dropdown">
//                             <div onClick={() => handleFilterSelect('status', 'Status')}>All Statuses</div>
//                             <div onClick={() => handleFilterSelect('status', 'Awaiting Action')}>Awaiting Action</div>
//                             <div onClick={() => handleFilterSelect('status', 'Pending')}>Pending</div>
//                         </div>
//                     )}
//                 </div>
//               </div>
//               <button className="btn-add-letter" onClick={() => setIsModalOpen(true)}><Plus size={16}/> Add New Incoming Letter</button>
//             </div>

//             <div className="main-table-container">
//               <table className="incoming-table">
//                 <thead>
//                   <tr><th>Serial #</th><th>Date</th><th>From</th><th>Reference</th><th>Subject</th><th>Officer</th><th>File Ref</th><th>Folio</th><th>Status</th><th>Actions</th></tr>
//                 </thead>
//                 <tbody>
//                   {filteredLetters.map((l) => (
//                     <tr key={l.id}>
//                       <td>{l.serial}</td>
//                       <td>{new Date(l.date_letter).toLocaleDateString()}</td>
//                       <td><span className="sender-tag">{l.from_source}</span></td>
//                       <td style={{ fontWeight: 600 }}>{l.reference_no}</td>
//                       <td>{l.subject}</td>
//                       <td>{l.action_officer}</td>
//                       <td>{l.file_ref}</td>
//                       <td>{l.folio_no}</td>
//                       <td><span className={`status-badge ${l.status === 'Pending' ? 'pending' : 'awaiting'}`}>{l.status}</span></td>
//                       <td className="row-actions">
//                         <button className="icon-btn" onClick={() => handleAction('view', l.id)}><Eye size={16} /></button>
//                         <button className="icon-btn" onClick={() => handleAction('edit', l.id)}><Edit3 size={16} /></button>
//                         <button className="icon-btn delete" onClick={() => handleAction('delete', l.id)}><Trash2 size={16} /></button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </main>
//       </div>

//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal-card">
//             <div className="modal-header">
//               <h3>{isEditing ? 'Update Letter Details' : 'Add New Incoming Letter'}</h3>
//               <button className="close-btn" onClick={closeModal}><X size={20}/></button>
//             </div>
//             <form onSubmit={handleSubmit} className="modal-form">
//               <div className="form-grid">
//                 <div className="form-group"><label>Serial #</label><input type="text" name="serialNo" required value={newLetter.serialNo} onChange={handleInputChange} /></div>
//                 <div className="form-group"><label>Date of Letter</label><input type="date" name="dateLetter" required value={newLetter.dateLetter} onChange={handleInputChange} /></div>
//                 <div className="form-group"><label>From</label><input type="text" name="from" required value={newLetter.from} onChange={handleInputChange} /></div>
//                 <div className="form-group"><label>Reference</label><input type="text" name="reference" required value={newLetter.reference} onChange={handleInputChange} /></div>
//                 <div className="form-group full-width"><label>Subject</label><input type="text" name="subject" required value={newLetter.subject} onChange={handleInputChange} /></div>
//                 <div className="form-group">
//                   <label>Action Officer</label>
//                   <select name="officer" required value={newLetter.officer} onChange={handleInputChange}>
//                     <option value="">Select Officer</option>
//                     <option value="Sarah Chen">Sarah Chen</option>
//                     <option value="Justice Abban">Justice Abban</option>
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label>Status</label>
//                   <select name="status" value={newLetter.status} onChange={handleInputChange}>
//                     <option value="Awaiting Action">Awaiting Action</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Dispatched">Dispatched</option>
//                   </select>
//                 </div>
//                 <div className="form-group"><label>File Ref</label><input type="text" name="fileRef" value={newLetter.fileRef} onChange={handleInputChange} /></div>
//                 <div className="form-group"><label>Folio #</label><input type="text" name="folio" value={newLetter.folio} onChange={handleInputChange} /></div>
//                 <div className="form-group full-width">
//                   <label>Scanned Document</label>
//                   <div className="upload-area">
//                     <input type="file" id="file-upload" hidden onChange={handleFileChange} />
//                     <label htmlFor="file-upload" className="upload-label">
//                       <Upload size={18} /> {newLetter.document ? newLetter.document.name : 'Upload PDF or Image'}
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn-cancel" onClick={closeModal}>Cancel</button>
//                 <button type="submit" className="btn-save">{isEditing ? 'Update Registry' : 'Save Letter'}</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IncomingLetters;



import React, { useState, useMemo, useEffect } from 'react';
import { Plus, Search, Calendar, Filter, Eye, Edit3, Send, Trash2, Bell, Mail, ChevronDown, X, Upload } from 'lucide-react';
import Sidebar from './sidebar'; 
import './incoming-letters.css';

const IncomingLetters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditId, setCurrentEditId] = useState(null);
  const [letters, setLetters] = useState([]); 
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [filters, setFilters] = useState({ officer: 'Action Officer', status: 'Status', search: '' });
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const [newLetter, setNewLetter] = useState({
    serial_id: '', date_of_letter: '', sender_org: '', reference_no: '', 
    subject: '', action_officer_id: '', file_ref_no: '', folio_no: '', 
    status: 'Awaiting Action', document: null
  });

  useEffect(() => { fetchLetters(); }, []);

  const fetchLetters = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/letters');
      
      // Necessary Change: Stop UI crash if backend fails
      if (!response.ok) {
        console.error("Server Error: 500");
        setLetters([]); 
        return;
      }

      const data = await response.json();
      // Necessary Change: Ensure letters is always an array
      setLetters(Array.isArray(data) ? data : []);
    } catch (err) { 
      console.error("Network Error:", err); 
      setLetters([]); 
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLetter(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setNewLetter(prev => ({ ...prev, document: e.target.files[0] }));
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    setCurrentEditId(null);
    setNewLetter({ serial_id: '', date_of_letter: '', sender_org: '', reference_no: '', subject: '', action_officer_id: '', file_ref_no: '', folio_no: '', status: 'Awaiting Action', document: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    // Necessary Change: Synchronize keys with backend req.body destructuring
    formData.append('serial_id', newLetter.serial_id);
    formData.append('date_of_letter', newLetter.date_of_letter);
    formData.append('sender_org', newLetter.sender_org);
    formData.append('reference_no', newLetter.reference_no);
    formData.append('subject', newLetter.subject);
    formData.append('action_officer_id', newLetter.action_officer_id);
    formData.append('file_ref_no', newLetter.file_ref_no);
    formData.append('folio_no', newLetter.folio_no);
    formData.append('status', newLetter.status);
    
    if (newLetter.document) {
      formData.append('document', newLetter.document);
    }

    try {
      const url = isEditing ? `http://localhost:4000/api/letters/${currentEditId}` : 'http://localhost:4000/api/letters';
      const response = await fetch(url, { 
        method: isEditing ? 'PUT' : 'POST', 
        body: formData 
      });
      
      const result = await response.json();
      
      if (response.ok) { 
        fetchLetters(); 
        closeModal(); 
      } else { 
        alert("Error: " + (result.error || "Failed to save")); 
      }
    } catch (err) { 
      alert("Connection Error to port 4000"); 
    }
  };

  const handleAction = async (type, id) => {
    if (type === 'delete') {
      if (window.confirm("Confirm Delete?")) {
        try {
          const response = await fetch(`http://localhost:4000/api/letters/${id}`, { method: 'DELETE' });
          if (response.ok) fetchLetters();
        } catch (err) { console.error(err); }
      }
    } else if (type === 'edit') {
      const l = letters.find(item => item.serial_id === id);
      if (!l) return;
      setNewLetter({
        serial_id: l.serial_id,
        date_of_letter: l.date_of_letter ? l.date_of_letter.split('T')[0] : '', 
        sender_org: l.sender_org, 
        reference_no: l.reference_no, 
        subject: l.subject,
        action_officer_id: l.action_officer_id, 
        file_ref_no: l.file_ref_no, 
        folio_no: l.folio_no,
        status: l.status, 
        document: null
      });
      setCurrentEditId(id);
      setIsEditing(true);
      setIsModalOpen(true);
    } else if (type === 'view') {
      const l = letters.find(item => item.serial_id === id);
      if (l && l.document_path) window.open(`http://localhost:4000${l.document_path}`, '_blank');
      else alert("No scanned document attached.");
    }
  };

  const filteredLetters = useMemo(() => {
    // Necessary Change: Defensive check to prevent crash if fetch failed
    if (!Array.isArray(letters)) return [];
    
    return letters.filter(l => {
      const matchSearch = (l.sender_org || "").toLowerCase().includes(filters.search.toLowerCase()) || 
                          (l.reference_no || "").toLowerCase().includes(filters.search.toLowerCase());
      const matchOfficer = filters.officer === 'Action Officer' || l.action_officer_id === filters.officer;
      const matchStatus = filters.status === 'Status' || l.status === filters.status;
      return matchSearch && matchOfficer && matchStatus;
    });
  }, [filters, letters]);

  const toggleDropdown = (name) => setActiveDropdown(activeDropdown === name ? null : name);
  const handleFilterSelect = (type, value) => { setFilters(prev => ({ ...prev, [type]: value })); setActiveDropdown(null); };

  return (
    <div className="rms-layout">
      <Sidebar />
      <div className="rms-main-container">
        <nav className="rms-navbar">
          <div className="nav-search">
            <Search size={16} color="#64748b" />
            <input type="text" placeholder="Search Source or Ref..." value={filters.search} onChange={(e) => setFilters({...filters, search: e.target.value})} />
            <Filter size={16} className="filter-icon" />
          </div>
          <div className="nav-profile">
            <button className="nav-btn-plus" onClick={() => setIsModalOpen(true)}><Plus size={18} /></button>
            <Bell size={20} className="nav-icon" /><Mail size={20} className="nav-icon" />
            <div className="profile-chip">
              <img src="https://ui-avatars.com/api/?name=Justice+Abban&background=0ea5e9&color=fff&bold=true" alt="User" />
              <div className="profile-info"><span className="user-name">Justice Abban</span><span className="user-role">MIS Head</span></div>
              <ChevronDown size={14} color="#64748b" />
            </div>
          </div>
        </nav>

        <main className="rms-content">
          <div className="stats-grid">
            <div className="stat-card"><span className="stat-label">Total Records</span><h2 className="stat-value">{letters.length}</h2><span className="stat-sub">Registry</span></div>
            <div className="stat-card"><span className="stat-label">Incoming</span><h2 className="stat-value">{letters.filter(l=>l.status==='Awaiting Action').length}</h2><span className="stat-sub">Received</span></div>
            <div className="stat-card"><span className="stat-label">Pending</span><h2 className="stat-value">{letters.filter(l=>l.status==='Pending').length}</h2><span className="stat-sub">In Progress</span></div>
            <div className="stat-card chart-card">
              <div className="chart-header"><span>Overview</span></div>
              <div className="chart-content">
                 <div className="donut-box"><div className="donut-hole"><span className="donut-total">{letters.length}</span></div></div>
                 <div className="chart-legend">
                    <div className="legend-item">Received <strong>{letters.filter(l=>l.status==='Awaiting Action').length}</strong></div>
                    <div className="legend-item">Pending <strong>{letters.filter(l=>l.status==='Pending').length}</strong></div>
                 </div>
              </div>
            </div>
          </div>

          <div className="table-section">
            <div className="table-header">
              <div className="table-filters">
                <button className="filter-pill" onClick={() => toggleDropdown('officer')}>{filters.officer} <ChevronDown size={14}/></button>
                <button className="filter-pill" onClick={() => toggleDropdown('status')}>{filters.status} <ChevronDown size={14}/></button>
              </div>
              <button className="btn-add-letter" onClick={() => setIsModalOpen(true)}><Plus size={16}/> Add New Incoming Letter</button>
            </div>

            <div className="main-table-container">
              <table className="incoming-table">
                <thead>
                  <tr><th>Serial #</th><th>Date</th><th>From</th><th>Reference</th><th>Subject</th><th>Officer</th><th>File Ref</th><th>Folio</th><th>Status</th><th>Actions</th></tr>
                </thead>
                <tbody>
                  {filteredLetters.map((l) => (
                    <tr key={l.serial_id}>
                      <td>{l.serial_id}</td>
                      <td>{l.date_of_letter ? new Date(l.date_of_letter).toLocaleDateString() : 'N/A'}</td>
                      <td><span className="sender-tag">{l.sender_org}</span></td>
                      <td style={{ fontWeight: 600 }}>{l.reference_no}</td>
                      <td>{l.subject}</td>
                      <td>{l.action_officer_id}</td>
                      <td>{l.file_ref_no}</td>
                      <td>{l.folio_no}</td>
                      <td><span className={`status-badge ${l.status === 'Pending' ? 'pending' : 'awaiting'}`}>{l.status}</span></td>
                      <td className="row-actions">
                        <button className="icon-btn" onClick={() => handleAction('view', l.serial_id)}><Eye size={16} /></button>
                        <button className="icon-btn" onClick={() => handleAction('edit', l.serial_id)}><Edit3 size={16} /></button>
                        <button className="icon-btn delete" onClick={() => handleAction('delete', l.serial_id)}><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredLetters.length === 0 && <div className="no-data-msg" style={{padding: '20px', textAlign: 'center'}}>No matching records found.</div>}
            </div>
          </div>
        </main>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h3>{isEditing ? 'Update Letter Details' : 'Add New Incoming Letter'}</h3>
              <button className="close-btn" onClick={closeModal}><X size={20}/></button>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-grid">
                <div className="form-group"><label>Serial #</label><input type="text" name="serial_id" required value={newLetter.serial_id} onChange={handleInputChange} disabled={isEditing} /></div>
                <div className="form-group"><label>Date of Letter</label><input type="date" name="date_of_letter" required value={newLetter.date_of_letter} onChange={handleInputChange} /></div>
                <div className="form-group"><label>From</label><input type="text" name="sender_org" required value={newLetter.sender_org} onChange={handleInputChange} /></div>
                <div className="form-group"><label>Reference</label><input type="text" name="reference_no" required value={newLetter.reference_no} onChange={handleInputChange} /></div>
                <div className="form-group full-width"><label>Subject</label><input type="text" name="subject" required value={newLetter.subject} onChange={handleInputChange} /></div>
                <div className="form-group">
                  <label>Action Officer</label>
                  <select name="action_officer_id" required value={newLetter.action_officer_id} onChange={handleInputChange}>
                    <option value="">Select Officer</option>
                    <option value="Sarah Chen">Sarah Chen</option>
                    <option value="Justice Abban">Justice Abban</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select name="status" value={newLetter.status} onChange={handleInputChange}>
                    <option value="Awaiting Action">Awaiting Action</option>
                    <option value="Pending">Pending</option>
                    <option value="Dispatched">Dispatched</option>
                  </select>
                </div>
                <div className="form-group"><label>File Ref</label><input type="text" name="file_ref_no" value={newLetter.file_ref_no} onChange={handleInputChange} /></div>
                <div className="form-group"><label>Folio #</label><input type="text" name="folio_no" value={newLetter.folio_no} onChange={handleInputChange} /></div>
                <div className="form-group full-width">
                  <label>Scanned Document</label>
                  <div className="upload-area">
                    <input type="file" id="file-upload" hidden onChange={handleFileChange} />
                    <label htmlFor="file-upload" className="upload-label" style={{ cursor: 'pointer' }}>
                      <Upload size={18} /> {newLetter.document ? newLetter.document.name : 'Upload PDF or Image'}
                    </label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={closeModal}>Cancel</button>
                <button type="submit" className="btn-save">{isEditing ? 'Update Registry' : 'Save Letter'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default IncomingLetters;
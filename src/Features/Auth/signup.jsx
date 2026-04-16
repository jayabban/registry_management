// import React, { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';
// import './signup.css';

import { Database } from "lucide-react";

// // Asset Imports
// import AchdaLogo from '../../assets/images/logo.png';
// import RegistryBg from '../../assets/images/log_bg.jpg';

// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [agreed, setAgreed] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     console.log("Registering:", formData);
//   };

//   return (
//     <div className="reg-page-wrapper">
//       <div className="reg-master-container">
        
//         {/* LEFT COLUMN: HERO SIDE */}
//         <div className="reg-hero-side" style={{ backgroundImage: `url(${RegistryBg})` }}>
//           <div className="reg-hero-overlay">
//             <div className="reg-hero-text-box">
//               <h2 className="reg-hero-heading">Join the Unified Registry</h2>
//               <p className="reg-hero-description">
//                 Create an account to start managing records with hyperautomation 
//                 and streamlined local governance tools.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: FORM SIDE */}
//         <div className="reg-form-side">
//           <div className="reg-content-limiter">
            
//             {/* Brand Identity */}
//             <div className="reg-brand-identity">
//               <div className="reg-logo-box">
//                 <img src={AchdaLogo} alt="ACHDA Logo" className="reg-logo-img" />
//               </div>
//               <div className="reg-brand-text">
//                 <span className="reg-brand-main">ACHDA Registry</span>
//                 <p className="reg-brand-sub">Create New Account</p>
//               </div>
//             </div>

//             {/* Registration Card */}
//             <div className="reg-white-card">
//               <form onSubmit={handleSignUp}>
//                 <div className="reg-input-group">
//                   <label>Full Name</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     placeholder="Justice Abban"
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="reg-input-group">
//                   <label>Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="example@mail.com"
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 {/* Password Grid Row */}
//                 <div className="reg-input-grid">
//                   <div className="reg-input-group">
//                     <label>Password</label>
//                     <div className="reg-pass-relative">
//                       <input
//                         type={showPassword ? 'text' : 'password'}
//                         name="password"
//                         placeholder="••••••••"
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="reg-input-group">
//                     <label>Confirm Password</label>
//                     <div className="reg-pass-relative">
//                       <input
//                         type={showPassword ? 'text' : 'password'}
//                         name="confirmPassword"
//                         placeholder="••••••••"
//                         onChange={handleChange}
//                         required
//                       />
//                       <button 
//                         type="button" 
//                         className="reg-eye-toggle"
//                         onClick={() => setShowPassword(!showPassword)}
//                       >
//                         {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="reg-options">
//                   <label className="reg-checkbox-wrapper">
//                     <input 
//                       type="checkbox" 
//                       checked={agreed}
//                       onChange={(e) => setAgreed(e.target.checked)}
//                       required
//                     />
//                     <span className="reg-checkbox-label">
//                       I agree to the <a href="#">Terms & Conditions</a>
//                     </span>
//                   </label>
//                 </div>

//                 <button type="submit" className="reg-submit-btn">
//                   Create Account
//                 </button>
//               </form>
//             </div>

//             <div className="reg-footer-links">
//               <p>Already have an account? <a href="/login">Sign In</a></p>
//             </div>
//             <p className="auth-copyright">
//               &copy; {new Date().getFullYear()} ACHDA. All rights reserved.
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default SignUpPage;


//with Database


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import './signup.css';

// Asset Imports
import AchdaLogo from '../../assets/images/logo.png';
import RegistryBg from '../../assets/images/log_bg.jpg';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    staff_id: '', // Added to match your 11-column DB
    unit: 'MIS Unit' // Default value
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    if (status.message) setStatus({ type: '', message: '' });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    // 1. Frontend Validation
    if (formData.password !== formData.confirmPassword) {
      return setStatus({ type: 'error', message: 'Passwords do not match!' });
    }

    if (formData.password.length < 6) {
      return setStatus({ type: 'error', message: 'Password must be at least 6 characters.' });
    }

    if (!agreed) {
      return setStatus({ type: 'error', message: 'Please agree to the Terms & Conditions.' });
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
          staff_id: formData.staff_id.trim(), // Correct key for your DB
          unit: formData.unit // Correct key for your DB
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If server returns 500, data.detail will show the SQL error
        throw new Error(data.detail || data.message || 'Registration failed');
      }

      setStatus({ type: 'success', message: 'Account created! Redirecting to login...' });
      
      setTimeout(() => navigate('/login'), 2500);

    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="reg-page-wrapper">
      <div className="reg-master-container">
        
        <div className="reg-hero-side" style={{ backgroundImage: `url(${RegistryBg})` }}>
          <div className="reg-hero-overlay">
            <div className="reg-hero-text-box">
              <h2 className="reg-hero-heading">Join the Unified Registry</h2>
              <p className="reg-hero-description">
                Create an account to start managing records with hyperautomation 
                and streamlined local governance tools.
              </p>
            </div>
          </div>
        </div>

        <div className="reg-form-side">
          <div className="reg-content-limiter">
            
            <div className="reg-brand-identity">
              <div className="reg-logo-box">
                <img src={AchdaLogo} alt="ACHDA Logo" className="reg-logo-img" />
              </div>
              <div className="reg-brand-text">
                <span className="reg-brand-main">ACHDA Registry</span>
                <p className="reg-brand-sub">Create New Account</p>
              </div>
            </div>

            <div className="reg-white-card">
              {status.message && (
                <div className={`status-alert alert-${status.type}`} style={{
                  padding: '10px',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  fontSize: '0.85rem',
                  backgroundColor: status.type === 'error' ? '#fee2e2' : '#dcfce7',
                  color: status.type === 'error' ? '#b91c1c' : '#166534',
                  border: `1px solid ${status.type === 'error' ? '#fecaca' : '#bbf7d0'}`,
                  wordBreak: 'break-word'
                }}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSignUp}>
                <div className="reg-input-grid">
                  <div className="reg-input-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      placeholder="Justice Abban"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* NEW FIELD: Staff ID */}
                  <div className="reg-input-group">
                    <label>Staff ID</label>
                    <input
                      type="text"
                      name="staff_id"
                      value={formData.staff_id}
                      placeholder="1358711"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="reg-input-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="example@mail.com"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="reg-input-grid">
                  <div className="reg-input-group">
                    <label>Password</label>
                    <div className="reg-pass-relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        placeholder="••••••••"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="reg-input-group">
                    <label>Confirm</label>
                    <div className="reg-pass-relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        placeholder="••••••••"
                        onChange={handleChange}
                        required
                      />
                      <button 
                        type="button" 
                        className="reg-eye-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="reg-options">
                  <label className="reg-checkbox-wrapper">
                    <input 
                      type="checkbox" 
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                    />
                    <span className="reg-checkbox-label">
                      I agree to the <a href="#">Terms & Conditions</a>
                    </span>
                  </label>
                </div>

                <button type="submit" className="reg-submit-btn" disabled={isLoading}>
                  {isLoading ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                      <Loader2 size={18} className="spinner-animate" /> Creating...
                    </span>
                  ) : "Create Account"}
                </button>
              </form>
            </div>

            <div className="reg-footer-links">
              <p>Already have an account? <a href="/login">Sign In</a></p>
            </div>
            
            <p className="auth-copyright">
              &copy; {new Date().getFullYear()} ACHDA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
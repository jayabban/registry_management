// import React, { useState } from 'react';
// import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
// import './login.css';

// // Asset Imports
// import AchdaLogo from '../../assets/images/logo.png';
// import RegistryBg from '../../assets/images/log_bg.jpg';

// const LoginPage = () => {
//     // Component State
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [rememberMe, setRememberMe] = useState(false);

//     // Form submission handler
//     const handleLogin = (e) => {
//         e.preventDefault();
//         console.log("Login Attempt:", { email, password, rememberMe });
//         // Handle actual authentication logic here
//     };

//     return (
//         <div className="auth-page-wrapper">
//             <div className="auth-master-container">
                
//                 {/* LEFT COLUMN: Hero Side (Teal Overlay) */}
//                 <div className="auth-hero-side" style={{ backgroundImage: `url(${RegistryBg})` }}>
//                     <div className="auth-hero-overlay">
//                         <div className="auth-hero-text-box">
//                             <h2 className="auth-hero-heading">Streamline Your Registry Operations</h2>
//                             <p className="auth-hero-description">
//                                 Manage records, track registries, and optimize information lifecycle management 
//                                 with our comprehensive dashboard.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* RIGHT COLUMN: Form Section */}
//                 <div className="auth-form-side">
//                     <div className="auth-content-limiter">
                        
//                         {/* Brand Identity */}
//                         <div className="auth-brand-identity">
//                             <div className="auth-logo-box">
//                                 <img src={AchdaLogo} alt="ACHDA Logo" className="auth-logo-img" />
//                             </div>
//                             <div>
//                                 <span className="auth-brand-main">ACHDA Registry</span>
//                                 <p className="auth-brand-sub">Management System</p>
//                             </div>
//                         </div>

//                         {/* Login Card */}
//                         <div className="auth-white-card">
//                             <div className="auth-welcome">
//                                 <h3>Welcome back</h3>
//                                 <p>Please enter your credentials to continue</p>
//                             </div>

//                             <form onSubmit={handleLogin}>
                                
//                                 {/* Email Field */}
//                                 <div className="auth-input-group">
//                                     <label htmlFor="emailAddress">Email Address</label>
//                                     <input
//                                         type="email"
//                                         id="emailAddress"
//                                         placeholder="Enter your email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         required
//                                     />
//                                 </div>

//                                 {/* Password Field */}
//                                 <div className="auth-input-group">
//                                     <label htmlFor="userPassword">Password</label>
//                                     <div className="password-relative">
//                                         <input
//                                             type={showPassword ? 'text' : 'password'}
//                                             id="userPassword"
//                                             placeholder="Enter your password"
//                                             value={password}
//                                             onChange={(e) => setPassword(e.target.value)}
//                                             required
//                                         />
//                                         <button 
//                                             type="button" 
//                                             className="eye-toggle"
//                                             onClick={() => setShowPassword(!showPassword)}
//                                             aria-label={showPassword ? "Hide password" : "Show password"}
//                                         >
//                                             {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Remember Me & Forgot Password */}
//                                 <div className="login-options">
//                                     <label className="remember-me">
//                                         <input 
//                                             type="checkbox" 
//                                             checked={rememberMe}
//                                             onChange={(e) => setRememberMe(e.target.checked)}
//                                         />
//                                         Remember me
//                                     </label>
//                                     <a href="/forgot-password">Forgot password?</a>
//                                 </div>

//                                 <button type="submit" className="auth-submit-btn">
//                                     Sign In
//                                 </button>
//                             </form>
//                         </div>

//                         {/* Footer Links */}
//                         <div className="auth-footer-links">
//                             <p>
//                                 Don't have an account? <a href="/signup">Sign Up</a>
//                             </p>
//                         </div>
                        
//                         <p className="auth-copyright">
//                             &copy; 2024 ACHDA. All rights reserved.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;



// import React, { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';
// import './login.css';

// // Asset Imports
// import AchdaLogo from '../../assets/images/logo.png';
// import RegistryBg from '../../assets/images/log_bg.jpg';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [emailError, setEmailError] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Example validation logic
//     if (!email.includes('@')) {
//       setEmailError(true);
//     } else {
//       setEmailError(false);
//       console.log("Login Attempt:", { email, password, rememberMe });
//     }
//   };

//   return (
//     <div className="auth-page-wrapper">
//       <div className="auth-master-container">
        
//         {/* LEFT COLUMN: HERO SIDE */}
//         <div 
//           className="auth-hero-side" 
//           style={{ backgroundImage: `url(${RegistryBg})` }}
//         >
//           <div className="auth-hero-overlay">
//             <div className="auth-hero-text-box">
//               <h2 className="auth-hero-heading">Streamline Your Registry Operations</h2>
//               <p className="auth-hero-description">
//                 Manage records, track registries, and optimize information lifecycle 
//                 management with our comprehensive dashboard.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: FORM SIDE */}
//         <div className="auth-form-side">
//           <div className="auth-content-limiter">
            
//             {/* Branding Identity */}
//             <div className="auth-brand-identity">
//               <div className="auth-logo-box">
//                 <img src={AchdaLogo} alt="ACHDA Logo" className="auth-logo-img" />
//               </div>
//               <div className="auth-brand-text">
//                 <span className="auth-brand-main">ACHDA Registry</span>
//                 <p className="auth-brand-sub">Management System</p>
//               </div>
//             </div>

//             {/* Login Card */}
//             <div className="auth-white-card">
//               <div className="auth-welcome">
//                 <h3>Welcome back</h3>
//                 <p>Please enter your credentials to continue</p>
//               </div>

//               <form onSubmit={handleLogin}>
//                 <div className="auth-input-group">
//                   <label htmlFor="email">Email Address</label>
//                   <input
//                     type="email"
//                     id="email"
//                     className={emailError ? "input-error" : ""}
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                   {emailError && <p className="error-text">Please enter a valid email address</p>}
//                 </div>

//                 <div className="auth-input-group">
//                   <label htmlFor="password">Password</label>
//                   <div className="password-relative">
//                     <input
//                       type={showPassword ? 'text' : 'password'}
//                       id="password"
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                     <button 
//                       type="button" 
//                       className="eye-toggle"
//                       onClick={() => setShowPassword(!showPassword)}
//                       aria-label={showPassword ? "Hide password" : "Show password"}
//                     >
//                       {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                     </button>
//                   </div>
//                 </div>

//                 <div className="login-options">
//                   <label className="remember-me">
//                     <input 
//                       type="checkbox" 
//                       id="rememberMe"
//                       checked={rememberMe}
//                       onChange={(e) => setRememberMe(e.target.checked)}
//                     />
//                     <span>Remember me</span>
//                   </label>
//                   <a href="/forgot_password">Forgot password?</a>
//                 </div>

//                 <button type="submit" className="auth-submit-btn">
//                   Sign In
//                 </button>
//               </form>
//             </div>

//             <div className="auth-footer-links">
//               <p>Don't have an account? <a href="/signup">Sign Up</a></p>
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

// export default LoginPage;


//Plus Login

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To redirect after login
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import './login.css';

// Asset Imports
import AchdaLogo from '../../assets/images/logo.png';
import RegistryBg from '../../assets/images/log_bg.jpg';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  // Status States
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous errors
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // This handles "Invalid credentials" from your server.js
        throw new Error(data.message || 'Login failed');
      }

      // --- SUCCESS LOGIC ---
      console.log("Login Success:", data);
      
      // 1. Store the token (and user info if needed)
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // 2. Redirect to Dashboard
      navigate('/incoming-letters'); 

    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-master-container">
        
        {/* LEFT COLUMN: HERO SIDE */}
        <div className="auth-hero-side" style={{ backgroundImage: `url(${RegistryBg})` }}>
          <div className="auth-hero-overlay">
            <div className="auth-hero-text-box">
              <h2 className="auth-hero-heading">Streamline Your Registry Operations</h2>
              <p className="auth-hero-description">
                Manage records, track registries, and optimize information lifecycle 
                management with our comprehensive dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: FORM SIDE */}
        <div className="auth-form-side">
          <div className="auth-content-limiter">
            
            <div className="auth-brand-identity">
              <div className="auth-logo-box">
                <img src={AchdaLogo} alt="ACHDA Logo" className="auth-logo-img" />
              </div>
              <div className="auth-brand-text">
                <span className="auth-brand-main">ACHDA Registry</span>
                <p className="auth-brand-sub">Management System</p>
              </div>
            </div>

            <div className="auth-white-card">
              <div className="auth-welcome">
                <h3>Welcome back</h3>
                <p>Please enter your credentials to continue</p>
              </div>

              {/* Server Error Display */}
              {errorMessage && (
                <div className="auth-alert-error" style={{
                  padding: '10px', 
                  backgroundColor: '#fee2e2', 
                  color: '#b91c1c', 
                  borderRadius: '8px', 
                  fontSize: '0.85rem', 
                  marginBottom: '15px',
                  border: '1px solid #fecaca'
                }}>
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleLogin}>
                <div className="auth-input-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="auth-input-group">
                  <label htmlFor="password">Password</label>
                  <div className="password-relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button 
                      type="button" 
                      className="eye-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="login-options">
                  <label className="remember-me">
                    <input 
                      type="checkbox" 
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span>Remember me</span>
                  </label>
                  <a href="/forgot-password">Forgot password?</a>
                </div>

                <button type="submit" className="auth-submit-btn" disabled={isLoading}>
                  {isLoading ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                      <Loader2 size={18} className="spinner-animate" /> Verifying...
                    </span>
                  ) : "Sign In"}
                </button>
              </form>
            </div>

            <div className="auth-footer-links">
              <p>Don't have an account? <a href="/signup">Sign Up</a></p>
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

export default LoginPage;
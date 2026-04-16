// import React, { useState } from 'react';
// import { ArrowLeft, MailCheck } from 'lucide-react';
// import './forgot_password.css';

// // Asset Imports
// import AchdaLogo from '../../assets/images/logo.png';
// import RegistryBg from '../../assets/images/log_bg.jpg';

// const ForgotPasswordPage = () => {
//   const [email, setEmail] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to trigger the reset email goes here
//     console.log("Reset link requested for:", email);
//     setIsSubmitted(true);
//   };

//   return (
//     <div className="fp-page-wrapper">
//       <div className="fp-master-container">
        
//         {/* LEFT COLUMN: HERO SIDE */}
//         <div className="fp-hero-side" style={{ backgroundImage: `url(${RegistryBg})` }}>
//           <div className="fp-hero-overlay">
//             <div className="fp-hero-text-box">
//               <h2 className="fp-hero-heading">Streamline Your Registry Operations</h2>
//               <p className="fp-hero-description">
//                 Manage records, track registries, and optimize information lifecycle 
//                 management with our comprehensive dashboard.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: FORM SIDE */}
//         <div className="fp-form-side">
//           <div className="fp-content-limiter">
            
//             {/* Brand Identity */}
//             <div className="fp-brand-identity">
//               <div className="fp-logo-box">
//                 <img src={AchdaLogo} alt="ACHDA Logo" className="fp-logo-img" />
//               </div>
//               <div className="fp-brand-text">
//                 <span className="fp-brand-main">ACHDA Registry</span>
//                 <p className="fp-brand-sub">Management System</p>
//               </div>
//             </div>

//             {/* Content Area */}
//             <div className="fp-white-card">
//               {!isSubmitted ? (
//                 <>
//                   <div className="fp-welcome">
//                     <h3>Forgot Password?</h3>
//                     <p>Enter your email and we'll send a reset link.</p>
//                   </div>

//                   <form onSubmit={handleSubmit}>
//                     <div className="fp-input-group">
//                       <label htmlFor="email">Email Address</label>
//                       <input
//                         type="email"
//                         id="email"
//                         placeholder="Enter registered email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                       />
//                     </div>

//                     <button type="submit" className="fp-submit-btn">
//                       Send Reset Link
//                     </button>
//                   </form>
//                 </>
//               ) : (
//                 <div className="fp-success-state">
//                   <div className="fp-success-icon-box">
//                     <MailCheck size={40} />
//                   </div>
//                   <h3>Check your email</h3>
//                   <p>We've sent a password reset link to <strong>{email}</strong></p>
//                   <button onClick={() => setIsSubmitted(false)} className="fp-secondary-btn">
//                     Didn't receive it? Try again
//                   </button>
//                 </div>
//               )}

//               <div className="fp-back-nav">
//                 <a href="/login">
//                   <ArrowLeft size={16} />
//                   Back to Login
//                 </a>
//               </div>
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

// export default ForgotPasswordPage;



import React, { useState } from 'react';
import { ArrowLeft, MailCheck, Loader2, AlertCircle } from 'lucide-react';
import './forgot-password.css';

// Asset Imports
import AchdaLogo from '../../assets/images/logo.png';
import RegistryBg from '../../assets/images/log_bg.jpg';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:4000/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      // Logic to show the success state
      setIsSubmitted(true);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fp-page-wrapper">
      <div className="fp-master-container">
        
        {/* LEFT COLUMN: HERO SIDE */}
        <div className="fp-hero-side" style={{ backgroundImage: `url(${RegistryBg})` }}>
          <div className="fp-hero-overlay">
            <div className="fp-hero-text-box">
              <h2 className="fp-hero-heading">Streamline Your Registry Operations</h2>
              <p className="fp-hero-description">
                Manage records, track registries, and optimize information lifecycle 
                management with our comprehensive dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: FORM SIDE */}
        <div className="fp-form-side">
          <div className="fp-content-limiter">
            
            {/* Brand Identity */}
            <div className="fp-brand-identity">
              <div className="fp-logo-box">
                <img src={AchdaLogo} alt="ACHDA Logo" className="fp-logo-img" />
              </div>
              <div className="fp-brand-text">
                <span className="fp-brand-main">ACHDA Registry</span>
                <p className="fp-brand-sub">Management System</p>
              </div>
            </div>

            {/* Content Area */}
            <div className="fp-white-card">
              {!isSubmitted ? (
                <>
                  <div className="fp-welcome">
                    <h3>Forgot Password?</h3>
                    <p>Enter your email and we'll send a reset link.</p>
                  </div>

                  {/* Error Alert */}
                  {errorMessage && (
                    <div className="fp-error-alert" style={{
                      padding: '12px',
                      backgroundColor: '#fee2e2',
                      color: '#b91c1c',
                      borderRadius: '8px',
                      marginBottom: '15px',
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      border: '1px solid #fecaca'
                    }}>
                      <AlertCircle size={16} />
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="fp-input-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter registered email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isLoading}
                      />
                    </div>

                    <button type="submit" className="fp-submit-btn" disabled={isLoading}>
                      {isLoading ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                          <Loader2 size={18} className="spinner-animate" /> Sending...
                        </span>
                      ) : "Send Reset Link"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="fp-success-state">
                  <div className="fp-success-icon-box">
                    <MailCheck size={40} color="#12C1A5" />
                  </div>
                  <h3>Check your email</h3>
                  <p>We've sent a password reset link to <strong>{email}</strong></p>
                  <button onClick={() => setIsSubmitted(false)} className="fp-secondary-btn">
                    Didn't receive it? Try again
                  </button>
                </div>
              )}

              <div className="fp-back-nav">
                <a href="/login">
                  <ArrowLeft size={16} />
                  Back to Login
                </a>
              </div>
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

export default ForgotPasswordPage;
import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2, ArrowLeft } from 'lucide-react';
import './reset-password.css';

// Asset Imports
import AchdaLogo from '../../assets/images/logo.png';
import RegistryBg from '../../assets/images/log_bg.jpg';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token'); 

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Logic: Check if the form is valid to enable/disable the button
  const isFormInvalid = 
    !token || 
    isLoading || 
    formData.password.length < 6 || 
    formData.password !== formData.confirmPassword;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      return setStatus({ type: 'error', message: 'Missing or expired reset token.' });
    }

    setIsLoading(true);
    try {
      // Integration with your backend API
      const response = await fetch('http://localhost:4000/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          token: token,
          newPassword: formData.password 
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Update failed');

      setStatus({ type: 'success', message: 'Password updated! Redirecting to login...' });
      setTimeout(() => navigate('/login'), 2000); 
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rp-page-wrapper">
      <div className="rp-master-container">
        
        {/* LEFT COLUMN: HERO SIDE */}
        <div className="rp-hero-side" style={{ backgroundImage: `url(${RegistryBg})` }}>
          <div className="rp-hero-overlay">
            <div className="rp-hero-text-box">
              <h2 className="rp-hero-heading">Secure Your Account</h2>
              <p className="rp-hero-description">
                Ensure your registry data remains protected. Choose a strong password to maintain the integrity of your digital governance operations.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: FORM SIDE */}
        <div className="rp-form-side">
          <div className="rp-content-limiter">
            
            <div className="rp-brand-identity">
              <div className="rp-logo-box">
                <img src={AchdaLogo} alt="ACHDA Logo" className="rp-logo-img" />
              </div>
              <div className="rp-brand-text">
                <span className="rp-brand-main">ACHDA Registry</span>
                <p className="rp-brand-sub">Management System</p>
              </div>
            </div>

            <div className="rp-white-card">
              <div className="rp-welcome">
                <h3>Reset Password</h3>
                <p>Create a new secure password for your account.</p>
              </div>

              {/* Status Display */}
              {status.message && (
                <div className={`rp-alert rp-alert-${status.type}`}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="rp-input-group">
                  <label>New Password</label>
                  <div className="rp-pass-relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      name="password"
                      placeholder="At least 6 characters" 
                      value={formData.password}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="rp-input-group">
                  <label>Confirm New Password</label>
                  <div className="rp-pass-relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      name="confirmPassword"
                      placeholder="Repeat new password" 
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required 
                    />
                    <button 
                      type="button" 
                      className="rp-eye-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {/* Visual Hint for mismatched passwords */}
                  {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p style={{ color: '#ef4444', fontSize: '0.7rem', marginTop: '4px' }}>
                      Passwords do not match
                    </p>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="rp-submit-btn" 
                  disabled={isFormInvalid}
                >
                  {isLoading ? <Loader2 className="rp-spinner" size={20} /> : 'Update Password'}
                </button>
              </form>

              {!token && !isLoading && (
                <p style={{ color: '#ef4444', fontSize: '0.7rem', textAlign: 'center', marginTop: '10px' }}>
                  Invalid access: Token is required to update password.
                </p>
              )}

              <div className="rp-footer-links">
                <a href="/login"><ArrowLeft size={14} /> Back to Login</a>
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

export default ResetPassword;